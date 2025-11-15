// Import React
import React, { useState } from "react";
import "./styles.css";

// Your FastAPI backend URL
const API_URL = "https://real-estate-prediction-app.onrender.com/predict";

function App() {
  // Define form fields according to backend
  const [form, setForm] = useState({
    area_m2: "",
    land_m2: "",
    year_built: "",
  });

  const [prediction, setPrediction] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setPrediction(data.predicted_price_eur);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>House Price Prediction</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <label>Living area (m²)</label>
        <input
          type="number"
          name="area_m2"
          value={form.area_m2}
          onChange={handleChange}
          required
        />

        <label>Land area (m²)</label>
        <input
          type="number"
          name="land_m2"
          value={form.land_m2}
          onChange={handleChange}
          required
        />

        <label>Year built</label>
        <input
          type="number"
          name="year_built"
          value={form.year_built}
          onChange={handleChange}
          required
        />

        <button type="submit">Predict Price</button>
      </form>

      {/* === PRICE + ICONS SECTION === */}
      <div className="price-section">
        <img
          src="https://i.postimg.cc/pVjRGGnK/Design-ohne-Titel.png"
          alt="left icon"
          className="side-image"
        />

        <div className="prediction-box">
          <h2>
            {prediction !== null ? `${prediction.toFixed(2)} €` : "— € —"}
          </h2>
        </div>

        <img
          src="https://i.postimg.cc/nVW97Pfv/Design-ohne-Titel-1.png"
          alt="right icon"
          className="side-image"
        />
      </div>
    </div>
  );
}

export default App;
