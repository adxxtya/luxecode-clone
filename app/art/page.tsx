import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "post" && overview == "Art"]`;
  const data = await client.fetch(query);
  return data;
}

const Art = async () => {
  const data = await getData();

  return (
    <div className="flex justify-center flex-col">
      <div className="container flex justify-center flex-col w-[60%]">
        <div className="text-3xl font-serif mt-28 font-bold">ART</div>
        <div className="text-lg font-extralight mt-8 mb-12 w-[80%]">
          This section sees the coming together of human creative skill and
          imagination. We find art in everything; from the mechanics of a
          beautiful tourbillion to canvasses filled with colours.{" "}
        </div>
        {data.map((post: any) => (
          <>
            <div className="flex flex-col justify-center bg-[#D1EAFF] p-8">
              <div className="flex w-full h-[40vh] cursor-pointer">
                <div className="w-[50%]">
                  <Image
                    src="/luxe.webp"
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover"
                    alt="marble"
                  />
                </div>
                <div className="w-[50%] flex flex-col p-6 bg-white">
                  <div className="text-sm">
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </div>
                  <Link
                    href={`/blogs/${post.slug.current}`}
                    prefetch
                    className="text-3xl mt-5 hover:text-[#DEB940]"
                  >
                    {post.title}
                  </Link>
                  <div className="text-base w-[80%] mt-6 hover:text-[#DEB940]">
                    {post.overview}
                  </div>
                  <div className="text-base line-clamp-3 w-[80%] mt-6 hover:text-[#DEB940]">
                    {post.content[0].children[0].text}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Art;
