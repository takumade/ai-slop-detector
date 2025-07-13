import { useState, useEffect } from 'react';

import "../../assets/App.css";

import { storage } from '#imports';


enum StartStatus {
  NewUser = "NewUser",
  ReturningUser = "ReturningUser"
}



function App() {

  const [startStatus, setStartStatus] = useState('')


  useEffect(() => {
    // @ts-ignore
    storage.getItem('local:slopDetector').then((value) => {
      console.log(value);

      if (value) {
        setStartStatus(StartStatus.ReturningUser)
      } else {
        setStartStatus(StartStatus.NewUser)
      }
    });
  }, []);


  return (
    <div className="flex flex-col ml-4">
      <h1 className="text-3xl font-bold">
        AI Slop Detector 🤖
      </h1>
    </div>
  );
}

export default App;
