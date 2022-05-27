import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { RiDeleteBack2Line } from 'react-icons/ri'

function App() {

    const [input, setInput] = useState('');
    const [evaluated, setEvaluated] = useState('false');
    const symbols = ['+','-','*','/','.'];

    const addInput = (value) => {
        if (input) {
            if (symbols.includes(value)) {
                let lastChar = input.slice(input.length-1, input.length);
                if (symbols.includes(lastChar)) {
                    const newInput = input.slice(0, input.length-1) + value;
                    setInput(newInput);
                    setEvaluated('false');
                    return
                }
            } else if(evaluated === 'true') {
                setInput(value);
                setEvaluated('false');
                return 
            }
        }
        setEvaluated('false');
        setInput(input + value);
    }

    const handleClear = () => {
        setInput('');
        setEvaluated('false');
    }

    const handleCharDelete = () => {
        const newOutput = input.slice(0, input.length-1)
        setInput(newOutput);
        setEvaluated('false');
    }

    const calculate = () => {
        if (input && input.replace('.', '')) {
            setInput(String(evaluate(input)));
            setEvaluated('true');
        }
    }

    return (
        <div className="App">
            <div className='calculator-container'>
                <Screen outputText={input} />
                <div className='fila-calculadora'>
                    <Button handleClick={handleClear} children="Clear" double='true' symbol='true' />
                    <Button handleClick={handleCharDelete} children={<RiDeleteBack2Line />} symbol='true' />
                    <Button handleClick={addInput} children='*' symbol='true' />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="7" />
                    <Button handleClick={addInput} children="8" />
                    <Button handleClick={addInput} children="9" />
                    <Button handleClick={addInput} children='/' symbol='true' />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="4" />
                    <Button handleClick={addInput} children="5" />
                    <Button handleClick={addInput} children="6" />
                    <Button handleClick={addInput} children='-' symbol='true' />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="1" />
                    <Button handleClick={addInput} children="2" />
                    <Button handleClick={addInput} children="3" />
                    <Button handleClick={addInput} children='+' symbol='true' />
                </div>
                <div className='fila-calculadora'>
                    <Button handleClick={addInput} children="0" />
                    <Button handleClick={addInput} children="00" />
                    <Button handleClick={addInput} children="." />
                    <Button handleClick={calculate} children='=' symbol='true' />
                </div>
            </div>
        </div>
    );
}

export default App;
