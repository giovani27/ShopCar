import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {authLogin} from '../../store/fetch_actions'

export default function Login() {


    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const dispatch  = useDispatch()

    function changeForm(e) {
        const {name, value} =  e.target
        setForm({...form, [name]: value})
    }
    function submitForm(e){
        e.preventDefault()
        dispatch(authLogin(form))
        setForm({username: '', password: ''})


    }


    return (

        <form onSubmit={submitForm}
         style={{
            width: "350px",
            margin: "40px auto",

        }} >
            <h2 className="text-center">Shopping Car Login</h2>
            <div className="form-group">
                <input value={form.username} name="username" onChange={changeForm} placeholder="Usuario"className="form-control"/>
            </div>
            <div className="form-group">
                <input value={form.password} name="password" onChange={changeForm} placeholder="Senha"className="form-control" type="password" />
            </div>
            <div className="form-group">
                 <button className="btn btn-primary btn-block">Logar</button>
            </div>
        </form>
    )
}