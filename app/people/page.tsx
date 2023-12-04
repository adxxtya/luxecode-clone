import Image from "next/image";
import React from "react";

const Art = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="container flex justify-center flex-col w-[60%]">
        <div className="text-3xl font-serif mt-28 font-bold">PEOPLE</div>
        <div className="text-lg font-extralight mt-8 mb-12 w-[80%]">
          What makes a success story? Let’s discover the struggle and the magic
          behind these faces who are game-changers.
        </div>
        <div className="flex mb-20 justify-center bg-[#D1EAFF] p-8">
          <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col-span-1 relative cursor-pointer" key={item}>
                <div className="aspect-square bg-orange-50 w-full">
                  <Image
                    src="https://static.wixstatic.com/media/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg/v1/fill/w_592,h_790,fp_0.50_0.50,q_90,enc_auto/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg"
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover"
                    alt="marble"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />
                <div className="absolute top-4 left-4 text-white z-0 text-sm">
                  5 min
                </div>
                <div className="absolute left-4 bottom-4 text-2xl text-white z-0 max-w-[90%] truncate overflow-hidden overflow-ellipsis">
                  Artful Simplicity
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
