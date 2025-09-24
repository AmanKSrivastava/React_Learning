import { useState } from "react";

export default function TimerChallange({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  function handleStart() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challange-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerExpired ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
