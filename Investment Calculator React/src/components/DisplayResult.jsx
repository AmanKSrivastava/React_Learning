import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function DisplayResult({ currentInputValues }) {
  const investmentResult = calculateInvestmentResults(currentInputValues);
  let totalIntrest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResult.map((row) => {
          totalIntrest += row.interest;
          const totalAmountInvested = row.valueEndOfYear - totalIntrest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
