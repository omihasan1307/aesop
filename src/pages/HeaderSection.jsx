import React from "react";

const HeaderSection = () => {
  return (
    <div className="bg-black px-5 py-3 lg:text-center text-white text-sm hover:underline transition duration-700 hover:duration-700 ease-in-out delay-150 underline-offset-8">
      <h1 className="max-w-screen-2xl mx-auto ">
        Click and Collect is now available at Hong Kong stores. Enjoy
        complimentary shipping on orders over HK$400
        <span className="ps-6">+</span>
      </h1>
    </div>
  );
};

export default HeaderSection;
