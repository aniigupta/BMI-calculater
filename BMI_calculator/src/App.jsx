import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('___');

  const calcBmi = (e) => {
    e.preventDefault()

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue === 0 || heightValue === 0) {
      alert("Please enter a valid weight and height")
    } else {
      const bmiValue = (weightValue / (heightValue * heightValue))*10000;
      setBmi(bmiValue.toFixed(1))

      if (bmiValue < 18.5) {
        setMessage('You are underweight')
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You have a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  const reload = () => {
    window.location.reload();
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
          <h2 className='center'>BMI CALCULATOR</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label> weight (Kg)</label>
              <input type='text' placeholder='Enter Weight value' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
            </div>
            <div>
              <label> Height (Cm)</label>
              <input type='text' placeholder='Enter Height value' value={height} onChange={(e) => setHeight(e.target.value)}></input>
            </div>

            <button type='submit' className='btn'>Submit</button>
            <button type='button' className='btn btn-outline' onClick={reload}>Reload</button>

          </form>
          <div className='center'>
            <h2>Your BMI is : {bmi}</h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
