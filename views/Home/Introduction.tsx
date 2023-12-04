import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="h-[65vh] flex ">
      <div className="flex flex-col w-full h-full justify-center items-center relative">
        <Image
          src={"/marble.webp"}
          height={1000}
          width={1000}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          alt="marble"
        />
        <div className="text-4xl text-gray-600 font-extrabold">
          I N T R O D U C I N G
        </div>
        <div className="w-1/3 text-sm font-light mt-4 text-center">
          Our latest issue is available now. We look at the concepts of design
          thinking and the foundations of the creative spirit through our
          stories and images. Stay curious, stay creative!
        </div>
        <Button
          size={"lg"}
          variant={"secondary"}
          className="mt-12 text-lg font-light"
        >
          Subscribe now
        </Button>
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <Image
          src={"/luxe.webp"}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          alt="luxe"
        />
      </div>
    </div>
  );
};

export default Introduction;
