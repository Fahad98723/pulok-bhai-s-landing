import React from "react";
import southSurrey from "../../Assets/why south surrey.png";
import stronSense from "../../Assets/community.png";
import naturebeauty from "../../Assets/surrey.png";
import doorstep from "../../Assets/8.png";
import Card from "./Card";

const WhySouth = () => {
  const data = [
    {
      title: "One",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: naturebeauty,
    },
    {
      title: "Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: stronSense,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: stronSense,
    },
  ];
  return (
    <div>
      <div
        style={{
          background: `url('${southSurrey}') center center`,
          backgroundSize: "100% 100%",
        }}
        className={` text-white md:pt-[270px]  bg-no-repeat md:block hidden`}
      >
        <div className="max-w-[1250px] mx-auto p-3">
          <p className="text-[30px] font-semibold">
            Why <span className="text-[40px]">South Surrey</span> Is <br />
            The Perfect Place For Your home
          </p>

          <p className="md:w-2/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            enim quas debitis necessitatibus aspernatur deserunt quae inventore
            ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!
            Quibusdam, molestiae!
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-2 my-10 mt-36">
            {data.map((cardData) => (
              <Card cardData={cardData} />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: `url('${southSurrey}') top center no-repeat`,
        }}
        className={` text-white pt-[250px] bg-no-repeat md:hidden block`}
      >
        <div className="max-w-[1250px] mx-auto p-3 ">
          <p className="text-[30px] font-semibold">
            Why <span>South Surrey</span> Is <br />
            The Perfect Place For Your home
          </p>

          <p className="md:w-2/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            enim quas debitis necessitatibus aspernatur deserunt quae inventore
            ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!
            Quibusdam, molestiae!
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10 md:my-10 md:mt-36 mt-20">
            {data.map((cardData) => (
              <Card cardData={cardData} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto p-3">
        <p className="text-black text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          asperiores repudiandae saepe natus! Consequatur aliquid rem a commodi
          omnis sed assumenda earum tempora facilis quidem, ratione, est,
          sapiente quasi optio.
        </p>
      </div>
    </div>
  );
};

export default WhySouth;
