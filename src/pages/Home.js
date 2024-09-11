import { React, useState } from "react";
import "./home.css";
import PieChart from "../component/pieChart";
import { CChart } from "@coreui/react-chartjs";
import Portfolio from "./Portfolio";

const Home = () => {
  const [quesData, setQuesData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    investmentGoals: [],
    financialLiteracy: "",
    riskApetite: "",
  });
  const [form, setForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuesData({ ...quesData, [name]: value });
  };

  const handleGoalSelection = (goal) => {
    setQuesData((prevData) => {
      const newInvestmentGoals = prevData.investmentGoals.includes(goal)
        ? prevData.investmentGoals.filter((item) => item !== goal)
        : [...prevData.investmentGoals, goal];
      return { ...quesData, investmentGoals: newInvestmentGoals };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quesData);
    setForm(false);
  };

  const handleReset = () => {
    // Reset all state variables here
    setQuesData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      investmentGoals: [],
      financialLiteracy: "",
      riskApetite: "",
    });
  };

  return form ? (
    <div className="App">
      <h1>Questionnaire</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name</label>
          <input
            type="text"
            name="firstName"
            value={quesData.firstName}
            onChange={handleInputChange}
            placeholder="Enter First Name"
            required
          />
          <label for="lastname">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={quesData.lastName}
            onChange={handleInputChange}
            placeholder="Enter Last Name"
            required
          />
          <label for="age">What is your current age?</label>
          <input
            type="number"
            name="age"
            id="age"
            value={quesData.age}
            onChange={handleInputChange}
            placeholder="Enter age"
            required
          />
          <label for="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            id="Male"
            checked={quesData.gender === "Male"}
            onChange={handleInputChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            id="Female"
            checked={quesData.gender === "Female"}
            onChange={handleInputChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Others"
            id="Others"
            checked={quesData.gender === "Others"}
            onChange={handleInputChange}
          />
          Others
          <label for="investmentGoals">
            What are your goals for investment?
          </label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="saving-for-retirement"
                onChange={() => handleGoalSelection("saving for retirement")}
              />
              Saving for retirement
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="buying-a-house"
                onChange={() => handleGoalSelection("buying a house")}
              />
              Buying a House
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="saving-for-education"
                onChange={() => handleGoalSelection("saving for education")}
              />
              Saving for education
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="purchasing-for-self"
                onChange={() => handleGoalSelection("purchase for self")}
              />
              Purchasing for self
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="starting-a-business"
                onChange={() => handleGoalSelection("starting a business")}
              />
              Starting a business
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="planning-a-vacation"
                onChange={() => handleGoalSelection("planning a vacation")}
              />
              Planning a vacation
            </div>
          </div>
          <label for="Financial_Literacy">
            What is your financila literacy?
          </label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="financialLiteracy"
                value="1"
                onChange={handleInputChange}
              />
              None
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="financialLiteracy"
                value="2"
                onChange={handleInputChange}
              />
              Beginner (Heard about different investment options but not
              invested yet)
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="financialLiteracy"
                value="3"
                onChange={handleInputChange}
              />
              Limited (e.g., savings accounts, CDs, bonds)
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="financialLiteracy"
                value="4"
                onChange={handleInputChange}
              />
              Moderate (e.g., mutual funds, ETFs)
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="financialLiteracy"
                value="5"
                onChange={handleInputChange}
              />
              Extensive (e.g., stocks, options, real estate)
            </div>
          </div>
          {/* <input
            type="number"
            name="financialLiteracy"
            value={quesData.financialLiteracy}
            onChange={handleInputChange}
            placeholder="Rate from 1 to 5"
            required
          /> */}
          <label for="firstname">What is the maximum loss you are willing to tolerate in a single year?</label>
          <input
            type="radio"
            name="riskApetite"
            value="Low"
            checked={quesData.riskApetite === "Low"}
            onChange={handleInputChange}
          />
          0-5%
          <input
            type="radio"
            name="riskApetite"
            value="Medium"
            checked={quesData.riskApetite === "Medium"}
            onChange={handleInputChange}
          />
          6-20%
          <input
            type="radio"
            name="riskApetite"
            value="High"
            checked={quesData.riskApetite === "High"}
            onChange={handleInputChange}
          />
          >20%
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  ) : (
    <>
      <Portfolio />
    </>
  );
};

export default Home;
