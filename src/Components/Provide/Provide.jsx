import React from "react";
import image1 from "../../Assets/a wealth.png";
import image2 from "../../Assets/2.png";
import image3 from "../../Assets/3.png";
import image4 from "../../Assets/4.png";
import image5 from "../../Assets/5.png";
import image6 from "../../Assets/6.png";
import image7 from "../../Assets/7.png";
import image8 from "../../Assets/8.png";
import image9 from "../../Assets/9.png";
import image10 from "../../Assets/10.png";
import Card from "./Card";

const Provide = () => {
  const data = [
    {
      title: "Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image5,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image6,
    },
    {
      title: "Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image7,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image8,
    },
    {
      title: "Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image9,
    },
    {
      title: "Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim quas debitis necessitatibus aspernatur deserunt quae inventore ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!  Quibusdam, molestiae!",
      image: image10,
    },
  ];
  return (
    <div>
      <div className={` text-white pb-[20px] `}>
        <div className="max-w-[1250px] mx-auto p-3">
          <div className=" my-10 mt-36">
            {data.map((cardData, index) => (
              <Card cardData={cardData} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
