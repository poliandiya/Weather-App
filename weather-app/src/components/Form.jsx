import React from 'react';

export const Form = (props) => {
  return (
    <div className="Form">
      <form onSubmit={props.loadWeather}>
        <div>{props.error ? error() : ""}</div>
        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
        <button type="submit" className="btn">Get Weather</button>
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