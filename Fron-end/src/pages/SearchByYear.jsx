import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ApiService from "../api/api";
import LoadingSpinner from "../LoadingSpinner";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

//API call from api.ts
const apiService = new ApiService();
const API_URL = apiService.getApi();

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const SearchByYear = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [debtStockData, setDebtStock] = useState([]);
  const [educationExpenditure, setEducationExpenditure] = useState([]);

  //Handle search between years
  const fetchDataByYear = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.get(
        API_URL + `debt-stock/${startYear}/${endYear}`
      );
      setDebtStock(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
    try {
      const response = await axios.get(
        API_URL + `education-expenditure/${startYear}/${endYear}`
      );
      setEducationExpenditure(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate(`/search?startYear=${startYear}&endYear=${endYear}`);
  };

  useEffect(() => {
    fetchExternalDebtStock();
    fetchEducationExpenditure();
  }, []);

  //Get External Debt Stock each Country
  const fetchExternalDebtStock = async () => {
    try {
      // Get the start and end year from the query parameters
      const query = new URLSearchParams(window.location.search);
      const startYear = query.get("startYear");
      const endYear = query.get("endYear");

      // Construct the API URL with the start and end year
      const apiUrl = `${API_URL}debt-stock/${startYear}/${endYear}`;

      const response = await axios.get(apiUrl);
      setDebtStock(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debtLabel = Array.from(
    new Set(
      educationExpenditure.flatMap((item) =>
        item.data.map((dataPoint) => dataPoint.year)
      )
    )
  );
  const debtStock = {
    labels: debtLabel,
    datasets: debtStockData.map((item) => ({
      label: item.country,
      data: item.data.map((dataPoint) => dataPoint.value),
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`,
      borderWidth: 2,
    })),
  };

  const debtStock_options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total external debt in USD",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "External Debt Stock",
      },
      legend: {
        display: true,
      },
    },
  };

  //Get Education Expenditure
  const fetchEducationExpenditure = async () => {
    const query = new URLSearchParams(window.location.search);
    const startQuery = query.get("startYear");
    const endQuery = query.get("endYear");
    try {
      const response = await axios.get(
        API_URL + `education-expenditure/${startQuery}/${endQuery}`
      );
      setEducationExpenditure(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const educatioLabel = Array.from(
    new Set(
      educationExpenditure.flatMap((item) =>
        item.data.map((dataPoint) => dataPoint.year)
      )
    )
  );
  const educationData = {
    labels: educatioLabel,
    datasets: educationExpenditure.map((item) => ({
      label: item.country,
      data: item.data.map((dataPoint) => dataPoint.value),
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`,
      borderWidth: 4,
    })),
  };

  const educationData_options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Education expenditure in (%)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Education Expenditure ",
      },
      legend: {
        display: true,
      },
    },
  };

  //Handle back to home page
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Fragment>
      <div
        style={{
          paddingTop: "10rem",
          paddingRight: "10rem",
          paddingLeft: "10rem",
          paddingBottom: "2rem",
        }}
      >
       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleBackToHome} className="btn btn-primary">
        <i className="fas fa-arrow-left"></i>
          Back
        </button>
       </div>
       <br />
        <form onSubmit={fetchDataByYear} className="d-flex align-items-center">
          <div className="form-group mr-3" style={{ flexGrow: 1 }}>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Start Year"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-group mr-3" style={{ flexGrow: 1 }}>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="End Year"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-primary rounded-0">
              Search
            </button>
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading ? (
          <p> <LoadingSpinner /> Wait A Minute Calling API</p>
            ) : (
            <>
              {debtStockData.length === 0 && (
              <p style={{color:'red'}}>
                Result Not Found
              </p>
            )}
           </>
          )}
      </div>
      <div style={{ paddingBottom: "4rem" }}>
        <Bar data={debtStock} options={debtStock_options} />
      </div>
      <hr />
      <div style={{ paddingBottom: "4rem" }}>
        <Line data={educationData} options={educationData_options} />
      </div>
    </Fragment>
  );
};

export default SearchByYear;
