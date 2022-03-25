import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  componentDidMount() {
    const readMore = document.querySelectorAll(".readmore-btn");

    readMore.forEach((read) => {
      read.addEventListener("click", () => {
        // read.parentElement.classList.toggle("read-all");

        if (read.innerHTML === "Read More..") {
          read.innerHTML = "Hide detail";
          read.parentElement.style.height = "auto";
        } else {
          read.innerHTML = "Read More..";
          read.parentElement.style.height = "270px";
        }
      });
    });
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
