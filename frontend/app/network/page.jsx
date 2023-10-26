"use client";

import { useEffect, useRef, useState } from "react";

import { FaFeatherAlt } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import axios from "@utils/clientAxiosConfig";
import useUserStore from "@app/Store/UserStore";
import { useRouter } from "next/navigation";
import Post from "@components/networking/Post";

const page =() => {
  const userJwt = useUserStore((state) => state.jwtToken);
  const userData = useUserStore((state) => state.userData);
  const postInput = useRef();
  const router = useRouter();
  const [allPosts, setAllPosts] = useState([]);
  const [loading,setLoading]=useState(false)

  const getAllPosts = () => {
    axios({
      method: "GET",
      url: "/api/networkings?populate=*",
    }).then((res) => {
      setAllPosts(res.data.data);
    });
  };



  useEffect(() => {
      getAllPosts();
  },[]);

  const releasePost = async () => {
    setLoading(true)
    try {
      const response = await axios({
        method: "POST",
        url: "/api/networkings",
        headers: {
          Authorization: `Bearer ${userJwt}`,
        },
        data: {
          data: {
            content: postInput.current.value,
            author: {
              connect: [parseInt(userData?.id)],
            },
          },
        },
      });
      postInput.current.value=""
      setLoading(false)
      getAllPosts()
    } catch (err) {
      if (err.response.status) router.replace("/auth?variant=login");
    }
   
  };
 
  return (
    <div className="flex">
      <div className="flex items-center min-h-screen flex-col p-4 m-4 w-full">
        <div className="flex flex-initial w-full my-2">
          <p className="text-3xl font-semibold">Home</p>
        </div>

        <div className="w-full p-4 items-center border-y border-y-gray-600">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="
          w-full
          p-4 
          text-lg 
          bg-black 
          border-b
          border-neutral-800 
          rounded-md
          outline-none
          text-white
          focus:border-yellow-300
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
            ref={postInput}
          />
          <div className="flex flex-row-reverse my-2">
            <button
              onClick={async () => await releasePost()}
              className="flex font-medium items-center gap-2 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition"
            >
              {!loading?<FaFeatherAlt />:
              <ImSpinner8
                className={`${!loading ? "hidden" : ""} animate-spin`}
                size={25}
              />}
              Share a thought
            </button>
          </div>
        </div>

        {allPosts.map(({ id, attributes }) => {
          return <Post key={id} postId={id} attributes={attributes} />;
        })}

      </div>
    </div>
  );
};

export default page;
