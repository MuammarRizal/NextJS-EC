import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-5"></div>
      Memuat Data ...
    </div>
  );
};

export default Loading;
