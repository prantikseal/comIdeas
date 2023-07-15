import "./IdeaGenerator.css";
import { useState } from "react";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const IdeaGenerator = () => {
  const [chatGPTResponse, setChatGPTResponse] = useState("Your Ideas will be Listed here :)");

  const generateIdea = async (e) => {
    e.preventDefault();
    const ideaPurpose = document.getElementById("idea_purpose").value;
    const companyName = document.getElementById("company_name").value;
    const companyDetails = document.getElementById("company_details").value;
    // const response = {
    //     ideaPurpose,
    //     companyName,
    //     companyDetails
    // }
    const prompt = `Generate 3 Ideas where Idea Purpose: ${ideaPurpose} \n Company Name: ${companyName} \n Company Details: ${companyDetails} to create proof of work profiles and apply for opportunities within the company.`;
    console.log(prompt);
    // const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const OPENAI_API_KEY= "pk-albal"
    const response = await axios
      .post(
        "https://api.pawan.krd/v1/completions",
        {
          model: "text-davinci-003",
          max_tokens: 100,
          temperature: 0.3,
          prompt: `${prompt} \n Idea 1: \n Idea 2: \n Idea 3:`,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    // console.log(response);
    // setChatGPTResponse(response.data.choices[0].text);
    setChatGPTResponse(response.data.error);
  };
  return (
    <section className="ideaGeneratorSection">
      {" "}
      <div className="ideaGeneratorSection__left">
        {" "}
        <form>
          {" "}
          <label htmlFor="idea_purpose"> Purpose of Idea </label>{" "}
          <input
            type="text"
            id="idea_purpose"
            placeholder="Purpose of idea e.g. To get a job, to start a project etc."
          />
          <label htmlFor="company_name">Company/ Project Name</label>{" "}
          <input
            type="text"
            id="company_name"
            placeholder="Company or project name"
          />
          <label htmlFor="company_details">
            {" "}
            Company details/ project summary{" "}
          </label>
          <textarea
            id="company_details"
            cols="30"
            rows="10"
            placeholder="Provide details about the company or project"
          ></textarea>{" "}
          <button type="submit" onClick={generateIdea}>
            Generate ✨
          </button>{" "}
        </form>
      </div>{" "}
      <div className="ideaGeneratorSection__right">
        {" "}
        <div className="output_section">
          {" "}
          <p className="output_starter"> Your Ideas will be Listed here :) </p>
          {chatGPTResponse && (
            <div>
              <p>{chatGPTResponse}</p>
            </div>
          )}
        </div>{" "}
      </div>
    </section>
  );
};

export default IdeaGenerator;
