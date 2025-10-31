import React from 'react';

interface TitleBarProps {
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  return (
    <div className="title-bar no-print">
      <div className="traffic-lights">
        <div className="traffic-light close"></div>
        <div className="traffic-light minimize"></div>
        <div className="traffic-light maximize"></div>
      </div>
      <div className="title-bar-text">{title}</div>
    </div>
  );
};

export default TitleBar;
