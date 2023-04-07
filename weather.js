import React, { useEffect, useState } from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      const second = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hour}:${minute}:${second}`);
      const month = now.toLocaleString("default", { month: "long" });
      const day = now.getDate();
      const year = now.getFullYear();
      setDate(`${month} ${day}, ${year}`);
    };
    getTime();
    setInterval(getTime, 1000);
  }, []);

  useEffect(() => {
    const getIpAddress = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    };
    getIpAddress();
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      setCity(data.city);
      setCountry(data.country_name);
    };
    if (ip) {
      getLocation();
    }
  }, [ip]);

  useEffect(() => {
    const getWeather = async () => {
      const apiKey = "f0240d1f0ba254a02560c8ec9975ce13";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setTemperature(data.main.temp.toFixed(0));
      setWeather(data.weather[0].description);
    };
    if (city) {
      getWeather();
    }
  }, [city]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Current Time and Date</h5>
              <p className="card-text">{date}</p>
              <p className="card-text">{time}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Location</h5>
              <p className="card-text">
                {city}, {country}
              </p>
              <p className="card-text">{ip}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="mb-4">Current weather in {city}</h1>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Temperature: {temperature} °C</p>
              <p className="card-text">Weather: {weather}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
