import React from 'react';
import DailyCard from './DailyCard';
import dayjs from 'dayjs';

dayjs().format();

function DailyForecast({ dailyWeather }) {
	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const dailyCards = [];

	for (let i = 1; i < 7; i++) {
		let day = weekdays[new Date(dailyWeather.time[i]).getUTCDay()];

		// let day = dailyWeather.time[i];
		dailyCards.push(
			<DailyCard
				key={i}
				day={day}
				weatherCode={dailyWeather.weathercode[i]}
				high={dailyWeather.temperature_2m_max[i]}
				low={dailyWeather.temperature_2m_min[i]}
			/>
		);
	}
	return (
		<div className="grid grid-cols-1 grid-rows-7  w-[80%]  mb-4 mt-3 lg:gap-4">
			{dailyCards}
		</div>
	);
}

export default DailyForecast;
