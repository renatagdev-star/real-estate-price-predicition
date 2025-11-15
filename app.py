from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

app = FastAPI()

origins = [
    "*",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Učitaj model
model = joblib.load("houce_price_model.pkl")

class HouseInput(BaseModel):
    living_area: float
    land_area: float
    year_built: float

@app.get("/")
def home():
    return {"status": "Backend radi ✔"}

@app.post("/predict")
def predict_price(data: HouseInput):
    X = [[data.living_area, data.land_area, data.year_built]]
    pred = model.predict(X)[0]
    return {"prediction": float(pred)}
