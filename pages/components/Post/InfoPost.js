import React from "react";
import Link from "next/link";

const infoPost = props => {
  return (
    <>
      <div className="flex space-x-3 mt-4">
        <p>{props.tag}</p>
        <p>&#9679;</p>
        <p>{props.date}</p>
      </div>
      <div className="title text-[24px] hover:underline">
        <h2>
          <Link href={`${props.link}`}>{props.title}</Link>
        </h2>
      </div>
      <div className={`description my-4 ${props.display}`}>
        <p>{props.description}</p>
      </div>
      <div className="profile flex items-center space-x-4 mt-4">
        <img className="w-1/5" src={props.imgProfile} />
        <div className="text-left">
          <p>{props.name}</p>
          <p className="text-gray-400 text-[14px]">{props.job}</p>
        </div>
      </div>
    </>
  );
};

export default infoPost;
