import React, {useState} from "react";
import axios from 'axios'

export function Botones() {
    const [count, setCount] = useState(0)
    const [countColor, setCountColor] = useState({
        marginLeft: 300,
        marginRight: 300,
        fontSize: 40,
        background: "red",
    })
    const [data, setData] = useState({
        numero: 0, 
        tipo: 0
    })
    const request = (numero, tipo) => {
        axios.put('http://localhost:8080/operation', {numero, 
        tipo})
        .then((res) => {
            setCount(res.data.count)
            setCountColor({...countColor, background: res.data.countColor})
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

    const add = () => {
        request(count, 0)
    }

    const substract = () => {
        request(count, 1)
    }

    const divide = () => {
        request(count, 2)
    }

    const reset = () => {
        request(count, 3)
    }

    let center = {textAlign: "center", paddingTop: 40} //css
    let button = {margin: 4,
        backgroundColor: "black",
        color: "white",
        padding: 8,
        borderRadius: 8,
        textTransform: "uppercase",
        paddingLeft: 32,
        paddingRight: 32}

    return(<div style={center}>
            <button style={button} onClick={add}>Add</button>
            <button style={button} onClick={substract}>Substrac</button>
            <button style={button} onClick={divide}>Divide</button>
            <button style={button} onClick={reset}>Reset</button>

            <p style={countColor}>{count}</p>

        </div>
    )
}