import { useEffect } from 'react';
import "./Popup.css";
import { AIProviderSelector } from '@/components/AIProviderSelector';

export default function() {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      🤖 AI Slop Detector
      </h1>
      <p>
        "Slop detected!!!"
      </p>
      <p>
        Template: <code>react-ts</code>
      </p>

      <AIProviderSelector/>
    </div>
  )
}
