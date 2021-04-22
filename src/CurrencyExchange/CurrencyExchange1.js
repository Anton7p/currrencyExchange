import './CurrencyExchange.css';
import SwitchTab from "../SwitchTab/SwitchTab";

export function CurrencyExchange1(props) {
	return (
		 <div className="wrapper">
			 <div className='document'>
				 <div className='document_main'>
					 <SwitchTab {...props}/>
				 </div>
			 </div>
		 </div>
	);
}

