import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validateMail = () => emailRegex.test(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.length > 5 && validateMail()) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };
  return (
    <div className="contacto">
      <form className="form" onSubmit={handleSubmit}>
        <label for="name">Full name</label>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          name=""
          id=""
          placeholder="Enter your full name"
          required
        />
        <label for="name">Email</label>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="send-button">
          Send📨
        </button>
      </form>
      {err ? "Please verify your information again" : null}
      {show &&
        `Thank you ${user.name}! we'll contact you as soon as possible via email.`}
    </div>
  );
};

export default Form;
