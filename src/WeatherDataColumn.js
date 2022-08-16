/* Assignment 10 */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

// import React from "react";

var moment = require("moment");

function WeatherDataColumn(props) {
    let _date = new Date();
    const weekday = props.data.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${props.data.weather[0].id} owf-5x`;
    const fahrenheitMax = Math.round(props.data.main.temp_max);

    const fahrenheitMin = Math.round(props.data.main.temp_min);

    const farenheitTemp = Math.round(props.data.main.temp);

    return (
        <div className="col data-col">
            <h4 className="text-muted">
                {moment(_date).format("MMMM D YYYY")}
            </h4>
            <h5>
                {props.data.day} at {moment(_date).format("HH:mm a")}
            </h5>
            <i className={_img}></i>
            <p>{props.data.weather[0].description}</p>
            <h5>Temperature: {farenheitTemp}°F</h5>
            <p>
                Minimum:{fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
            </p>
        </div>
    );
}

export default WeatherDataColumn;