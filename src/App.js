import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const addInput = (value) => {
        setInput(input + value);
    }

    const handleClear = () => {
        setInput('');
    }

    const handleCharDelete = () => {
        const newOutput = input.slice(0, input.length-1)
        setInput(newOutput);
    }

    const calculate = () => {
        if (input) {
            setInput(evaluate(input));
        }
    }

    return (
        <div className="App">
            <div className='calculator-container'>
                <Screen outputText={input} />
                <div className='fila-calculadora'>
                    <Button handleClick={handleClear} children="Clear" double='true'/>
                    <Button handleClick={handleCharDelete} children="B" />
                    <Button handleClick={addInput} children="*" />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="7" />
                    <Button handleClick={addInput} children="8" />
                    <Button handleClick={addInput} children="9" />
                    <Button handleClick={addInput} children="/" />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="4" />
                    <Button handleClick={addInput} children="5" />
                    <Button handleClick={addInput} children="6" />
                    <Button handleClick={addInput} children="-" />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="1" />
                    <Button handleClick={addInput} children="2" />
                    <Button handleClick={addInput} children="3" />
                    <Button handleClick={addInput} children="+" />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="0" />
                    <Button handleClick={addInput} children="00" />
                    <Button handleClick={addInput} children="." />
                    <Button handleClick={calculate} children="=" />
                </div>
            </div>
        </div>
    );
}

export default App;
