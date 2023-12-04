import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-[80vh] w-full">
      <div className="flex h-full w-full">
        <div className="w-[50%] h-full relative flex flex-col items-center">
          <div className="flex gap-6 mt-16">
            <div className="text-4xl font-bold">G E T</div>
            <div className="text-4xl font-bold">I N</div>
            <div className="text-4xl font-bold">T O U C H</div>
          </div>
          <div className="flex font-extralight mt-8 w-2/3 text-center">
            The Glass House, Raghuvanshi Mills, Senapati Bapat Marg, Lower
            Parel, Mumbai, MH 400013
          </div>
          <div className="border-b-4 w-[50px] border-solid border-red-500 mt-4 h-[15px]"></div>
          <div className="text-xl mt-3">PRESS INQUIRIES:</div>
          <div className="text-sm font-light mt-2">info@luxecode.in</div>
          <Image
            src={"/sofa.webp"}
            height={1000}
            width={1000}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            alt="sofa"
          />
        </div>
        <div className="w-[50%] bg-[#EED0D0] flex justify-center items-center p-4">
          <form className="w-1/2 bg-white p-8 flex flex-col pt-10 pb-10">
            <div className="text-2xl font-medium">Contact Us</div>
            <div className="flex mt-10 gap-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
            </div>
            <div className="mt-6">
              <Input placeholder="Subject" />
            </div>
            <div className="mt-6">
              <Input placeholder="Write a message" />
            </div>
            <div className="mt-6">
              <Button className="w-full" variant={"outline"}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
