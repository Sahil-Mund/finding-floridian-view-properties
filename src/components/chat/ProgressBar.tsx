import React, { useState, useEffect } from "react";

interface PorgressBarProps {
  // Add your component's props here
  value: number;
  maxValue: number;
}

const PorgressBar: React.FC<PorgressBarProps> = ({ value, maxValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (value / maxValue) * 100;
    setProgress(calculatedProgress);
  }, [value, maxValue]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default PorgressBar;
