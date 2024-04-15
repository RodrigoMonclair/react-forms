import { useState } from "react"

export default function FormLogin(){

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        alert(`Seu usuário é ${form.email}, senha: ${form.password}`)
        setForm({
            email: "",
            password: ""
        })
    }
    return(

        <div>
            <form action="post">
            <label htmlFor="email">email: </label>
            <input type="email" name="email" onChange={handleChange}/>
            <label htmlFor="password">Senha</label>
            <input type="text" name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Salvar</button>

            </form>
        </div>
    )
}