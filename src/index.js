import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {CurrencyExchangeContainer} from "./CurrencyExchange/CurrencyExchangeContainer";


ReactDOM.render(
	 <Provider store={store}>
		 <BrowserRouter>
			 <CurrencyExchangeContainer/>
		 </BrowserRouter>
	 </Provider>,
	 document.getElementById('root')
);

