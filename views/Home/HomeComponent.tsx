import React from "react";
import HomeCarousel from "./HomeCarousel";
import Introduction from "./Introduction";
import WhatsNew from "./WhatsNew";
import SubscribeNow from "./SubscribeNow";
import Contact from "./Contact";

const HomeComponent = () => {
  return (
    <>
      <HomeCarousel />
      <div className="flex flex-col justify-center items-center py-28">
        <div className="font-serif text-3xl font-medium text-center">
          “Art evokes the mystery without which the <br /> world would not
          exist.”
        </div>
        <div className="text-lg font-light mt-2">Artist, René Magritte</div>
      </div>
      <Introduction />
      <WhatsNew />
      <SubscribeNow />
      <Contact />
    </>
  );
};

export default HomeComponent;
