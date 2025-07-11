import { useState } from 'react';
import { AddProviderForm } from '../../components/AddProvider';

import "../../assets/App.css";


function App() {


  return (
    <div className="flex flex-col ml-4">
     


      <h1 className="text-3xl font-bold">
    AI Slop Detector 🤖
  </h1>

<AddProviderForm />
    </div>
  );
}

export default App;
