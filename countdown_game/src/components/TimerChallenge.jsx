import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const dialog = useRef();
    const timer = useRef();
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    if (remainingTime <= 0) {
        clearInterval(timer.current);
        setRemainingTime(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset() {
        setRemainingTime(targetTime * 1000);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className="">
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}