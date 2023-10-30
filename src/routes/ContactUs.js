import { useState } from "react";
const ContactUs = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
      };
    return (
        <>
  <title>Login Form</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Add your CSS styles here to customize the appearance of the form */\n    "
    }}
  />
  <div>
    <h1>Contact Us</h1>
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required=""
      />
      <br />
      <br />
      <label htmlFor="phone-no">Phone Number:</label>
      <input
        type="text"
        id="phone-no"
        name="phone-no"
        placeholder="Enter your phone-no"
        required=""
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email id"
        required=""
      />
      <br />
      <br />
      <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Billing Issue">Billing Issue</option>
            {/* Add more options as needed */}
          </select>
          <br />
          <br />
      <label htmlFor="Feedback">Feedback:</label>
      <input
        type="text"
        id="Feedback"
        name="Feedback"
        placeholder="Enter your feedback"
        required=""
      />
      <br />
      <br />
      <button className="donate-button" >
        ContactUs
      </button>
    </form>
  </div>
</>

    );
};
export default ContactUs;