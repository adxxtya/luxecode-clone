import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

async function getData() {
  const query = `*[_type == "post" && overview == "Places" || overview == "Art" || overview == "People" || overview == "Things"]`;
  const data = await client.fetch(query);
  return data;
}

const WhatsNew = async () => {
  const data = await getData();
  return (
    <div className="flex w-full justify-center">
      <div className="container w-[60%] mt-12 ">
        <div className="text-6xl font-semibold font-serif">What&apos;s new</div>
        <div className="grid grid-cols-2 gap-8 mt-10 place-items-center">
          {data.map((post: any) => (
            <div className="col-span-1 w-full h-[65vh] relative" key={post}>
              <div className="w-full z-10 text-white flex gap-2 flex-col justify-end items-start h-full pl-6 pb-8">
                <div className="z-30 font-light text-sm text-gray-200 hover:text-white cursor-pointer">
                  {post.overview}
                </div>
                <div className="z-30 font-semibold text-3xl cursor-pointer hover:text-gray-200">
                  {post.title}
                </div>
              </div>
              <Image
                src="https://static.wixstatic.com/media/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg/v1/fill/w_592,h_790,fp_0.50_0.50,q_90,enc_auto/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg"
                height={1000}
                width={1000}
                className="absolute top-0 left-0 w-full h-full object-cover -z-30"
                alt="marble"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-20" />
              <div className="absolute top-8 left-8 w-full h-full z-20 text-sm text-white font-serif">
                {new Date(post._createdAt).toISOString().split("T")[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
