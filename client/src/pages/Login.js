import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1998/login", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result.user) {
      window.location.href = "/home";
    } else {
      alert("Please enter valid credentials!");
    }
    // setValues({ fname: "", lname: "", email: "", mnumber: "", password: "" });
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
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

export default Login;
