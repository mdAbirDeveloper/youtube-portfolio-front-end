import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    setLoading(true);
    setSuccess("");
    setError("");
    fetch("https://youtube-portfolio-backend.vercel.app/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Handle successful response here
        setSuccess(
          "Thank you for your valuable message, we will reply you very soon."
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
        setError("your message not send, something are wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li className="flex">
          <a href="https://www.linkedin.com/in/shah-jalal-programmer/">
            <AiFillLinkedin className="w-[70px] md:mt-3 mt-8 h-auto text-gray-300" />
          </a>
          <div className="m-5">
            <h3 className="text-lg font-bold h-auto text-gray-200">Contact</h3>
            <p className="text-gray-400">WhatsApp: +880 1832822560</p>
          </div>
        </li>

        <li className="flex">
          <a href="https://github.com/mdAbirDeveloper">
            {" "}
            <AiFillGithub className="w-[70px] mt-2 h-auto text-gray-300" />
          </a>
          <div className="m-5">
            <h3 className="text-lg font-bold h-auto text-gray-200">
              Working Hours
            </h3>
            <p className="text-gray-400">Mon-Fri: 8am-5pm</p>
          </div>
        </li>
      </ul>

      <form
        className="max-w-6xl p-5 md:p-12"
        id="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          required
          id="name"
          type="text"
          name="name"
          placeholder="Your Name ...."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-4"
          {...register("name")}
        />
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder="Your Email ...."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-4"
          {...register("email")}
        />
        <textarea
          required
          cols={30}
          rows={4}
          id="textarea"
          type="textarea"
          name="textarea"
          placeholder="Your Massage ...."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-4"
          {...register("message")}
        />
        <p className="text-green-500">{success}</p>
        <p className="text-red-500">{error}</p>
        {loading ? (
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-200 font-semibold- text-xl bg-gradient-to-r from-[#50a7c7] via-[#295d9c] to-[#3d6ca4]"
          >
            ....
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-200 font-semibold- text-xl bg-gradient-to-r from-[#50a7c7] via-[#295d9c] to-[#3d6ca4]"
          >
            Send Message
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
