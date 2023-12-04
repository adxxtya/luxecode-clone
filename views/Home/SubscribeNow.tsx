"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

const SubscribeNow = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 mt-20">
      <div className="flex gap-8 font-extrabold text-slate-700 text-3xl">
        <div>S U B S C R I B E</div>
        <div>N O W</div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 mt-10">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Contact No." />
          <Button variant={"sub"}>Subscribe</Button>
        </div>
        <div className="flex gap-2 mt-6 text-xs">
          <Checkbox />I accept Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default SubscribeNow;
