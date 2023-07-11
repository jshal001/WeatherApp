import React from 'react';

import { weatherCodes } from '../weathercodes';
import WeatherIcon from './WeatherIcon';

function DailyCard({ day, weatherCode, high, low }) {
	return (
		<div className="flex flex-row 3xl:h-2/3 items-center text-white text-2xl 3xl:text-4xl mt-1 mb-1 rounded-xl bg-gray-700 bg-opacity-40 space-x-10">
			<span className="w-full text-center ">{day}</span>
			<div className="w-1/6 h-full">
				<WeatherIcon description={weatherCodes[weatherCode]} isDaytime={true} />
			</div>
			<span className="w-full text-center">
				{Math.round(high)}&deg; | {Math.round(low)}&deg;
			</span>
		</div>
	);
}

export default DailyCard;
