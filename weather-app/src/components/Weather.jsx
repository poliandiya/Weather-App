import React from 'react';

export const Weather = (props) => {
  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <i className={`wi ${props.weatherIcon}`}></i>
      {props.temp_celsius ? (<h1>{props.temp_celsius}&deg;</h1>) : null}
      {minMaxTemp(props.temp_min, props.temp_max)}
      <h4>{props.description}</h4>
    </div>
  );
};

function minMaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
};
