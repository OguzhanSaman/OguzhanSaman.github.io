import React, { useState } from "react";
import { Image } from "react-bootstrap";
import TeamPopup from "./TeamPopup";

const SingleTeamOne = ({ team = {} }) => {
  const { name, title, image} = team;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleTeamClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="team-one__single" onClick={handleTeamClick}>
        <div className="team-one__img">
          <Image src={require(`@/images/team/${image}`).default.src} alt="" />
          <div className="team-one__content">
            <h3 className="team-one__name">{name}</h3>
            <p className="team-one__title">{title}</p>
          </div>
        </div>
      </div>
      <TeamPopup isOpen={isPopupOpen} onClose={handleClosePopup} team={team} />
    </div>
  );
};

export default SingleTeamOne;
