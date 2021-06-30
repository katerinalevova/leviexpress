import React from 'react';

const DatesOptions = ({ dates }) => {
  return dates.map((date) => (
    <option value={date.dateBasic} key={date.dateBasic}>
      {date.dateExtended}
    </option>
  ));
};

export default DatesOptions;
