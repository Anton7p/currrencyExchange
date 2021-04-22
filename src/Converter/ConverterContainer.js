import React, {useEffect, useState} from 'react';
import Converter from "./Converter";
import { shallowEqual, useSelector ,useDispatch} from 'react-redux'
import {setConvertFrom} from "../redux/ConverterReducer";

export function ConverterContainer(props) {
	const dispatch = useDispatch()
	const data = useSelector(state => state.Conversion, shallowEqual)
console.log(data)
	let [valueFrom, setValueFrom] = useState("USD");
	let [valueTo, setValueTo] = useState("EUR");

	let [amountFrom, setAmountFrom] = useState();
	let [amountTo, setAmountTo] = useState();

	let [titleFrom, setTitleFrom] = useState('Доллар США');
	let [titleTo, setTitleTo] = useState('Евро');

	let [objectFrom, setObjectFrom] = useState();
	let [objectTo, setObjectTo] = useState();


	useEffect(() => {
		let currentObject = props.currencies.filter(el => el.CharCode === valueFrom)[0]

		if (currentObject) {
			setTitleFrom(currentObject.Name)
			setObjectFrom(currentObject)
			dispatch(setConvertFrom(currentObject))
			setAmountTo('')
			setAmountFrom('')
		}
	}, [valueFrom])


	useEffect(() => {
		let currentObject = props.currencies.filter(el => el.CharCode === valueTo)[0]

		if (currentObject) {
			setObjectTo(currentObject)
			setTitleTo(currentObject.Name)
			setAmountFrom('')
			setAmountTo('')
		}
	}, [valueTo]);


	const handleSelectValue = (element, id) => {
		if (id === 'from') {
			setValueFrom(element);
		} else if (id === 'to') {
			setValueTo(element);

		}
	}

	function calculated(amount, objectTo, objectFrom) {
		if (!amount) return

		const ValueTo = objectTo.Value
		const NominalTo = objectTo.Nominal

		const ValueFrom = objectFrom.Value
		const NominalFrom = objectFrom.Nominal

		return (((ValueTo / NominalTo) / (ValueFrom / NominalFrom)) * Number(amount)).toFixed(4)
	}

	function onClick() {
		setValueFrom(valueTo)
		setValueTo(valueFrom)
	}


	const handleInputValue = (element, id) => {
		if (id === 'from') {
			setAmountFrom(element);
			setAmountTo(calculated(element, objectTo, objectFrom));
		} else if (id === 'to') {
			setAmountTo(element);
			setAmountFrom(calculated(element, objectTo, objectFrom));
		}
	}


	return (
		 <Converter currencies={props.currencies}
						onClick={onClick}
						handleSelectValue={handleSelectValue}
						handleInputValue={handleInputValue}
						value={{valueFrom, valueTo}}
						amount={{amountFrom, amountTo}}
						title={{titleFrom, titleTo}}

		 />
	);
}

