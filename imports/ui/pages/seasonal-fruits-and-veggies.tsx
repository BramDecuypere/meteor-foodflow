import React, { useState } from "react";
import { SEASONAL_FRUITS_AND_VEGETABLES } from "/constants/seasonal-fruits-and-vegetables";
import { Months } from "/enums/months.enum";
import { ProduceType } from "/enums/produce-type.enum";

const SeasonalFruitsAndVeggies = () => {
  const [selectedMonth, setSelectedMonth] = useState(Months.MAY);

  const lists = [
    {
      title: "Vegetables",
      produceType: ProduceType.VEGETABLE,
    },
    {
      title: "Fruits",
      produceType: ProduceType.FRUIT,
    },
  ];

  return (
    <div className="mx-auto flex max-w-xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col justify-between py-4 px-2 my-4 w-full">
        <div className="text-2xl mb-4">
          Vegetables of the month: {selectedMonth}
        </div>

        <div className="flex w-full">
          {lists.map(({ title, produceType }, idx) => (
            <div key={idx} className="flex flex-col flex-grow">
              <div className="text-xl">{title}</div>
              <ul className="pl-4">
                {SEASONAL_FRUITS_AND_VEGETABLES.filter(
                  (val) => val.months.indexOf(selectedMonth) > -1
                )
                  .filter((val) => val.type === produceType)
                  .map((val, idx2) => (
                    <li key={idx2} className="list-disc">
                      {val.name.nl}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalFruitsAndVeggies;
