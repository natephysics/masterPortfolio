import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        <Flip left duration={2000}></Flip>
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{
                backgroundImage: `url(${require(`../../assests/images/${degree.header_img}`)})`,
              }}
            >
              <div
                className="bg-color-effect"
                style={{ backgroundColor: degree.color_code }}
              >
                <div className="card-img">
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      transform: "scale(0.9)",
                    }}
                    src={require(`../../assests/images/${degree.logo_path}`)}
                    alt={degree.alt_name}
                  />
                </div>
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                    {degree.title}
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    {degree.subtitle}
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}>
                    {degree.duration}
                  </h3>
                </div>
              </div>
            </div>
            <div classname="body-content">
              <div class="inner-content">
                {degree.descriptions.map((sentence) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      {sentence}
                    </p>
                  );
                })}

                <button class="readmore-btn">Read More..</button>
              </div>

              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: degree.color_code }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
