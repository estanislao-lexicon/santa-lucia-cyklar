import React from 'react';

function FourColumnGrid({ firstColumnContent, secondColumnContent, thirdColumnContent, fourthColumnContent }) {
  return (
    <div className="grid grid-cols-4 gap-4 min-h-screen">
      {/* First Column */}
      <div className="col-span-1 p-4">{firstColumnContent}</div>

      {/* Second Column */}
      <div className="col-span-1 p-4">{secondColumnContent}</div>

      {/* Third Column */}
      <div className="col-span-1 p-4">{thirdColumnContent}</div>

      {/* Fourth Column */}
      <div className="col-span-1 p-4">{fourthColumnContent}</div>
    </div>
  );
}

export default FourColumnGrid;
