import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Car from '../../components/Car';
import {getAllCars} from '../../store/fetch_actions/index'

import {addItem} from '../../store/ducks/cart'
import {addMessages} from '../../store/ducks/layout'


export default function List() {
	const cars =	useSelector(state => state.cars)
	const dispatch =  useDispatch()

	useEffect(() => {
		dispatch(getAllCars())
	}, [dispatch])

	function addItemCart(car){
		 dispatch(addItem(car))
          dispatch(addMessages(`${car.name} Adicionado com sucesso`))
	}

	return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} addItemCart={addItemCart} />)}</div>
		</div>
	);
}
