import { useState } from "react"


const AppHook = () => {

    const [temp, setTemp] = useState('')
    const [escala, setEscala] = useState('F')
    const [resultTemp, setResultTemp] = useState(null)
    const [newTemp, setNewTemp] = useState(null)

    const calcular = () => {
        if (escala === 'F') {
            setResultTemp(((temp - 32) * 5)  / 9)
            setNewTemp('C')
        } else {
            setResultTemp(((temp * 9) / 5) + 32)
            setNewTemp('F')
        }
    }

    // const mostrarResultado = () => {
        

    // }
    return (
        <div>
            <h1>Conversor de Temperatura</h1>

            Temperatura: <br />
            <input type="number" name="temperature" onChange={event => setTemp(event.target.value)} />

            <label>
                <input type="radio" name="scale" value="F"
                    checked={escala === 'F'}
                    onChange={event => setEscala(event.target.value)} /> Fahrenheit
            </label>
            <label>
                <input type="radio" name="scale" value="C"
                    checked={escala === 'C'}
                    onChange={event => setEscala(event.target.value)} /> Celsius
            </label>

            <br />
            <input type="button" value="calcular" onClick={calcular} />

            <br />
            {resultTemp}{newTemp}
        </div>
    )

}
export default AppHook;