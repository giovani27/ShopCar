import React,{useState} from 'react';
import {useDispatch} from 'react-redux'

import {addCarFetch} from '../../store/fetch_actions/index'
import {addMessages} from '../../store/ducks/layout'


export default function Add() {

 const [form, setForm] = useState({
	 name: '',
	 url:''
 })
 const dispatch = useDispatch()

	function formchange(e) {
		setForm({...form,[ e.target.name]: e.target.value})
	} 

	function onSubmit(e) {
		e.preventDefault()

		dispatch(addCarFetch(form))
		setForm({name:'', url: ''})
		
		dispatch(addMessages('Cadastrado com Sucesso'))

	}
	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formchange} type="text" name="name" className="form-control" placeholder="Nome..." value={form.name} />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formchange} type="text" name="url" className="form-control" placeholder="URL:https://cars" value={form.url} />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
