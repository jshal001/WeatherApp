import axios from 'axios';

const searchClient = axios.create({
	baseURL: 'https://geocoding-api.open-meteo.com/v1/search',
});

const weatherClient = axios.create({
	baseURL: 'https://api.open-meteo.com/v1/forecast',
});

export function getCities(searchValue) {
	return searchClient
		.get(`?name=${searchValue}&language=English`)
		.then((res) =>
			res.data.results.filter(function (value, index, self) {
				if (
					index ===
						self.findIndex(
							(i) =>
								i.name === value.name &&
								i.admin1 === value.admin1 &&
								i.country_code === value.country_code
						) &&
					value.admin1
				) {
					return true;
				}
				return false;
			})
		)

		.catch((error) => console.log(error));
}

export function getWeather(selectedValue) {
	return weatherClient
		.get(
			`?latitude=${
				Math.round(10000 * selectedValue.latitude) / 10000
			}&longitude=${
				Math.round(10000 * selectedValue.longitude) / 10000
			}&current_weather=true&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode`
		)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((error) => console.log(error));
}
