/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-14 fixed shadow-lg flex flex-row items-center px-6 bg-white">
      <img alt="logo" src="/dag-system.png" className="h-12"></img>
      <p className="mx-4 font-black">TEST TECHNIQUE</p>
    </div>
  );
}
