import React from "react";
import offer from "../../Assets/what we has to offer.png";
import hand from "../../Assets/hand with gl.png";
import money from "../../Assets/g.png";
import homesearch from "../../Assets/h.png";
import home from "../../Assets/j.png";
import legal from "../../Assets/k.png";
import budget from "../../Assets/l.png";
import Card from "./Card";

const Essential = () => {
  const data = [
    {
      title: "One",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: money,
    },
    {
      title: "Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: homesearch,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: home,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: legal,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: budget,
    },
  ];
  return (
    <div>
      <div className="max-w-[1250px] mx-auto p-3 ">
        <p className="text-[30px] text-center font-semibold">
          What We Has To <br />
          <span>Offer</span>
        </p>

        <p className="md:w-2/4 mx-auto text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          enim quas debitis necessitatibus aspernatur deserunt quae inventore
          ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!
          Quibusdam, molestiae!
        </p>
      </div>
      <div
        style={{
          background: `url('${offer}') no-repeat `,
          backgroundSize: "100% 100%",
        }}
        className={` text-white  `}
      >
        <div className="max-w-[1250px] mx-auto  md:py-20 md:pb-30">
          <div className="flex flex-wrap justify-center my-10 md:mt-36 mx-auto">
            {data.map((cardData) => (
              <Card cardData={cardData} />
            ))}
          </div>
        </div>
      </div>

      <p className="md:w-2/4 w-full p-3 mx-auto text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim
        quas debitis necessitatibus aspernatur deserunt quae inventore ipsum
        vitae repudiandae quo, quia hic veritatis error sed ea veniam!
        Quibusdam, molestiae!
      </p>
    </div>
  );
};

export default Essential;
