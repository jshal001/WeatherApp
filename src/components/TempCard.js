import React from 'react';
import WeatherIcon from './WeatherIcon';

function TempCard({
	currentTemp,
	city,
	locale,
	dateString,
	description,
	HiLow,
	isDaytime,
}) {
	return (
		<div className="flex flex-row justify-start col-span-2 space-x-20 ">
			<div className="flex flex-col items-center text-white text-shadow-lg h-">
				<span className="mt-2 p-1 text-center text-4xl 3xl:text-6xl  ">
					{city}, {locale}
				</span>
				<span className="text-xl 3xl:text-3xl">{dateString}</span>
				<div className="w-[70%] h-full ">
					<WeatherIcon description={description} isDaytime={isDaytime} />
				</div>
			</div>
			<div className="flex flex-col rounded-xl items-center justify-center gap-4 text-white text-shadow-lg">
				<span className=" text-9xl 3xl:text-11xl text-center w-full ">
					{Math.round(currentTemp)}&deg;
				</span>
				<span className="text-4xl 3xl:text-6xl w-full text-center">
					{description}
				</span>
				<span className="text-3xl 3xl:text-5xl text-center w-full">
					{Math.round(HiLow[0])}&deg; | {Math.round(HiLow[1])}&deg;
				</span>
			</div>
		</div>
	);
}

export default TempCard;
