import React from 'react';

const DatesOptions = ({ dates }) => {
  return dates.map((date) => (
    <option value={date} key={date}>
      {date}
    </option>
  ));
};

export default DatesOptions;
