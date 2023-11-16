import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="bg-white border border-2 text-center md:w-[350px] m-5">
      <img className="w-[200px] mx-auto" src={cardData.image} alt="" />

      <div className="desc text-black text-center p-2">
        <p className="text-[20px]">{cardData?.title}</p>
        <p>{cardData?.description}</p>
      </div>
    </div>
  );
};

export default Card;
