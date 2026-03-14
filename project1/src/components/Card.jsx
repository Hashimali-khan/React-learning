import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({
  company,
  logo,
  posted,
  title,
  tags,
  salary,
  location,
  saved
}) => {
  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt={company} className="logo" />
        <button className={saved ? "saved" : ""}>
          {saved ? "Saved" : "Save"} <Bookmark size={16}   fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="center">
        <h3>
          {company} <span>{posted}</span>
        </h3>

        <h2>{title}</h2>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
