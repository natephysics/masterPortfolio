import React, { Component } from "react";

import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;

    const setAttr = (link) => {
      if (link !== "") return { href: link, target: "_blank" };
      else return { rel: "nofollow", cursor: "pointer" };
    };
    const attr = setAttr(certificate.certificate_link);

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a {...attr}>
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assets/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  {certificate.complete ? "Certificate" : "In Progress"}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
            <div className="inner-cert">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Related Classes:
              </h2>
              {certificate.details.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
