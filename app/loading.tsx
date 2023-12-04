import React from "react";

const Loading = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Loading;
