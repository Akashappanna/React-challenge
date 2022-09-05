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
    if (e.key === "Enter") {
      var result = new Date(from);
      result.setDate(result.getDate() + duration);
      setTo(result);
    }
  };

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
