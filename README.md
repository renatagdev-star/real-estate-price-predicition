# 🏡 Real Estate Price Prediction (ML + FastAPI + React)

End-to-end machine learning project that predicts **house prices** based on:

- 🏠 House size (m²)  
- 🌳 Land size (m²)  
- 📅 Year of construction  

The project uses **synthetic data** to build a robust regression model, exposes it through a **FastAPI** backend, and provides a modern **React** frontend deployed on **Vercel**.  
Both backend and frontend are connected to **CI/CD pipelines**, so every push to GitHub automatically triggers new deployments.

---

## ✨ Key Features

- 📊 **Synthetic dataset generation**  
  - Programmatically generated real-estate data to better control distributions, noise, and feature interactions.  
  - Designed to simulate realistic relationships between size, land, year built and final price.

- 🤖 **XGBoost regression model**  
  - Trained to predict price from engineered features.  
  - Model persisted and loaded in production via FastAPI.

- ⚙️ **FastAPI backend (Render)**  
  - REST endpoint for predictions: send house features → receive predicted price.  
  - Deployed on **Render** with automatic builds from the GitHub repo.

- 💻 **React frontend (Vercel)**  
  - Simple, responsive UI to input house parameters and display the predicted price.  
  - Deployed on **Vercel** for fast global delivery.

- 🔁 **CI/CD integration**  
  - **GitHub → Render**: changes in backend code trigger automatic rebuild & redeploy.  
  - **GitHub → Vercel**: frontend updates are auto-deployed on push to the main branch.  

---

## 🚀 Live Demo

🔗 **Demo App:**   
*https://real-estate-price-predicition-04.vercel.app/*

---

## 🖼 App Preview

https://github.com/renatagdev-star/real-estate-price-predicition/blob/main/app_preview.JPG

