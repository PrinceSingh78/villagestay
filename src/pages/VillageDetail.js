import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import './VillageDetail.css'; // Add this CSS file for styling

const villageDetailsData = {
  "kumaon": {
    title: 'Kumaon, Uttarakhand',
    location: 'Uttarakhand',
    activity: 'Trekking',
    description: 'Stay with the locals, trek the hills, and eat traditional food. Enjoy local fairs, handicrafts, and the Himalayas.',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTvAXwK63dhHb0R2xRKOqlOKWLbgjzQVrZeHAFA6tdeOxIT7VqbnWSqrYSa2Fb7-77VSy7RFw4Lj52ggkIdduEhDCp-vQpgi1v5OtBf0g',
    reviews: [
      { text: "Breathtaking views and lovely hosts!", rating: 5 },
      { text: "Perfect for trekkers.", rating: 4 }
    ]
  },
  "khimsar": {
    title: 'Khimsar, Rajasthan',
    location: 'Rajasthan',
    activity: 'Cultural',
    description: 'Experience desert life with folk performances and camel rides. Visit sand dunes and fort heritage sites.',
    image: 'https://hindi.oneindia.com/img/2021/03/khimsarsanddunesvillagenagaurrajasthanphoto5-1616582035.jpg',
    reviews: [
      { text: "Amazing camel rides and rich culture!", rating: 4 }
    ]
  },
  "mawlynnong": {
    title: 'Mawlynnong, Meghalaya',
    location: 'Meghalaya',
    activity: 'Food',
    description: 'Asia’s cleanest village with stunning natural beauty. Explore bamboo structures, local dishes, and waterfalls.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToGitcWpqbiN3QX21ZmK08QWwOfzO77zzaA&s',
    reviews: [
      { text: "Cleanest village I've ever visited!", rating: 5 },
      { text: "Loved the bamboo houses.", rating: 4 }
    ]
  },
  "gokarna": {
    title: 'Gokarna, Karnataka',
    location: 'Karnataka',
    activity: 'Beach',
    description: 'Gokarna is a serene beach town popular for temple visits and beach trekking. Clean beaches and cultural heritage.',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQpRj1d-PgrIyBil9OLJWcAMZ4-YUzlH2H_2xHYs3tbWGkDVVSxE5wh2ugjJ3EB7o88e4F9yAqkQ9N2SSDpx-O0fVQtTWdbAUQmgyOVnw',
    reviews: [
      { text: "Peaceful beaches and amazing food.", rating: 5 },
      { text: "Perfect getaway from city life.", rating: 4 }
    ]
  }
};

const VillageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const village = villageDetailsData[id?.toLowerCase()];
  const [userReview, setUserReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState(village?.reviews || []);

  const handleSubmitReview = () => {
    if (userReview.trim() && rating > 0) {
      const newReview = { text: userReview, rating };
      setSubmittedReviews([...submittedReviews, newReview]);
      setUserReview('');
      setRating(0);
    }
  };

  if (!village) {
    return (
      <div className="village-detail-container">
        <button className="btn" onClick={() => navigate(-1)}>← Back</button>
        <h2>Village not found</h2>
        <p>Please check the URL or go back to the <Link to="/">home page</Link>.</p>
      </div>
    );
  }

  return (
    <div className="village-detail-container">
      <button className="btn back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="village-content">
        <img src={village.image} alt={village.title} className="village-img" />
        <div className="village-info">
          <h2>{village.title}</h2>
          <p><strong>📍 Location:</strong> {village.location}</p>
          <p><strong>🎯 Activity:</strong> {village.activity}</p>
          <p className="description">{village.description}</p>
          <p className="note">This page shows detailed information about the rural destination including accommodation, food, cultural events, and how to book directly with hosts.</p>
          {/* <Link to="/booking" className="btn book-btn">Book Now</Link> */}
          <Link to={`/booking?destination=${encodeURIComponent(village.title)}`} className="btn book-btn">Book Now</Link>

        </div>
      </div>

      <div className="review-section">
        <h3>Reviews</h3>
        <ul className="review-list">
          {submittedReviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div>{review.text}</div>
            </li>
          ))}
        </ul>

        <div className="review-form">
          <h4>Leave a Review</h4>
          <textarea
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            placeholder="Write your experience..."
          />
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={rating >= star ? 'star selected' : 'star'}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="btn submit-review-btn" onClick={handleSubmitReview}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default VillageDetail;
