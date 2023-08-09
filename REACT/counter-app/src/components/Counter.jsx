import { useState } from 'react';
import '../css/Counter.css'

function Counter(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 0) return
        setCount(count - 1);
    }
    return (
        <div className="counter">
            <div className='title'>{props.title}</div>
            <div className='number'>{count}</div>
            <button className='button' onClick={increment}>Increment</button>
            <button className='button' onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;