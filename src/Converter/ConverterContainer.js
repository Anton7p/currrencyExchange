import React, {useEffect, useMemo} from 'react';
import {Converter} from "./Converter";
import {useDispatch, useSelector} from "react-redux";
import {setConvert, setConvertFrom, setConvertTo} from "../redux/ConverterReducer";
import {setAmountFrom, setAmountTo} from "../redux/AmountReduser";
import {calculated} from "../lib/calculated";

export function ConverterContainer(props) {
	const dispatch = useDispatch()
	const {convertFrom, convertTo, convert} = useSelector((state => state.Conversion))
	const {amountFrom, amountTo} = useSelector((state => state.Amount))


	useEffect(() => {
		dispatch(setConvert(props.currencies))
	}, [props]);


	function handleInputValue(element, id) {
		if (id === 'from') {
			dispatch(setAmountFrom(element))
			dispatch(setAmountTo(calculated(convertFrom, convertTo, element)))
		}
		// if (id === 'to') {
		// 	dispatch(setAmountTo(element))
		// 	dispatch(setAmountFrom(calculated(convertTo, convertFrom, element)))
		// }
	}

	function handleSelectValue(element, id) {
		const currentObject = convert.filter(el => el.CharCode === element)
		if (id === 'from') {
			dispatch(setConvertFrom(...currentObject))
			dispatch(setAmountTo(calculated(...currentObject, convertTo, amountFrom)))
		}
		if (id === 'to') {
			dispatch(setConvertTo(...currentObject))
			dispatch(setAmountTo(calculated(convertFrom, ...currentObject, amountFrom)))
		}
	}

	function handleClick() {
		dispatch(setConvertTo(convertFrom))
		dispatch(setConvertFrom(convertTo))
		dispatch(setAmountTo(amountFrom))
		dispatch(setAmountFrom(amountTo))
	}

	return (
		 <Converter currencies={convert}
						convertFrom={convertFrom}
						convertTo={convertTo}
						amountFrom={amountFrom}
						amountTo={amountTo}
						handleInputValue={handleInputValue}
						handleSelectValue={handleSelectValue}
						handleClick={handleClick}
		 />
	);
}

