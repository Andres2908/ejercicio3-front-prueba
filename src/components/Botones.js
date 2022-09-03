import React, {useState} from "react";

export function Botones() {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count+1)
    }
    const substracCount = () => {
        setCount(count-2)
    }
    const divideCount = () => {
        setCount(count/3)
    }
    const resetCount = () => {
        setCount(0)
    }

    let center = {textAlign: "center", paddingTop: 40} //css
    
    return(<div style={center}>
            <button onClick={addCount}>Add</button>
            <button onClick={substracCount}>Substrac</button>
            <button onClick={divideCount}>Divide</button>
            <button onClick={resetCount}>Reset</button>

            <p style={{fontSize: 40}}>{count}</p>

        </div>
    )
}