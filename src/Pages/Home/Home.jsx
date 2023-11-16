import React from "react";
import WhySouth from "../../Components/WhySouth/WhySouth";
import WhatWe from "../../Components/WhatWe/WhatWe";
import Services from "../../Components/Services/Services";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Provide from "../../Components/Provide/Provide";
import Process from "../../Components/Process/Process";
import Essential from "../../Components/Essential/Essential";

const Home = () => {
  return (
    <div>
      <WhySouth />
      <WhatWe />
      <Services />
      <WhyChooseUs />
      <Provide />
      <Process />
      <Essential />
    </div>
  );
};

export default Home;
