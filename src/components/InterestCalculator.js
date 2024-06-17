// src/components/InterestCalculator.js
import React, { useState } from 'react';
import './InterestCalculator.css';


// InterestCalculator component to calculate and display the interest on a shopping total
// for a specified number of months with a fixed interest rate.
function InterestCalculator() {
  // State hooks to hold form inputs and calculation results.
  const [total, setTotal] = useState('');
  const [months, setMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

// Function to handle the calculation of interest when user clicks calculate button.
  const handleCalculate = () => {
    const parsedTotal = parseFloat(total);
    const parsedMonths = parseInt(months, 10);

    // Validates input and performs calculation if inputs are valid.
    if (!isNaN(parsedTotal) && !isNaN(parsedMonths) && parsedMonths > 0) {
      const interestRate = 0.20; // Static interest rate set at 20%
      const totalInterest = parsedTotal * interestRate; // Total interest calculation
      const totalToPay = parsedTotal + totalInterest; // Total amount to pay including interest
      const monthlyPayment = totalToPay / parsedMonths; // Monthly payment amount

      // Set the calculated monthly and total payments to state, formatted to two decimal places.
      setMonthlyPayment(monthlyPayment.toFixed(2));
      setTotalPayment(totalToPay.toFixed(2));
    } else {
      // Reset payments to null if inputs are invalid.
      setMonthlyPayment(null);
      setTotalPayment(null);
    }
  };

  return (
    <div className="interest-calculator">
      <h2>Interest Calculator</h2>
      <div className="calculator-form">
        <div>
          <label>Shopping Total:</label>
          <input 
            type="number" 
            value={total} 
            onChange={(e) => setTotal(e.target.value)} 
            placeholder="Enter total amount" 
          />
        </div>
        <div>
          <label>Number of Months:</label>
          <input 
            type="number" 
            value={months} 
            onChange={(e) => setMonths(e.target.value)} 
            placeholder="Enter number of months" 
          />
        </div>
        <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      </div>
      {monthlyPayment !== null && totalPayment !== null && (
        <div className="results">
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Payment: ${totalPayment}</p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;

