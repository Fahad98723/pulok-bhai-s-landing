import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="bg-white border border-2">
      <img className="h-[250px] w-full" src={cardData.image} alt="" />

      <div className="desc text-black text-center p-3">
        <p className="text-[20px]">{cardData?.title}</p>
        <p>{cardData?.description}</p>
      </div>
    </div>
  );
};

export default Card;
