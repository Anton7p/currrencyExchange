import './CurrencyExchange.css';
import DocumentHeader from "../DocumentHeader/DocumentHeader";
import SwitchTab from "../SwitchTab/SwitchTab";

export function CurrencyExchange1(props) {
	return (
		 <div className="wrapper">
			 <div className='document'>
				 <DocumentHeader/>
				 <div className='document_main'>
					 <SwitchTab {...props}/>
				 </div>
			 </div>
		 </div>
	);
}

