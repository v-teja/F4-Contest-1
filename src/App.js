import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [operation, setOperation] = useState("");
  // const [result, setResult] = useState('');
  const [resultMessage, setResultMessage] = useState("");


  const handleButtonClick = (event) => {
   
    if (num1 === '') {
      setErrorMessage('Error: Num1 cannot be empty');
      return;
    }
    if (num2 === '') {
      setErrorMessage('Error: Num2 cannot be empty');
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage("Error: Please enter valid numbers");
      return;
    } 
    setErrorMessage('');
    setOperation(event.target.value);
    setResultMessage("Calculating...");

    new Promise(resolve => {
     const  ans = resultOfOperation(Number(num1), Number(num2));
    // setResult(ans);
    setTimeout(() => {
      resolve(ans);
    }, 1000);
  }).then((ans) => {
    const displayResult = document.getElementById("operation-result");
    setResultMessage("Success: Your result is shown above");
    displayResult.innerText = "Result: " + ans;
  });
};
    

  function resultOfOperation(num1,num2){
    if (operation === "+") {
      return num1 + num2;
    } else if (operation === "-") {
      return num1 - num2;
    } else if (operation === "*") {
      return num1 * num2;
    } else if (operation === "/") {
      return num1 / num2;
    } 
  }


  return (
    <div className="App">
      <h1 className='header'>React Calculator</h1>
      <div className="input-div">
        <input type='text' id="num1-input" placeholder='Num 1' onChange={(event) => setNum1(event.target.value)}></input>
        <input type="text" id="num2-input" placeholder='Num 2' onChange={(event) => setNum2(event.target.value)}></input>
      </div>
      <div className="btn-div">
        <button className="btn" onClick={handleButtonClick} value="+">+</button>
        <button  className="btn" onClick={handleButtonClick} value="-">-</button>
        <button  className="btn" onClick={handleButtonClick} value="*">x</button>
        <button  className="btn" onClick={handleButtonClick} value="/">/</button>
      </div>
      <div id="message-div">
        <p>{ errorMessage}</p>
      </div>
      <div id="result-div">
        <p id="operation-result"></p>
        <p id="result-msg">{resultMessage}</p>
      </div>
      

    </div>
  );
}

export default App;
