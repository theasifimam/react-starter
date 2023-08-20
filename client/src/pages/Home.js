import React, { useState } from "react";

const Home = () => {
  const [values, setValues] = useState({
    input: " ",
    error: 0,
    score: 0,
    index: 0,
    performance: "",
  });

  let content = "hello how are you? I am fine what about you?";
  let wordArray = content.split(" ");
  const charArray = wordArray.map((word, index) => {
    return word.split("");
  });

  console.log(charArray);

  const handleChange = (e) => {
    setValues({ ...values, input: e.target.value, index: values.index + 1 });
    const wordArray = values.value?.split(" ")?.map((word) => {
      return word?.split("");
    });
    console.log(wordArray);

    // let enteredChar = values.value
    //   ? values.input.split("")[values.input.length - 1]
    //   : values.input;

    // values.input && contentArray[values.index] == enteredChar
    //   ? setValues({ ...values, score: values.score + 1 })
    //   : setValues({ ...values, error: values.error + 1 });
  };

  return (
    <div>
      <input type="text" name="content" id="content" onChange={handleChange} />
      <br />
      {values.input}
      <br />
      {content}

      <h1>{`Score : ${values.score} And Errors : ${values.error}`}</h1>
    </div>
  );
};

export default Home;
