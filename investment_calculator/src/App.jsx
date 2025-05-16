import Header from "./components/Header.jsx";
import {useState} from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";


function App() {
    const [inputData, setInputData] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12
    })

    function handleChange(inputIdentifier, newValue) {
        setInputData((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            }
        })
    }

    const isValidDuration = inputData.duration > 0;

    return (<>
        <Header/>
        <UserInput inputData={inputData} handleChange={handleChange}/>
        {!isValidDuration && <p className="center">Please enter invalid duration!</p>}
        {isValidDuration && <Results inputData={inputData}/>}

    </>)
}

export default App
