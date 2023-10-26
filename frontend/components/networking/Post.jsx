"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import React, { useRef } from "react";
import { useState } from "react";
import axios from "@utils/clientAxiosConfig";
import useUserStore from "@app/Store/UserStore";
import { useRouter } from "next/navigation";

const Post = ({ postId, attributes }) => {
  const commentRef = useRef();

  const router = useRouter();

  const userJwt = useUserStore((state) => state.jwtToken);
  const userData = useUserStore((state) => state.userData);

  const [liked, setLiked] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const [replies, setReplies] = useState(attributes.comments.data);

  const postComment = async (postId) => {
    try {
      const response = await axios({
        url: "/api/comments",
        method: "POST",
        headers: {
          Authorization: `Bearer ${userJwt}`,
        },
        data: {
          data: {
            content: commentRef.current.value,
            author: {
              connect: [userData?.id],
            },
            networking: {
              connect: [postId],
            },
          },
        },
      });
      replies.push(response.data.data);
      const updatedReplies = [...replies];
      setReplies(updatedReplies);
    } catch (err) {
      if (err.response.status) router.replace("/auth?variant=login");
    }
  };

  const likeTweet = () => {
    setLiked(!liked);
  };

  const triggerCommentBox = () => {
    setCommentBox(!commentBox);
  };

  return (
    <div className="w-full flex-col p-4 items-center border-y border-y-gray-600">
      <div className="flex">
        <img
          className="w-14 h-14 mx-2"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile_png"
        />
        <div className="flex justify-center flex-col">
          <small className="flex items-center gap-1 text-gray-400">
            <p>{attributes?.author?.data?.attributes?.fullName}</p>
            <p>{attributes?.author?.data?.attributes?.username}</p>
            <p>{attributes?.publishedAt.replace("T", " ").slice(0, -5)}</p>
          </small>

          <div>
            <p className="text-lg my-1">{attributes.content}</p>
          </div>
          <div className="flex items-center gap-2">
            <div onClick={likeTweet}>
              {liked ? (
                <AiFillHeart className="cursor-pointer text-yellow-400" />
              ) : (
                <AiOutlineHeart className="cursor-pointer" />
              )}
            </div>
            <HiOutlineChatBubbleOvalLeftEllipsis
              onClick={triggerCommentBox}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {commentBox ? (
        <div>
          <div className="flex flex-col">
            {replies.map((reply) => {
              return (
                <div
                  key={reply.id}
                  className="flex items-center gap-2 border-b border-b-neutral-500 p-2 w-1/2 ml-5"
                >
                  <img
                    className="w-10 h-10 mx-2"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile_png"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                    <small>Username</small>
                      <small className="text-gray-400">
                        {reply?.attributes?.updatedAt
                          .replace("T", " ")
                          .slice(0, -5)}
                      </small>
                    </div>
                    <p>{reply?.attributes?.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-1/2 items-center gap-2 m-4 ml-5">
            <img
              className="w-10 h-10 mx-2"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile_png"
            />
            <input
              type="text"
              placeholder="Write your reply"
              ref={commentRef}
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
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
            />
            <button
              onClick={async () => {
                await postComment(postId);
              }}
              className="bg-yellow-400 rounded-full p-2 font-medium hover:bg-yellow-500"
            >
              Reply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
