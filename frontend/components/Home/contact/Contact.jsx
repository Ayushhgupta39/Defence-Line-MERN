import Input from "./Input";
import Textbox from "./Textbox";
import axios from "@utils/axiosConfig";


const Contact = () => {

  

  return (
    <main className="w-full flex flex-col p-4 bg-defence_blue min-h-screen">
      <div className="flex font-anton text-6xl tracking-wider m-4">
        <span className="mr-2 text-yellow-400">CONTACT</span>
        <span>US</span>
      </div>
      <hr className="border-4 w-1/5 border-yellow-400 my-2 mx-4" />

      <div className="m-4">
        <Input name={"name"} type={"text"} id={"name"} label={"Name"} />
        <Input name={"email"} type={"email"} id={"email"} label={"Email"} />
        <Textbox
          name={"message"}
          type={"text"}
          id={"message"}
          label={"Message"}
          rows={3}
        />
        <button className="border-2 p-2 w-1/12 border-yellow-400" type="button" >Contact Us</button>
      </div>
    </main>
  );
};

export default Contact;
