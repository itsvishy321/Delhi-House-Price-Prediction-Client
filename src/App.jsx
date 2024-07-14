import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import error_img from "./assets/img/404-error.svg";

function App() {
  const [localities, setLocalities] = useState([]);
  const [prediction, setPrediction] = useState();
  const [loader, setLoader] = useState(false);
  const [errorCard,setErrorCard] = useState(false)
  const [formData, setFormData] = useState({
    bhk: "",
    furnishing: "",
    type: "",
    transaction: "",
    bathroom: "",
    locality: "",
    area: "",
    psqft: "",
  });

  const path = "https://delhi-house-price-prediction-server.onrender.com/";

  const fetchAPI = async () => {
    const response = await axios.get(`${path}api/localities`);
    // console.log(response.data.locality);
    setLocalities(response.data.locality);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleErrorCard = () => {
    setErrorCard(false)
  }

  const validateForm = () => {
    if(formData.area==="" || formData.bathroom==="" || formData.bhk==="" || formData.furnishing==="" || formData.locality==="" || formData.psqft==="" || formData.transaction==="" || formData.type===""
    ){
      setErrorCard(true);
      return false;
    }
    else{
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrediction("")
    const res = validateForm();
    if (res) {
      setLoader(true);
      // console.log("Form Submitted", formData);

      axios
        .post(`${path}api/predict`, formData)
        .then((response) => {
          // console.log(response.data);
          setLoader(false);
          setPrediction(response.data["prediction"]);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  // console.log(localities)

  return (
    <>
      <div className="relative bg-img bg-cover bg-center bg-no-repeat bg-fixed w-screen h-screen transition-all duration-300 ease-linear">
        <div className="flex flex-col items-center justify-center pt-16">
          <h1 className="text-center text-6xl font-primary text-white ">
            Delhi House Price Predictor
          </h1>
          <div className="max-w-full pt-16 flex px-8 flex-col items-center gap-16">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col gap-16 flex-wrap  items-center"
            >
              <div className="form-inputs">
                <div className="input-field">
                  <label htmlFor="bhk">Select BHK</label>
                  <select
                    name="bhk"
                    id="bhk"
                    value={formData.bhk}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="furnishing">Select Furnishing</label>
                  <select
                    name="furnishing"
                    id="furnishing"
                    value={formData.furnishing}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Furnished">Furnished</option>
                    <option value="Semi-Furnished">Semi-Furnished</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="type">Select Type of House</label>
                  <select
                    name="type"
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Builder Floor">Builder Floor</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="transaction">Select Transaction</label>
                  <select
                    name="transaction"
                    id="transaction"
                    value={formData.transaction}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="New Property">New Property</option>
                    <option value="Resale">Resale</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="bath">Select number of Bathrooms</label>
                  <select
                    name="bathroom"
                    id="bath"
                    value={formData.bathroom}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="locality">Select the Locality</label>
                  <select
                    name="locality"
                    id="locality"
                    value={formData.locality}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    {localities.map((locality, index) => (
                      <option key={index} value={locality}>
                        {locality}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="area">Enter Area in Sqft</label>
                  <input
                    type="number"
                    step={0.01}
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="psqft">Enter rate in PerSqft</label>
                  <input
                    type="number"
                    step={0.01}
                    name="psqft"
                    value={formData.psqft}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="max-w-md px-12 z-30 py-4 bg-primary rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary_dark after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#35714e;] hover:[text-shadow:2px_2px_2px_#9bd7b4] text-2xl"
              >
                Predict
              </button>
            </form>
            <div>
              {prediction ? (
                <h3 className="text-3xl text-primary font-semibold">
                  &#x20b9; {prediction}
                </h3>
              ) : loader ? (
                <div className="loader">
                  <span className="loader-text">LOADING...</span>
                  <span className="load"></span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {errorCard ? (
          <div className="card">
          <img src={error_img} alt="error image" className="App-logo" />
          <div className="header">
            <center>Error : fill all the required fields</center>
          </div>
          <button className="App-button" onClick={handleErrorCard}>OK</button>
        </div>) : ""}
          {
            errorCard ? (<div className="backdrop"></div>) : ""
          }
        
      </div>
    </>
  );
}

export default App;
