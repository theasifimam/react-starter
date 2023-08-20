import React, { useState } from "react";

const Home = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [counter, setCounter] = useState(-1);
  let content = "hello how are you? I am fine what about you?";
  let contentArray = content.split("");

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
    setCounter(counter + 1);
  };
  function match() {
    let enteredChar = enteredValue
      ? enteredValue.split("")[enteredValue.length - 1]
      : enteredValue;
    console.log(contentArray[counter], enteredChar);
  }
  match();

  return (
    <div>
      <input type="text" name="content" id="content" onChange={handleChange} />
      <br />
      {enteredValue}
      <br />
      {content}
    </div>
  );
};

export default Home;
