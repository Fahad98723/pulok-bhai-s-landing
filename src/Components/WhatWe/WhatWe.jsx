import React from "react";
import offer from "../../Assets/what we has to offer.png";
import hand from "../../Assets/hand with gl.png";

const WhatWe = () => {
  return (
    <div>
      <div
        style={{
          background: `url('${offer}') no-repeat `,
          backgroundSize: "100% 100%",
        }}
        className={` text-white py-[150px] relative`}
      >
        <div className="max-w-[1250px] mx-auto p-3 py-20 pb-30">
          <p className="text-[30px] font-semibold">
            What We Has To <br />
            <span>Offer</span>
          </p>

          <p className="md:w-2/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            enim quas debitis necessitatibus aspernatur deserunt quae inventore
            ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!
            Quibusdam, molestiae!
          </p>
        </div>
        <img
          className="absolute right-0 w-[600px] bottom-[-80px]"
          src={hand}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhatWe;
