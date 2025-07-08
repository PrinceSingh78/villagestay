import React from 'react';
import { Link } from 'react-router-dom';

const VillageCard = ({ id, title, description, image }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/village/${id}`} className="btn">Explore</Link>
  </div>
);

export default VillageCard;
