import React, { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState({
    rating: '',
    comments: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback({ ...feedback, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback({ rating: '', comments: '', subscribe: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <label>
        Rating:
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input
              type="radio"
              name="rating"
              value={num}
              checked={feedback.rating === String(num)}
              onChange={handleChange}
            />
            {num}
          </label>
        ))}
      </label>
      <label>
        Comments:
        <textarea name="comments" value={feedback.comments} onChange={handleChange}></textarea>
      </label>
      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={feedback.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
