import React from "react";

const Card = ({ cardData, index }) => {
  console.log(index / 2);
  return (
    <div
      className={`bg-white md:flex items-end  my-5 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
    >
      <img className="h-full w-[500px]" src={cardData.image} alt="" />

      <div
        className={`desc text-black   md:mx-10 ${
          index % 2 === 0 ? "text-right" : "text-left"
        }`}
      >
        <p className="text-[20px]">{cardData?.title}</p>
        <p className="md:w-[350px]">{cardData?.description}</p>
      </div>
    </div>
  );
};

export default Card;
