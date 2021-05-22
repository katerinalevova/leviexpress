import React from 'react';
import { useState } from 'react';
import './style.css';
import mapImage from './img/map.svg';
import CityOptions from './CityOptions/index';
import { useEffect } from 'react';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  // useEffect(() => {
  //   setCities([
  //     { name: 'Vyberte', code: '' },
  //     { name: 'Praha', code: 'CZ-PRG' },
  //     { name: 'Brno', code: 'CZ-BRQ' },
  //   ]);
  // }, []);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  //   useEffect(() => {
  //     fetch('https://api.abalin.net/today?country=cz')
  //       .then((resp) => resp.json())
  //       .then((json) => setName(json.data.namedays.cz)
  //   }, []);
  //   return (
  //     <>
  //       <h1>Svátky</h1>
  //       <div className="nameday">Svátek má {name}</div>
  //     </>
  //   );
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSelect = (e) => {
    setFromCity(e.target.value);
  };

  const handleSelect2 = (e) => {
    setToCity(e.target.value);
  };

  const handleSelect3 = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select value={fromCity} onChange={handleSelect}>
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select value={toCity} onChange={handleSelect2}>
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select value={date} onChange={handleSelect3}>
                <option value="">Vyberte</option>
                <option>20.05.2021</option>
                <option>21.05.2021</option>
                <option>22.05.2021</option>
                <option>23.05.2021</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button className="btn" type="submit" onClick={handleSubmit}>
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>

      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 1</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 2</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 3</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 4</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyPicker;

// const CityOptions = {
//   mestoZ: ['Město1', 'Mesto2', 'Mesto3', 'Mesto4'],
//   mestoDo: ['Město1', 'Mesto2', 'Mesto3', 'Mesto4'],
//   datum: ['20.05.2021', '21.05.2021', '22.05.2021', '23.05.2021'],
// };

// <option value={CityOptions.mestoZ[0]}>Město 1</option>
//               <option value={CityOptions.mestoZ[1]}>Město 2</option>
//               <option value={CityOptions.mestoZ[2]}>Město 3</option>
//               <option value={CityOptions.mestoZ[3]}>Město 4</option>
