import React from 'react';

const CityOptions = ({ cities }) => {
  return cities.map((mesto) => (
    <option value={mesto.code} key={mesto.code}>
      {mesto.name}
    </option>
  ));
};

export default CityOptions;
