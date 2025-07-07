import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col ">
      <h1 className="text-[15rem] font-bold ">404</h1>
      <Link to="/" className="underline underline-offset-8 text-lg pb-20">
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
