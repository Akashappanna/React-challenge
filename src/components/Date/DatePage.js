import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";

// css
import classes from "./DatePage.module.css";

const DatePage = () => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState();
  const [duration, setDuration] = useState(0);

  const durationHandler = (e) => {
    if (e.target.value === "") {
      setDuration(e.target.value);
      return;
    }
    const limit = 8;
    const value = parseInt(e.target.value.slice(0, limit));
    setDuration(value);
    return;
  };

  const enterHandler = (e) => {
    // if (e.key === "Enter") {
    //   let result = new Date(from);
    //   result.setDate(result.getDate() + duration);
    //   setTo(result);
    // }

    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (e.key === "Enter") {
      let finalDate = new Date(from);

      // iterating through given user duration
      for (let i = 1; i <= duration; i++) {
        finalDate.setDate(finalDate.getDate() + 1);
        if (weekday[finalDate.getDay()] === "Sat") {
          finalDate.setDate(finalDate.getDate() + 2);
        }
      }
      setTo(finalDate);
    }
  };

  // 7 days in a week
  // check present day if it is friday add 2 to it  if

  // user input is limit
  // n=3
  // present date =8
  // iterating to the range 3 from 0
  // condition if present day is (saturday or sunday)  add 1 to range
  //

  useEffect(() => {
    const timer = setTimeout(() => {
      if (duration === "") {
        alert(" Duration field expects a number (non-negative)");
        return;
      }
    }, [1000]);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={classes.datePage}>
      <div className={classes.fromDate}>
        <h2>
          From <span>(Please enter time manually)</span>
        </h2>

        <DateTimePicker onChange={setFrom} value={from} />
      </div>

      <div className={classes.duration}>
        <label htmlFor="duration">
          Duration in days <span>(Press enter)</span>
        </label>
        <input
          type="number"
          value={duration}
          onChange={durationHandler}
          onKeyPress={enterHandler}
          placeholder="ex.45"
        />
      </div>

      <div className={classes.toDate}>
        <h2>To</h2>

        <DateTimePicker onChange={setTo} value={to} />
      </div>
    </div>
  );
};

export default DatePage;
