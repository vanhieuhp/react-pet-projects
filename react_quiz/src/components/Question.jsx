import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import {useState} from "react";
import QUESTIONS from "../questions.js";

const SELECTED_ANSWER_TIMER = 500;
const CORRECT_ANSWER_TIMER = 600;

export default function Question(
    {
        index,
        onSelectAnswer,
        onSkipAnswer,
    }) {


    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = SELECTED_ANSWER_TIMER;
    }

    if (answer.isCorrect !== null) {
        timer = CORRECT_ANSWER_TIMER;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, CORRECT_ANSWER_TIMER);
        }, SELECTED_ANSWER_TIMER);
    }

    let answerState = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                timeout={timer}
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answer
                answers={QUESTIONS[index].answers}
                answerState={answerState}
                selectedAnswer={answer.selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    )

}
