import React, { useState } from "react";
import { SEASONAL_FRUITS_AND_VEGETABLES } from "/constants/seasonal-fruits-and-vegetables";
import { Months } from "/enums/months.enum";
import { ProduceType } from "/enums/produce-type.enum";
import { DateTime } from "luxon";

const SeasonalFruitsAndVeggies = () => {
  const currentMonth = DateTime.now().monthLong?.toUpperCase();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

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
          Vegetables of the month:
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value={Months.JANUARY}>{Months.JANUARY}</option>
            <option value={Months.FEBRUARY}>{Months.FEBRUARY}</option>
            <option value={Months.MARCH}>{Months.MARCH}</option>
            <option value={Months.APRIL}>{Months.APRIL}</option>
            <option value={Months.MAY}>{Months.MAY}</option>
            <option value={Months.JUNE}>{Months.JUNE}</option>
            <option value={Months.JULY}>{Months.JULY}</option>
            <option value={Months.AUGUST}>{Months.AUGUST}</option>
            <option value={Months.SEPTEMBER}>{Months.SEPTEMBER}</option>
            <option value={Months.OCTOBER}>{Months.OCTOBER}</option>
            <option value={Months.NOVEMBER}>{Months.NOVEMBER}</option>
            <option value={Months.DECEMBER}>{Months.DECEMBER}</option>
          </select>
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
