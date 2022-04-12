import axios from 'axios';
import getContinent from './continent';
import { LOAD_DATA, LOAD_SPECIFIC_DATE_DATA } from './actionTypes';

export const loadData = () => {
  const date = new Date();
  const url = `https://api.covid19tracking.narrativa.com//api/${date
    .toISOString()
    .slice(0, 10)}`;

  return async (dispatch) => {
    const response = await axios.get(url);
    const dataWithSpecificDate = response.data.dates;

    const newDate = Object.keys(dataWithSpecificDate)[0];

    const finalData = dataWithSpecificDate[newDate];

    const continent = {
      Africa: [],
      Europe: [],
      North_America: [],
      Oceania: [],
      Asia: [],
      South_America: [],
    };

    Object.keys(finalData.countries).forEach((c) => {
      const country = finalData.countries[c];
      switch (getContinent(country.name)) {
        case 'Europe':
          continent.Europe.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Africa':
          continent.Africa.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Asia':
          continent.Asia.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'North_America':
          continent.North_America.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'South_America':
          continent.South_America.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Oceania':
          continent.Oceania.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        default:
          break;
      }
    });

    console.log(continent);

    dispatch({ type: LOAD_DATA, payload: continent });
  };
};

export const loadSpecificDateData = (selectedDate) => {
  const date = selectedDate;

  const url = `https://api.covid19tracking.narrativa.com//api/${date
    .toISOString()
    .slice(0, 10)}`;

  return async (dispatch) => {
    const response = await axios.get(url + date);
    const dataWithSpecificDate = response.data.dates;

    const newDate = Object.keys(dataWithSpecificDate)[0];

    const finalData = dataWithSpecificDate[newDate];

    const continent = {
      Africa: [],
      Europe: [],
      North_America: [],
      Oceania: [],
      Asia: [],
      South_America: [],
    };

    Object.keys(finalData.countries).forEach((c) => {
      const country = finalData.countries[c];
      switch (getContinent(country.name)) {
        case 'Europe':
          continent.Europe.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Africa':
          continent.Africa.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Asia':
          continent.Asia.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'North_America':
          continent.North_America.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'South_America':
          continent.South_America.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        case 'Oceania':
          continent.Oceania.push({
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          });
          break;
        default:
          break;
      }
    });

    console.log(continent);

    dispatch({ type: LOAD_SPECIFIC_DATE_DATA, payload: continent });
  };
};
