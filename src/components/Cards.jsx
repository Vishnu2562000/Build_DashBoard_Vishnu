import React from "react";

function Cards() {
  const cards = [
    {
      icon: "/assets/revenue.svg",
      title: "Total Revenues",
      text: "$2,129,430",
      bgColor: "bg-green-100",
    },
    {
      icon: "/assets/totalTransactions.svg",
      title: "Total Transactions",
      text: "1,520",
      bgColor: "bg-yellow-100",
    },
    {
      icon: "/assets/likes.svg",
      title: "Total Likes",
      text: "9,721",
      bgColor: "bg-red-100",
    },
    {
      icon: "/assets/totalUsers.svg",
      title: "Total Users",
      text: "892",
      bgColor: "bg-indigo-100",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      style={{ marginRight: "60px" }}
    >
      {cards.map((card, index) => (
        <div key={index} className={`w-full ${card.bgColor} p-6 rounded-xl`}>
          <div className="flex justify-end">
            <img src={card.icon} alt={card.title} />
          </div>
          <div>
            <p className="font-lato font-normal text-sm md:text-base">
              {card.title}
            </p>
            <h2 className="font-open-sans font-semibold text-2xl md:text-3xl">
              {card.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
