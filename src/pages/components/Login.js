// import React from "react";
// import { useForm } from "react-hook-form";
// import bcrypt from "bcryptjs";

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       // Hash the password before sending it to the server
//       const hashedPassword = await bcrypt.hash(data.password, 10);
//       // Send the data to the server, replacing the password with the hashed one
//       const response = await fetch("https://youtube-portfolio-backend.vercel.app/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           password: hashedPassword,
//         }),
//       });

//       if (response.ok) {
//         alert("Sign up successful!");
//       } else {
//         alert("Sign up failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during sign-up:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };
//   // portfolio@jalal

//   return (
//     <div className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center" id="SignUp">
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
//         <div className="mb-4">
//           <label className="block text-green-500 text-sm font-bold mb-2">Name</label>
//           <input
//             type="text"
//             {...register("name", { required: "Name is required" })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-green-500 text-sm font-bold mb-2">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: "Email is required" })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-green-500 text-sm font-bold mb-2">Phone</label>
//           <input
//             type="tel"
//             {...register("phone", { required: "Phone number is required" })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
//         </div>

//         <div className="mb-6">
//           <label className="block text-green-500 text-sm font-bold mb-2">Password</label>
//           <input
//             type="password"
//             {...register("password", { required: "Password is required" })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Send login request to the backend
      const response = await fetch(
        "https://youtube-portfolio-backend.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: data.identifier, // Email or phone
            password: data.password,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Store user data in local storage (excluding sensitive info like password)
        localStorage.setItem("user", JSON.stringify(result));
        alert("Login successful!");
        setLoading(false);
        // Reload the page
        router.reload();
      } else {
        setLoading(false);
        alert(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-900 p-6"
        id="Login"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl text-white font-semibold mb-6 text-center">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              {...register("identifier", {
                required: "Email or Phone is required",
              })}
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            />
            {errors.identifier && (
              <p className="text-red-500 text-xs mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-400 mt-1 hover:text-gray-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
            >
              {loading ? "....." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
