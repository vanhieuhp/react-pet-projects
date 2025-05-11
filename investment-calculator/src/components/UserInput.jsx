import InputItem from "./InputItem.jsx";

export default function UserInput({inputData, handleChange}) {
    return (
        <>
            <main id="user-input">
                <div className="input-group">
                    <InputItem id="initial-investment"
                               label="Initial investment"
                               value={inputData.initialInvestment}
                               onChange={(event) => handleChange("initialInvestment", event.target.value)}
                    />
                    <InputItem id="annual-investment"
                               label="Annual investment"
                               value={inputData.annualInvestment}
                               onChange={(event) => handleChange("annualInvestment", event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <InputItem id="expected-return"
                               label="Expected return"
                               value={inputData.expectedReturn}
                               onChange={(event) => handleChange("expectedReturn", event.target.value)}
                    />
                    <InputItem id="duration"
                               label="Duration"
                               value={inputData.duration}
                               onChange={(event) => handleChange("duration", event.target.value)}
                    />
                </div>
            </main>
        </>
    )
}