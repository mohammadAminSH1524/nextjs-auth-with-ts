"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const onLogin = async () => {};
  return (
    <div
      className="flex flex-col items-center 
    min-h-screen justify-center py-2"
    >
      <h1>Login</h1>
      <hr />

      {/*  */}
      <label htmlFor="email">email</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-lg 
         mb-4 focus:outline-none focus:border-gray-600
         text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      {/*  */}
      <label htmlFor="password">password</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-lg 
         mb-4 focus:outline-none focus:border-gray-600
         text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      {/*  */}
      <button
        onClick={onLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white
       font-bold py-2 px-4 rounded"
      >
       Login
      </button>
      <Link href="/signup">visit signup page</Link>
    </div>
  );
}
