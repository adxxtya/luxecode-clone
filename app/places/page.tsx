import Image from "next/image";
import React from "react";

const Art = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="container flex justify-center flex-col w-[60%]">
        <div className="text-3xl font-serif mt-28 font-bold">PLACES</div>
        <div className="text-lg font-extralight mt-8 mb-12 w-[80%]">
          Let&apos;s look at spaces through the lens of design and experience.
          From hotels to homes, we pack this section with design inspiration to
          suit every palate.
        </div>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <>
            <div className="flex flex-col justify-center bg-[#FAA5AB] p-8">
              <div className="flex w-full h-[40vh] cursor-pointer">
                <div className="w-[50%]">
                  <Image
                    src="https://static.wixstatic.com/media/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg/v1/fill/w_592,h_790,fp_0.50_0.50,q_90,enc_auto/15a06f_6dc1c242221e432b941a50a01b4ce33a~mv2.jpg"
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover"
                    alt="marble"
                  />
                </div>
                <div className="w-[50%] flex flex-col p-6 bg-white">
                  <div className="text-sm">5 min</div>
                  <div className="text-3xl mt-5 hover:text-[#DEB940]">
                    Beauty in Nature
                  </div>
                  <div className="text-base w-[80%] mt-6 hover:text-[#DEB940]">
                    The Scarab collection, a series of ornaments, jewellery and
                    decor items are the ultimate in luxury. Inspired by none
                    other than Her...
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
