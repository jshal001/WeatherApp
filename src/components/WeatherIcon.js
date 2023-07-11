import React from 'react';
import ClearDay from '../assets/clear-day.svg';
import Cloudy from '../assets/cloudy.svg';
import PartlyCloudyDay from '../assets/partly-cloudy-day.svg';
import PartlyCloudyNight from '../assets/partly-cloudy-night.svg';
import FogDay from '../assets/fog-day.svg';
import FogNight from '../assets/fog-night.svg';
import Rain from '../assets/rain.svg';
import PartlyRainyDay from '../assets/partly-cloudy-day-rain.svg';
import PartlyRainyNight from '../assets/partly-cloudy-night-rain.svg';
import Snow from '../assets/snow.svg';
import PartlySnowyDay from '../assets/partly-cloudy-day-snow.svg';
import PartlySnowyNight from '../assets/partly-cloudy-night-snow.svg';
import StarryNight from '../assets/starry-night.svg';

function WeatherIcon({ description, isDaytime }) {
	let weatherIcon = null;
	if (isDaytime) {
		switch (description) {
			case 'Clear Sky':
				weatherIcon = ClearDay;
				break;

			case 'Mostly Clear':
			case 'Partly Cloudy':
				weatherIcon = PartlyCloudyDay;
				break;

			case 'Cloudy':
				weatherIcon = Cloudy;
				break;

			case 'Fog':
				weatherIcon = FogDay;
				break;

			case 'Drizzle':
			case 'Slight Rain':
			case 'Moderate Rain':
			case 'Light Rain':
			case 'Light Showers':
			case 'Moderate Showers':
				weatherIcon = PartlyRainyDay;
				break;

			case 'Heavy Rain':
			case 'Heavy Showers':
				weatherIcon = Rain;
				break;

			case 'Light snow':
			case 'Light Snow Showers':
			case 'Snowing':
				weatherIcon = PartlySnowyDay;
				break;

			case 'Heavy Snow':
			case 'Heavy Snow Showers':
				weatherIcon = Snow;
				break;

			default:
				weatherIcon = ClearDay;
				break;
		}
	} else {
		switch (description) {
			case 'Clear Sky':
				weatherIcon = StarryNight;
				break;

			case 'Mostly Clear':
			case 'Partly Cloudy':
				weatherIcon = PartlyCloudyNight;
				break;

			case 'Cloudy':
				weatherIcon = Cloudy;
				break;

			case 'Fog':
				weatherIcon = FogNight;
				break;

			case 'Drizzle':
			case 'Slight Rain':
			case 'Moderate Rain':
			case 'Light Rain':
			case 'Light Showers':
			case 'Moderate Showers':
				weatherIcon = PartlyRainyNight;
				break;

			case 'Heavy Rain':
			case 'Heavy Showers':
				weatherIcon = Rain;
				break;

			case 'Light snow':
			case 'Light Snow Showers':
			case 'Snowing':
				weatherIcon = PartlySnowyNight;
				break;

			case 'Heavy Snow':
			case 'Heavy Snow Showers':
				weatherIcon = Snow;
				break;

			default:
				weatherIcon = StarryNight;
				break;
		}
	}

	return (
		<img
			src={weatherIcon}
			alt="Weather icon"
			style={{
				maxWidth: '100%',
				maxHeight: '100%',
			}}
		/>
	);
}

export default WeatherIcon;
