import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    // useState a use kora 0  holo count er default man. pore setCount update hole tar man automatically count er man hisebe bose jabe.


    const handleAdd = () => {
        // console.log('add button clicked');
        // setCount(5);
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: '2px solid yellow'
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}