import React, { useEffect, useState } from "react";

const ShowMap = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    const res = await fetch("http://localhost:4800/getData");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    const Interval = setInterval(() => {
      getAllData();
    }, 10000);
    return clearInterval(Interval);
  }, []);
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
          {data.map((data) => {
            return (
              <tr style={{ border: "2px solid black" }}>
                <td style={{ border: "2px solid black", padding: "15px 30px" }}>
                  {data.timestamp}
                </td>
                <td style={{ border: "2px solid black", padding: "15px 30px" }}>
                  {data.temperature}
                </td>
                <td style={{ border: "2px solid black", padding: "15px 30px" }}>
                  {data.humidity}
                </td>
                <td style={{ border: "2px solid black", padding: "15px 30px" }}>
                  {data.pressure}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ShowMap;
