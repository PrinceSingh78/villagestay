import React, { useState } from 'react';
// import './index.css'; // Your single global CSS file

const PlanTrip = () => {
  const [formData, setFormData] = useState({
    interests: '',
    duration: 3,
    pace: 'Moderate',
    location: '',
    theme: ''
  });

  const [generatedPlan, setGeneratedPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { interests, duration, pace, location, theme } = formData;
    const plan = `
      ✨ Based on your interests in ${interests || 'various experiences'}, 
      we'll plan a ${duration}-day trip to explore ${location || 'beautiful rural locations'}.
      With a ${pace.toLowerCase()} pace and a focus on ${theme || 'local culture'}, 
      your itinerary will include immersive experiences such as traditional cuisine, folk events, 
      and scenic stays with village hosts.
    `;
    setLoading(true);
    setGeneratedPlan('');

    setTimeout(() => {
      setGeneratedPlan(plan);
      setLoading(false);
    }, 2000); // simulate AI generation
  };

  return (
    <div className="plantrip-container">
      <h2>🧭 Plan Your Trip</h2>
      <p>Customize your rural adventure with our AI-powered planner.</p>

      <div className="form-grid">
        <div className="form-section">
          <label>🎯 Interests & Hobbies</label>
          <textarea
            name="interests"
            placeholder="e.g., photography, trekking, local food"
            value={formData.interests}
            onChange={handleChange}
          />

          <label>🗓️ Trip Duration (days)</label>
          <input
            type="number"
            name="duration"
            min="1"
            value={formData.duration}
            onChange={handleChange}
          />

          <label>🏞️ Preferred Pace</label>
          <select name="pace" value={formData.pace} onChange={handleChange}>
            <option value="Relaxed">Relaxed</option>
            <option value="Moderate">Moderate</option>
            <option value="Adventurous">Adventurous</option>
          </select>

          <label>📍 Location Preferences</label>
          <input
            type="text"
            name="location"
            placeholder="e.g., Mountains, deserts"
            value={formData.location}
            onChange={handleChange}
          />

          <label>🎶 Cultural Themes</label>
          <input
            type="text"
            name="theme"
            placeholder="e.g., folk music, cuisine"
            value={formData.theme}
            onChange={handleChange}
          />

          <button className="generate-btn" onClick={handleSubmit}>🔍 Generate Itinerary</button>
        </div>

        <div className="result-box">
          {loading ? (
            <div className="typing-indicator">🤖 Generating your smart trip plan...</div>
          ) : generatedPlan ? (
            <div className="itinerary">
              <h4>Your Personalized Itinerary</h4>
              <p>{generatedPlan}</p>
              <button className="book-btn">📅 Book Now</button>
            </div>
          ) : (
            <div className="placeholder">
              <span>🪄</span>
              <p>Your adventure awaits!<br /> Fill out the form to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
