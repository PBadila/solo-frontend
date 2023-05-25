import { useEffect, useState } from 'react';

const DateComponent = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/America/New_York')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching date');
        }
      })
      .then((data) => {
        setDate(data.datetime);
      })
      .catch((error) => {
        console.error(error.message);
        setDate("The date is TODAY. If I were more experienced as a programmer, this API fetch would work better. As it stands, the date is... TODAY.");
      });
  }, []);

  const formatDateTime = (datetime) => {
    const dateObj = new Date(datetime);
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return dateObj.toLocaleDateString(undefined, options);
  };

  return (
    <div className="date">
      <h1>{date ? formatDateTime(date) : 'Loading...'}</h1>
    </div>
  );
};

export default DateComponent;
