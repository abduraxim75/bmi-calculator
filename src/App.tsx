import React, { useState } from 'react';
import './app.css';

const App: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; 
    if (weightNum > 0 && heightNum > 0) {
      const bmi = weightNum / (heightNum * heightNum);
      setResult(`Your BMI is ${bmi.toFixed(2)}, Which is considered ${getBMICategory(bmi)}.`);
    } else {
      alert('Please enter valid weight and height!');
    }
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label htmlFor="weight">Weight (kg): </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="height">Height (cm): </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <button type="submit">Calculate BMI</button>
        </form>
        {result && <p>{result}</p>}
      </header>
    </div>
  );
};

export default App;
