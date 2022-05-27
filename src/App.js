import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <div className='calculator-container'>
            <Screen outputText="10 + 2" />
            <div className='fila-calculadora'>
                <Button children="C" double='true'/>
                <Button children="B" />
                <Button children="*" />
            </div>
            <div className='fila-calculadora'>
                <Button children="7" />
                <Button children="8" />
                <Button children="9" />
                <Button children="/" />
            </div>
            <div className='fila-calculadora'>
                <Button children="4" />
                <Button children="5" />
                <Button children="6" />
                <Button children="-" />
            </div>
            <div className='fila-calculadora'>
                <Button children="1" />
                <Button children="2" />
                <Button children="3" />
                <Button children="+" />
            </div>
            <div className='fila-calculadora'>
                <Button children="0" />
                <Button children="00" />
                <Button children="." />
                <Button children="=" />
            </div>
        </div>
    </div>
  );
}

export default App;
