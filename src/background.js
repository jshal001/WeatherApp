import clearDay from './assets/clearDay.jpg';
import clearNight from './assets/clearNight.jpg';
import cloudyDay from './assets/cloudyDay.jpg';
import cloudyNight from './assets/cloudyNight.jpg';
import cloudy from './assets/cloudy.jpg';
import fogDay from './assets/fogDay.jpg';
import fogNight from './assets/fogNight.jpg';
import rainyDay from './assets/rainyDay.jpg';
import rainyNight from './assets/rainyNight.jpg';
import snowyDay from './assets/snowyDay.jpg';
import snowyNight from './assets/snowyNight.jpg';

export function getBackground(isDaytime, description) {
	let bgImg = null;
	if (isDaytime) {
		switch (description) {
			case 'Clear Sky':
				bgImg = clearDay;
				break;

			case 'Mostly Clear':
			case 'Partly Cloudy':
				bgImg = cloudyDay;
				break;

			case 'Cloudy':
				bgImg = cloudy;
				break;

			case 'Fog':
				bgImg = fogDay;
				break;

			case 'Drizzle':
			case 'Slight Rain':
			case 'Moderate Rain':
			case 'Light Rain':
			case 'Light Showers':
			case 'Moderate Showers':
			case 'Heavy Rain':
			case 'Heavy Showers':
				bgImg = rainyDay;
				break;

			case 'Light snow':
			case 'Light Snow Showers':
			case 'Snowing':
			case 'Heavy Snow':
			case 'Heavy Snow Showers':
				bgImg = snowyDay;
				break;

			default:
				bgImg = clearDay;
				break;
		}
	} else {
		switch (description) {
			case 'Clear Sky':
				bgImg = clearNight;
				break;

			case 'Mostly Clear':
			case 'Partly Cloudy':
				bgImg = cloudyNight;
				break;

			case 'Cloudy':
				bgImg = cloudy;
				break;

			case 'Fog':
				bgImg = fogNight;
				break;

			case 'Drizzle':
			case 'Slight Rain':
			case 'Moderate Rain':
			case 'Light Rain':
			case 'Light Showers':
			case 'Moderate Showers':
			case 'Heavy Rain':
			case 'Heavy Showers':
				bgImg = rainyNight;
				break;

			case 'Light snow':
			case 'Light Snow Showers':
			case 'Snowing':
			case 'Heavy Snow':
			case 'Heavy Snow Showers':
				bgImg = snowyNight;
				break;

			default:
				bgImg = clearNight;
				break;
		}
	}

	return bgImg;
}
