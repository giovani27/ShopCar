import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {RemoveItem} from '../../store/ducks/cart'
import Itemcart from '../../components/itemCart/index'
import {addMessages} from '../../store/ducks/layout'

export default function Cart() {
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	function removeItemCart(car) {
		dispatch(RemoveItem(car._id))
		dispatch(addMessages(`${car.name}  Removido com Sucesso`))
	}
	
	return <div className="container-fluid">
		<div className="row">
			{cart.length === 0 ? <p className="col-12 mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
				: (
					<React.Fragment>
						{cart.map(item => (
				            <Itemcart key={item._id} item={item} removeItemCart={removeItemCart}/>
						))}
					</React.Fragment>
				)
			}
		</div>
	</div>;
}
