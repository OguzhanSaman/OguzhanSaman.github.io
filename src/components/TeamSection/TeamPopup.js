import React from "react";
import { Modal } from "react-bootstrap";

const TeamPopup = ({ isOpen, onClose, team }) => {
  const { name, title, cv, educationAndExpertise, languagesAndMemberships, image, linkedin } = team;

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal dialogClassName="my-modal" show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={require(`@/images/team/${image}`).default.src} alt={name} style={{ maxWidth: "50%", maxHeight: "400px" }} />
        </div>
        <div className="placeholder"></div>
        <h5>{title}</h5>
        <div className="placeholder"></div>
        <ul className="list-unstyled team-one__social">
            <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
        <div>
          <h6>Eğitim ve Uzmanlık Alanları</h6>
          {educationAndExpertise && educationAndExpertise.length > 0 ? (
            <ul>
              {educationAndExpertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No education and expertise areas provided.</p>
          )}
        </div>
        <div>
          <h6>Yabancı Diller & Üyelikler</h6>
          {languagesAndMemberships && languagesAndMemberships.length > 0 ? (
            <ul>
              {languagesAndMemberships.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No foreign languages and memberships provided.</p>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TeamPopup;
