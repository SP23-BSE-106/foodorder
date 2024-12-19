import React, { useState } from 'react';
import FeedbackForm from '../Components/FeedbackForm';

function FeedbackPage() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedbackSubmit = (feedbackData) => {
    setFeedback(feedbackData);
    alert('Thank you for your feedback!');
  };

  return (
    <div>
      <h1>Feedback</h1>
      {feedback ? (
        <div>
          <h2>Feedback Summary</h2>
          <p>Rating: {feedback.rating}/5</p>
          <p>Comments: {feedback.comments}</p>
          <p>Subscribed to newsletter: {feedback.subscribe ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      )}
    </div>
  );
}

export default FeedbackPage;
