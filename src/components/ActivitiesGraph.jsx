import React, { useState } from "react";
import LineChart from "./LineChart";

function Activities() {
  const [month, setMonth] = useState("May - June 2021");
  const lineChartData = {
    "May - June 2021": {
      user: [200, 400, 300, 100, 250],
      guest: [300, 200, 100, 200, 350],
    },
    "June - July 2021": {
      user: [400, 400, 100, 200, 300],
      guest: [300, 200, 200, 100, 400],
    },
    "July - August 2021": {
      user: [400, 300, 200, 500, 280],
      guest: [200, 300, 400, 500, 300],
    },
  };

  function handleSelect(e) {
    setMonth(e.target.value);
  }

  const containerStyle = {
    width: "100%",
    maxWidth: "calc(100% - 60px)",
    margin: "0 auto",
    marginRight: "60px",
    background: "white",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={containerStyle} className="flex flex-col">
      <p className="font-montserrat font-semibold text-xl mb-3">Activities</p>

      <select
        className="font-montserrat font-normal leading-17px border-transparent text-gray-600"
        style={{
          fontSize: "14px",
          width: "150px",
          height: "30px",
          borderRadius: "10px",
          textAlign: "center",
        }}
        value={month}
        onChange={handleSelect}
      >
        {Object.keys(lineChartData).map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
      </select>

      <div className="flex justify-end items-center gap-20 bg-white mt-2">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-red-400 mr-4 rounded-full"></div>
          <span>Guest</span>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-green-500 mr-4 rounded-full"></div>
          <span>User</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <div className="w-full">
          <div className="bg-white rounded-20 p-2">
            <LineChart
              user={lineChartData[month].user}
              guest={lineChartData[month].guest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
