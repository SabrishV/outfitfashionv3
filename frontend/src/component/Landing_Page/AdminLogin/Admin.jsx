"use client"
import { fetchJson } from "@/component/lib/fetchjson";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; 
export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState({});
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const resp = await fetchJson("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (resp.token) {
        Cookies.set("token", resp.token, { expires: 7 }); 
        console.log("Token saved in cookies:", resp.token);
        setLoading(false)
        router.push("/dashboard")
      } else if (resp.statusCode === "400") {
        setResp({ type: "error", message: resp.message });
        setLoading(false);
      } else {
        setResp({ type: "error", message: resp.message });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto my-8"
    >
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="border border-gray-400 rounded w-full py-2 px-3"
          {...register("username", {
            required: "This field is required",
          })}
          required
        />
        {errors.username && (
          <p className="text-red-500 text-[12px]">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-400 rounded w-full py-2 px-3"
          {...register("email", {
            required: "This field is required",
          })}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-[12px]">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-400 rounded w-full py-2 px-3"
          {...register("password", {
            required: "This field is required",
          })}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-[12px]">{errors.password.message}</p>
        )}
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? "Loading..." : "Get started"}
      </button>
    </form>
  );
}
