import React, { useEffect, useState } from "react";

const FallingLeaves: React.FC = () => {
  const renderLeave = (numberOfLeave: number = 30): JSX.Element[] => {
    return Array.from({ length: numberOfLeave }, (_, index) => (
      <i key={index}></i>
    ));
  };

  return <div id="leaves">{renderLeave()}</div>;
};

export default FallingLeaves;
