import React, { useEffect } from "react";
import axios from "axios";

const DataResource = () => {
  const generateData = () => {
    return {
      timestamp: new Date(),
      temperature: (Math.random() * 100).toFixed(2),
      humidity: (Math.random() * 100).toFixed(2),
      pressure: (Math.random() * 2000).toFixed(2),
    };
  };

  const sendDataToServer = async () => {
    const data = generateData();
    console.log(data);
    try {
      await axios.post("http://localhost:4800/data", data);
      console.log("Data sent successfully:", data);
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(sendDataToServer, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <div></div>;
};

export default DataResource;
