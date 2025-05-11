import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({inputData}) {
    const calculateResults = calculateInvestmentResults(inputData);
    const initialInvestment = calculateResults[0].valueEndOfYear - calculateResults[0].interest - calculateResults[0].annualInvestment;

    return (
        <>
            <table id="result" className="center">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>
                {calculateResults.map((result) => {
                    const totalInterest =
                        result.valueEndOfYear -
                        result.annualInvestment * result.year -
                        initialInvestment;
                    const totalInvestedCapital = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvestedCapital)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}