import { React, useState } from "react";
import './home.css'

const Home = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [goals, setGoals] = useState([]);
    const [finLiteracy, setFinLiteracy] = useState("");
    const [apetite, setApetite] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            age,
            gender,
            goals,
            finLiteracy,
            apetite
        );
    };

    const handleSubjectChange = (sub) => {
        // set((prev) => ({
        //     ...prev,
        //     [sub]: !prev[sub],
        // }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setAge()
        setGender("");
        setGoals([]);
        setFinLiteracy(1);
        setApetite("")
    };

    return (
        <div className="App">
            <h1>Questionnaire</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    <label for="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    
                    <label for="tel">What is your current age?</label>
                    <input
                        type="number"
                        name="contact"
                        id="contact"
                        value={age}
                        onChange={(e) =>
                            setAge(e.target.value)
                        }
                        placeholder="Enter age"
                        required
                    />
                    <label for="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label for="lang">
                        What are your goals for investment?
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="saving for retirement"
                        onChange={(e) =>
                            setGoals([...goals, "saving for retirement"])
                        }
                    />
                    Saving for retiremnt
                    <input
                        type="checkbox"
                        name="lang"
                        id="buying a house"
                        onChange={(e) =>
                            setGoals([...goals, "buying a house"])
                        }
                    />
                    Buying a House
                    <input
                        type="checkbox"
                        name="lang"
                        id="saving for education"
                        onChange={(e) =>
                            setGoals([...goals, "saving for education"])
                        }
                    />
                    Saving for education
                    <input
                        type="checkbox"
                        name="lang"
                        id="purchasing for self"
                        onChange={(e) =>
                            setGoals([...goals, "purchasing for self"])
                        }
                    />
                    Purchasing for self
                    <input
                        type="checkbox"
                        name="lang"
                        id="starting a business"
                        onChange={(e) =>
                            setGoals([...goals, "starting a business"])
                        }
                    />
                    Starting a business
                    <input
                        type="checkbox"
                        name="lang"
                        id="planning a vacation"
                        onChange={(e) =>
                            setGoals([...goals, "planning a vacation"])
                        }
                    />
                    Planning a vacation
                    
                    <label for="Fin-Literacy">
                     Rate your financial literacy.
                    </label>
                    <input
                        type="number"
                        value={finLiteracy}
                        id=""
                        onChange={(e) =>
                            setFinLiteracy(e.target.value)
                        }
                        placeholder="Rate from 1 to 5"
                        required
                    />

                    <label for="firstname">
                     What is your risk apetite?
                    </label>
                    <input
                        type="radio"
                        value="Low"
                        id="Low"
                        checked={apetite == "Low"}
                        onChange={(e) =>
                            setApetite("Low")
                        }
                    />
                    Low
                    <input
                        type="radio"
                        value="Medium"
                        id="Medium"
                        checked={apetite == "Medium"}
                        onChange={(e) =>
                            setApetite("Medium")
                        }
                    />
                    Medium
                    <input
                        type="radio"
                        value="High"
                        id="High"
                        checked={apetite == "High"}
                        onChange={(e) =>
                            setApetite("High")
                        }
                    />
                    High
            
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Home;