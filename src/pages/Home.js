import React, { useState } from "react";
import HabitPanel from "../components/HabitPanel";
import SideSection from "../components/SideSection";
import MainSection from "../components/MainSection";
import { TitleLogo } from "../components/TitleLogo";

const Home = ({ mainSection, setMainSection }) => {
  const [habitName, setHabitName] = useState();
  const [habitData, setHabitData] = useState([]);
  return (
    <div className="h-screen flex">
      <SideSection>
        <TitleLogo 
          setMainSection={setMainSection} />
        <HabitPanel 
          mainSection={mainSection} setMainSection={setMainSection} 
          setHabitName={setHabitName} setHabitData={setHabitData}
          />
      </SideSection>
      <MainSection 
        mainSection={mainSection} setMainSection={setMainSection} 
        habitName={habitName} habitData={habitData}
        setHabitData={setHabitData}/>
    </div>
  );
};

export default Home;
