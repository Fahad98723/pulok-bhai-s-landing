import React from "react";
import layer from "../../Assets/Layer 0.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        style={{
          background: `url('${layer}') no-repeat center center`,
          backgroundSize: "cover",
        }}
        className={`h-[45vh] mb-10`}
      >
        <div className="max-w-[1250px] mx-auto p-3 py-36 text-center ">
          <p className="text-[30px] font-semibold">Why Choose Save Max</p>
          <p className="text-[30px] font-semibold">For South Surrey Homes</p>

          <p className="md:w-2/4 w-full mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            enim quas debitis necessitatibus aspernatur deserunt quae inventore
            ipsum vitae repudiandae quo, quia hic veritatis error sed ea veniam!
            Quibusdam, molestiae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
