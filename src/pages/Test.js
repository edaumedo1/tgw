import React, { useState } from "react";
import questions100 from "../question.json";
import addQuestion1 from "../addQuestion.json";

const Test = () => {
  const questions = questions100;
  const addQuestion = addQuestion1;

  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [str, setStr] = useState("");

  // console.log(questions100);
  console.log(addQuestion1);

  function handleChange(e) {
    e.preventDefault();
    // <- input값으로 text 변경 함수
    setStr(e.target.value);
    console.log(str);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const number =
      Math.floor(Math.random() * (Object.keys(questions100).length - 1)) + 1;
    setNumber(number);
    console.log(number);
    console.log(questions[number]);
  }

  function handleSubmit2(e) {
    e.preventDefault();
    console.log(addQuestion);
    const number1 =
      Math.floor(Math.random() * Object.keys(addQuestion).length) + 1;
    setNumber1(number1);
    console.log(number1);
    console.log(addQuestion[number1]);
  }

  function handleSubmit1(e) {
    alert("추가 해줬다(새침)");
    e.preventDefault();
    let numMax = Object.keys(addQuestion).length + 1;
    console.log(numMax);
    addQuestion[numMax] = str;
    console.log(str);
    setStr("");
  }

  return (
    <div style={styles.center}>
      <div>
        <div style={styles.center}>
          <h2>자기소개질문</h2>
        </div>
        <form onSubmit={handleSubmit} style={styles.center}>
          <div>
            <div>
              <div style={styles.center}>
                <h3>{number !== 0 ? number + "번 질문!!!" : ""}</h3>
              </div>
              <div style={styles.center}>
                <h5>{questions[number]}</h5>
              </div>
            </div>
            <div style={styles.center}>
              <button type="submit" style={{ width: 100, height: 100 }}>
                질문 선택
              </button>
            </div>
          </div>
        </form>
        <form onSubmit={handleSubmit2} style={styles.center}>
          <div>
            <div>
              <div style={styles.center}>
                <h3>{number1 !== 0 ? number1 + "번 질문!!!" : ""}</h3>
              </div>
              <div style={styles.center}>
                <h5>{addQuestion[number1]}</h5>
              </div>
            </div>
            <div style={styles.center}>
              <button type="submit" style={{ width: 100, height: 100 }}>
                질문 선택
              </button>
            </div>
          </div>
        </form>
        <form onSubmit={handleSubmit1} style={styles.center}>
          <div>
            <div>
              <div style={styles.center}>
                <h3>질문추가하기</h3>
              </div>
              <div style={styles.center}>
                <input name="added" onChange={handleChange} value={str}></input>
              </div>
            </div>
            <div style={styles.center}>
              <button
                type="submit"
                style={{ width: 100, height: 100, marginTop: 20 }}
              >
                질문 추가
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Test;
