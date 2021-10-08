import React from 'react';
import './Form.css';


export const Form = (props) => {
  return (
    <div className="Form">
      <div>{props.error ? error() : ""}</div>
      <form onSubmit={props.loadWeather} className="d-flex">
        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
        <button type="submit" className="btn btn-warning">Get Weather</button>
      </form>
    </div>
  );
};

const error = () => {
  return (
    <div className="alert alert-danger" role="alert">
      Please Enter City and Country
    </div>

  );
};