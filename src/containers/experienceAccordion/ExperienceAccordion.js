import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  componentDidMount() {
    // Accordion Auto open and auto close script
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
      let panel = acc[i].nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + 40 + "px";

      // Click to open and close
      acc[i].addEventListener("click", function () {
        this.classList.toggle("aActive");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div>
              <button class="accordion aActive">{section["title"]}</button>
              <div class="panel">
                <div className="panel-inner">
                  {section["experiences"].map((experience) => {
                    return (
                      <ExperienceCard experience={experience} theme={theme} />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
