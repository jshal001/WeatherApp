import './App.css';
import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import { getCities, getWeather } from './api';
import AsyncSelect from 'react-select/async';

import { useQuery } from '@tanstack/react-query';
import DailyForecast from './components/DailyForecast';

import { getBackground } from './background';
import { weatherCodes } from './weathercodes';

import clearDay from './assets/clearDay.jpg';

function App() {
	const [selectedValue, setSelectedValue] = useState(null);

	const { status, data: weather } = useQuery({
		enabled: selectedValue !== null,
		queryKey: ['weather', selectedValue],
		queryFn: () => getWeather(selectedValue),

		onError: (error) => console.log(error),
	});

	const currTime = new Date(Date.parse(weather?.current_weather.time));
	const sunRise = new Date(Date.parse(weather?.daily.sunrise[0]));
	const sunSet = new Date(Date.parse(weather?.daily.sunset[0]));
	const isDaytime =
		currTime.getHours() > sunRise.getHours() &&
		currTime.getHours() < sunSet.getHours()
			? true
			: false;

	const handleSelectionChange = (value) => {
		setSelectedValue(value);
	};

	const loadOptions = (searchValue) => {
		return getCities(searchValue);
	};

	return (
		<div className="grid overflow-x-hidden min-h-screen">
			<img
				src={
					weather
						? getBackground(
								isDaytime,
								weatherCodes[weather.current_weather.weathercode]
						  )
						: clearDay
				}
				style={{
					position: 'fixed',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					zIndex: '-1',
				}}
				alt="Weather Background"
			></img>

			<div className="flex flex-col items-center h-full gap-5 lg:gap-0">
				<div className="flex flex-row w-full mt-3 lg:ml-5 justify-center lg:justify-start">
					<div className="lg:w-1/5 lg:mr-3 w-1/2">
						<AsyncSelect
							placeholder="Search for city"
							styles={{
								control: (baseStyles) => ({
									...baseStyles,
									borderRadius: '25px',
									width: '100%',
								}),
							}}
							cacheOptions
							defaultOptions
							value={selectedValue}
							getOptionLabel={(e) =>
								`${e.name}, ${e.admin1}, ${e.country_code}`
							}
							getOptionValue={(e) => ({
								longitude: e.longitude,
								latitude: e.latitude,
							})}
							loadOptions={loadOptions}
							onChange={handleSelectionChange}
						/>
					</div>
				</div>
				{status === 'loading' ? (
					<div className="flex h-full items-center justify-center text-center mx-5">
						<span className="text-5xl text-white">
							Welcome to my weather app! Search for your city to get real time
							weather now!
						</span>
					</div>
				) : (
					<div className="flex flex-col items-center lg:gap-5 lg:mt-2">
						<CurrentWeather
							city={selectedValue?.name}
							locale={selectedValue?.admin1}
							currentWeather={weather.current_weather}
							hourly={weather.hourly}
							HiLow={[
								weather.daily.temperature_2m_max[0],
								weather.daily.temperature_2m_min[0],
							]}
							isDaytime={isDaytime}
							sunRise={sunRise}
							sunSet={sunSet}
						/>

						<DailyForecast dailyWeather={weather.daily} />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
