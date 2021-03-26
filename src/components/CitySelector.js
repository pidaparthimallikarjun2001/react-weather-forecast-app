import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h4>This is a 5 day weather forecast application which shows weather every 3 hours in the chosen city(prediction). This is developed by Mallikarjun Pidaparthi</h4>
            <br></br>
            <h1>Search a city</h1>
          </Col>
        </Row>
  
        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
      
    );
  };

export default CitySelector;