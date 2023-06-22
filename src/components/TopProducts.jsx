import React, { useState } from "react";
import PieChart from "./PieChart";

function TopProducts() {
  const [month, setMonth] = useState("May - June 2021");
  const pieChartData = {
    "May - June 2021": [
      { product: "Basic Tees", percent: "55" },
      { product: "Custom Short Pants", percent: "31" },
      { product: "Super Hoodies", percent: "14" },
    ],
    "June - July 2021": [
      { product: "Basic Tees", percent: "30" },
      { product: "Custom Short Pants", percent: "40" },
      { product: "Super Hoodies", percent: "30" },
    ],
    "July - August 2021": [
      { product: "Basic Tees", percent: "25" },
      { product: "Custom Short Pants", percent: "15" },
      { product: "Super Hoodies", percent: "60" },
    ],
  };

  function handleSelect(e) {
    setMonth(e.target.value);
  }

  return (
    <div className="bg-white w-full h-full rounded-lg pb-4">
      <div className="flex justify-between items-center m-5 mb-23 pt-8">
        <h1 className="font-montserrat font-bold text-xl leading-20">
          Top Products
        </h1>
        <select
          className="font-montserrat font-normal text-base leading-17 w-40 bg-white border-gray-300 border rounded p-1"
          value={month}
          onChange={handleSelect}
        >
          {Object.keys(pieChartData).map((ele, index) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex justify-around">
        <div>
          <PieChart data={pieChartData[month]} />
        </div>
        <div>
          {pieChartData[month].map((ele, index) => {
            return (
              <div key={ele.product} className="flex items-start">
                <div
                  className={`${
                    index === 0
                      ? "bg-green-400"
                      : index === 1
                      ? "bg-yellow-400"
                      : "bg-red-400"
                  } h-4 w-4 rounded-full mt-1 mr-3`}
                ></div>
                <div>
                  <span className="font-montserrat font-bold text-base leading-17">
                    {ele.product}
                  </span>
                  <br />
                  <span className="font-lato font-normal text-base leading-17">
                    {ele.percent}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
