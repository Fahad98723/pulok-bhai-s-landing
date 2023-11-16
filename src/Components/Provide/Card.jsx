import React from "react";

const Card = ({ cardData, index }) => {
  console.log(index / 2);
  return (
    <div
      className={`bg-white relative  my-2 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex items-center  ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <img
          className="h-[80px] w-[80px] rounded-full z-10"
          src={cardData.image}
          alt=""
        />

        <p className="text-[20px] text-black md:mx-5 mx-2">{cardData?.title}</p>
      </div>

      <div
        className={`flex items-center bg-black absolute z-0 mt-[-7px] h-[5px] md:w-[500px] w-[90%] ${
          index % 2 === 0 ? "right-8" : "left-8"
        }`}
      ></div>

      <div
        className={`flex items-center text-black  my-5 md:mx-24 ${
          index % 2 === 0 ? "flex-row-reverse text-right" : ""
        }`}
      >
        <p className="md:w-[350px]">{cardData?.description}</p>
      </div>
    </div>
  );
};

export default Card;
