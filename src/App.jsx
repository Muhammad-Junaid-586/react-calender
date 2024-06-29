import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { generateDate, months } from "./utils/calender";
import cn from "./utils/cn";
import dayjs from "dayjs";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function App() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex w--full justify-center gap-3 divide-x-2 h-screen items-center">
      <div className="w-96 h-96">
        <div className="flex justify-between">
          <h1 className="font-extrabold">{months[today.month()]}</h1>
          <h1 className=" font-extrabold">{today.year()}</h1>
          {/* <div className="flex items-center gap-5">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() + 1))}
            />
          </div> */}
        </div>
        <div className="w-full grid grid-cols-7 text-gray-500">
          {days.map((day, ind) => (
            <h1 className="font-bold h-14 grid place-content-center" key={ind}>
              {day}
            </h1>
          ))}
        </div>

        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, ind) => {
              const isSelected = date && selectDate.isSame(date, "day");

              return (
                <div className="h-14 grid place-content-center" key={ind}>
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-300",
                      currentMonth
                        ? "hover:bg-black hover:text-white transition-all cursor-pointer"
                        : "",
                      today ? "bg-red-600 text-white" : "",
                      isSelected ? "bg-black text-white" : "",
                      "h-10 w-10 grid place-content-center rounded-full"
                    )}
                    onClick={() => {
                      if (date && currentMonth) {
                        setSelectDate(date);
                      }
                    }}
                  >
                    {date ? date.date() : ""}
                  </h1>
                </div>
              );
            }
          )}
        </div>
        <div className="flex items-center gap-5 justify-between">
          {/* <GrFormPrevious
            className="w-5 h-5 cursor-pointer"
            onClick={() => setToday(today.month(today.month() - 1))}
          /> */}
          <button
            className=" bg-transparent border-2 hover:border-2 px-3 py-1 cursor-pointer hover:border-black rounded-lg"
            onClick={() => setToday(today.month(today.month() - 1))}
          >
            Prev
          </button>
          <h1
            className="cursor-pointer"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            Today
          </h1>
          {/* <GrFormNext
            className="w-5 h-5 cursor-pointer"
            onClick={() => setToday(today.month(today.month() + 1))}
          /> */}
          <button
            className=" bg-transparent border-2 hover:border-2 px-3 py-1 cursor-pointer hover:border-black rounded-lg"
            onClick={() => setToday(today.month(today.month() + 1))}
          >
            Next
          </button>
        </div>
      </div>
      <div className="h-96 w-72 px-5">
        <h1 className="font-semibold">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>
        <p>No meeting for today</p>
      </div>
    </div>
  );
}

export default App;
