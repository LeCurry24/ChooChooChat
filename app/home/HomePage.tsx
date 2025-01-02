import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">ChooChooChat</h1>
      </div>
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="mb-6 ">
          <input
            type="text"
            placeholder="email..."
            className="input input-bordered input-md w-80 max-w-xs text-xl"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Password..."
            className="input input-bordered input-md w-80 max-w-xs text-xl"
          />
        </div>
        <div className="flex justify-center">
          <button className=" btn btn-wide font-bold text-xl">Sign In</button>
        </div>
        <div className="flex flex-row">
          <div className="mt-2">Don't Have An Account</div>
          <Link href="/signup" className="ml-2 mt-2">
            <b>Sign Up</b>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
