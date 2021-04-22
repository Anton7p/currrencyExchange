import axios from "axios";



export const CurrencyAPI = {
	getCurrency() {
		return axios
			 .get("https://www.cbr-xml-daily.ru/daily_json.js",{
				 'Access-Control-Allow-Origin': '*',
			 })
			 .then((response) => response.data.Valute);
	},
};