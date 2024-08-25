"use client";
import Navbar from "./components/Navbar";
import WeatherData from "./components/WeatherData";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
        <Navbar />
        <WeatherData />
      </div>
      </QueryClientProvider>
  );
}
