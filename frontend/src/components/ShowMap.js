import React, { useEffect, useState } from "react";
import RawData from "../json/Data.json";

const ShowMap = () => {
  const [data, setData] = useState([]);
  // const getAllData = async () => {
  //   const res = await fetch("http://localhost:4800/getData");
  //   const data = await res.json();
  //   setData(data);
  // };
  // useEffect(() => {
  //   const Interval = setInterval(() => {
  //     getAllData();
  //   }, 10000);
  //   return () => clearInterval(Interval);
  // }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <table>
          <tr style={{ border: "2px solid black", padding: "15px 30px" }}>
            <th style={{ border: "2px solid black", padding: "15px 30px" }}>
              Timestamp
            </th>
            <th style={{ border: "2px solid black", padding: "15px 30px" }}>
              Temperature
            </th>
            <th style={{ border: "2px solid black", padding: "15px 30px" }}>
              Humidity
            </th>
            <th style={{ border: "2px solid black", padding: "15px 30px" }}>
              pressure
            </th>
          </tr>
          <tbody>
            {RawData.length > 0 ? (
              RawData.map((data) => {
                return (
                  <tr style={{ border: "2px solid black" }}>
                    <td
                      style={{
                        border: "2px solid black",
                        padding: "15px 30px",
                      }}
                    >
                      {data.Timestamp}
                    </td>
                    <td
                      style={{
                        border: "2px solid black",
                        padding: "15px 30px",
                      }}
                    >
                      {data.temperature}c
                    </td>
                    <td
                      style={{
                        border: "2px solid black",
                        padding: "15px 30px",
                      }}
                    >
                      {data.humidity}
                    </td>
                    <td
                      style={{
                        border: "2px solid black",
                        padding: "15px 30px",
                      }}
                    >
                      {data.pressure}Pa
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowMap;
