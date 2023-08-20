import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    mnumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1998/signup", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    alert(result?.status);
    // setValues({ fname: "", lname: "", email: "", mnumber: "", password: "" });
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="fname"
          value={values.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lname"
          value={values.lname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mobile number"
          name="mnumber"
          value={values.mnumber}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Signup;
