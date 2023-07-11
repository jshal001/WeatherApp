import React from 'react';
import HourlyCard from './HourlyCard';
function HourlyForecast({ hourlyWeather, currTime, sunSet, sunRise }) {
	return (
		<div className="col-span-2 flex flex-row lg:ml-2 lg:gap-2 ">
			<div className="lg:flex lg:items-center lg:justify-center lg:col-start-6 lg:col-end-6 lg:w-1/4 hidden">
				<div className="h-[200px] 3xl:h-[300px] lg:bg-white w-[1px]"></div>
			</div>
			<div className="flex flex-row overflow-x-scroll scrollbar-hide items-center justify-start gap-4">
				{hourlyWeather.map((weather) => {
					let hour = weather[0];
					let hourString = hour.toLocaleString('en-US', { hour: 'numeric' });
					return (
						<HourlyCard
							key={weather}
							hour={
								currTime.toLocaleString('en-US', { hour: 'numeric' }) ===
								hourString
									? 'Now'
									: hourString
							}
							temperature={Math.round(weather[1])}
							weatherCode={weather[2]}
							isDaytime={
								hour.getHours() > sunRise.getHours() &&
								hour.getHours() < sunSet.getHours()
									? true
									: false
							}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default HourlyForecast;
