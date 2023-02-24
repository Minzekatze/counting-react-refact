import React, { useState, useEffect } from "react";
import "./styles.css";
import Instructions from "./Instructions";
import Counter from "./Counter";

const LOCAL_STORAGE_KEY = "counterApp.counter";

export default function App() {
  const [counter, setCounter] = useState([
    { count: 0, id: 1 },
    { count: 0, id: 2 },
    { count: 0, id: 3 }
  ]);

  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedCount) {
      setCounter(storedCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counter));
  }, [counter]);

  function handleIncrease() {
    //const newCounters1 = counter.map((oneCounter) => oneCounter.count + 1);
    //console.log(newCounters1);
    const newCounters = counter.map((oneCounter) => ({
      ...oneCounter,
      count: oneCounter.count + 1
    }));
    setCounter(newCounters);
  }

  function handleDecrease() {
    const newCounters = counter.map((oneCounter) => ({
      ...oneCounter,
      count: oneCounter.count - 1
    }));
    setCounter(newCounters);
  }

  function counting(id) {
    const newCounters = [...counter];
    const myCounter = newCounters.find((oneCounter) => oneCounter.id === id);
    myCounter.count++;
    setCounter(newCounters);
  }

  function decreasing(id) {
    const newCounters = [...counter];
    const myCounter = newCounters.find((oneCounter) => oneCounter.id === id);
    myCounter.count--;
    setCounter(newCounters);
  }

  return (
    <>
      <Instructions />
      <div class="block">
        <em>My little counters</em>
        <Counter
          counter={counter}
          decreasing={decreasing}
          counting={counting}
          key={counter.id}
        />
        <button className="btn" onClick={handleDecrease}>
          decrease all
        </button>
        <button className="btn" onClick={handleIncrease}>
          increase all
        </button>
      </div>
    </>
  );
}
