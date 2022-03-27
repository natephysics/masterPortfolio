import React, { Component } from "react";
import "./DegreeCard.css";
import Button from "../../components/button/Button";
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
                backgroundImage: `url(${require(`../../assets/images/${degree.header_img}`)})`,
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
                    src={require(`../../assets/images/${degree.logo_path}`)}
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
            <div className="body-content">
              <div className="inner-content">
                {degree.descriptions.map((sentence) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      {sentence}
                    </p>
                  );
                })}

                <button className="readmore-btn">Read More..</button>
              </div>
              <div className="visit-btn">
                <Button
                  text="Website"
                  newTab={true}
                  href={degree.website_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
