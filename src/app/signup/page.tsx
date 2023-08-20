"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  console.log(router);

  const onSignup = async () => {};
  return (
    <div
      className="flex flex-col items-center 
    min-h-screen justify-center py-2"
    >
      <h1>Signup</h1>
      <hr />
      {/*  */}
      <label htmlFor="username">username</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-lg 
         mb-4 focus:outline-none focus:border-gray-600
         text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
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
        onClick={onSignup}
        className="bg-blue-500 hover:bg-blue-700 text-white
       font-bold py-2 px-4 rounded"
      >
        Sign up
      </button>
      <Link href="/login">visit login page</Link>
    </div>
  );
}
