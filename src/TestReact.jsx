import React, {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)

    function increment() {
        
        setCounter(counter + 3)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment}>Добавить</button>
            <button onClick={decrement}>Убрать</button>
        </div>
    )
}

export default App