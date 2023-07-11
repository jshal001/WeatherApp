import React from 'react';
import WeatherIcon from './WeatherIcon';
import { weatherCodes } from '../weathercodes';

function HourlyCard({ hour, temperature, weatherCode, isDaytime }) {
	return (
		<div className="flex flex-col shrink-0 rounded-xl items-center text-2xl 3xl:text-4xl text-white bg-gray-700 bg-opacity-40 w-[13%] lg:w-1/5">
			<span className="w-full text-center ">{hour}</span>
			<div className="w-full">
				<WeatherIcon
					description={weatherCodes[weatherCode]}
					isDaytime={isDaytime}
				/>
			</div>

			<span className="w-full text-center">{temperature}&deg; </span>
		</div>
	);
}

export default HourlyCard;
