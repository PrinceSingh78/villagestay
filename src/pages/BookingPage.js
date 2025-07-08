import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    guests: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const destinationFromQuery = searchParams.get('destination');
    if (destinationFromQuery) {
      setFormData(prev => ({ ...prev, destination: destinationFromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      <h2>📅 Book Your Stay in Village</h2>
      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>👤 Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>📧 Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>📍 Destination</label>
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} readOnly />
          </div>

          <div className="form-group">
            <label>📆 Travel Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>👥 Guests</label>
            <input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>📝 Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4"
              placeholder="Tell us any preferences or special requests..."
              className="message-box"
            />
          </div>

          <button className="generate-btn" type="submit">🔒 Confirm Booking</button>
        </form>
      ) : (
        <div className="confirmation-box">
          <p>✅ Thank you, {formData.name}!</p>
          <p>Your trip to <strong>{formData.destination}</strong> is confirmed for <strong>{formData.date}</strong> with <strong>{formData.guests}</strong> guest(s).</p>
          <p>We’ve sent a confirmation to <strong>{formData.email}</strong>.</p>

          <div className="payment-section">
            <h3>💳 Complete Payment</h3>
            <p>Click below to pay securely using Razorpay.</p>
            <button className="pay-btn styled-pay-btn" onClick={() => alert('🔐 Payment gateway will be integrated here.')}>💰 Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
