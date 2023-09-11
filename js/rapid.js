const GetW = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6fb56c9db1msh3f38aefee3cf02bp1be153jsn102cd529a059',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if(result.success){
			CityF = result.data
			console.log(CityF)
			newData()
		}else{
			alert('Esa no es una ciudad padrino')
		}
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}