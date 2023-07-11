import React from 'react';
import TempCard from './TempCard';
import dayjs from 'dayjs';
import HourlyForecast from './HourlyForecast';

import { weatherCodes } from '../weathercodes';

dayjs().format();

function CurrentWeather({
	city,
	locale,
	currentWeather,
	hourly,
	HiLow,
	isDaytime,
	sunRise,
	sunSet,
}) {
	const currTime = new Date(Date.parse(currentWeather.time));
	const currHour = currTime.getHours();
	const dateString = dayjs(currTime).format('MMMM DD, YYYY');

	const timeArr = hourly.time.slice(currHour, currHour + 24);
	const tempArr = hourly.temperature_2m.slice(currHour, currHour + 24);
	const weatherCodeArr = hourly.weathercode.slice(currHour, currHour + 24);

	const hourlyWeather = timeArr.map(function (time, index) {
		let hour = new Date(Date.parse(time));

		return [hour, tempArr[index], weatherCodeArr[index]];
	});

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-cols-min w-[80%] lg:gap-5 ">
			<TempCard
				currentTemp={currentWeather.temperature}
				city={city}
				locale={locale}
				date={dateString}
				description={weatherCodes[currentWeather.weathercode]}
				HiLow={HiLow}
				isDaytime={isDaytime}
				dateString={dateString}
			/>

			<HourlyForecast
				hourlyWeather={hourlyWeather}
				currTime={currTime}
				sunSet={sunSet}
				sunRise={sunRise}
			/>
		</div>
	);
}

export default CurrentWeather;
