import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, humidity, feels_like, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card style={{backgroundColor: "lightblue", margin: 20, padding: 20}}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          Date: {date.toLocaleDateString()}
        </p>
        <p>
        Time: {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {Math.round(temp_min - 273)} °C</p>
        {/* maximum temperature */}
        <p>Max: {Math.round(temp_max - 273)} °C</p>
        <p>Feels like: {Math.round(feels_like - 273)} °C</p>
        <p>Humidity: {humidity}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;