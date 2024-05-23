import React, {useState} from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

// import LeftSidebar from './LeftSidebar';

const Home = () => {
  const [slideIn, setSlideIn] = useState(false); // Initial state for slide-in visibility

  const handleSlideIn = () => {
    setSlideIn(!slideIn); // Toggle slideIn state on click
  };

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      //
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
