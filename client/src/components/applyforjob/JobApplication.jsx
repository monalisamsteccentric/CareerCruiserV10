import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function JobApplication({ job }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use emailjs.sendForm with the form reference
    emailjs.sendForm('service_sf22a8w', 'template_9h6t496', formRef.current, 'dhoniyyM-me3nyStA')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Application submitted successfully!');
      }, (error) => {
        console.log('Failed to send email.', error.text);
        alert('Failed to submit application.');
      });
  };

  return (
    <div className="job-application">
      <h2>Apply for {job.title}</h2>
      <p>Description: {job.description}</p>
      <p>Location: {job.location}</p>

      <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="user_name" placeholder="Your name" required />
        <input type="email" name="user_email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <input type="file" name="resume" required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default JobApplication;
