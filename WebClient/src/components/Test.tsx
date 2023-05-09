
import { Component, createSignal } from 'solid-js';

export const Test: Component = () => {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount(count() + 1);
    function myincrement(){
        setCount(count() + 1);
    }
    function mydecrement(){
        setCount(count() - 1);
    }

  return (
    <div>
        Test
        <button onClick={myincrement}>Increment</button>
        <button onClick={mydecrement}>Decrement</button>
        <p>Count: {count()}</p>
    </div>

  )
}

