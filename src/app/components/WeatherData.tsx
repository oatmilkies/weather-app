"use client";
import React from "react";
import axios from "axios";
import { QueryClient, useQuery } from "react-query";

type Props = {};
type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

const queryClient = new QueryClient();

export default function WeatherData({}: Props) {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "weatherData",
    async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=f5defd218cc58fba98df22273067ded1"
      );
      return data;
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data)

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
