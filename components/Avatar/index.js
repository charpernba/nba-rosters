import React from "react";
import Image from "next/image";
/**
 * Avatar
 * @param {*} prop
 */
export default function Avatar({ imgUrl, alt = "", height = 20, width = 20 }) {
  return (
    <div
      className={`relative flex items-center content-center h-${height} w-${width}`}
    >
      <Image src={imgUrl} alt={alt} layout="fill" />
    </div>
  );
}
