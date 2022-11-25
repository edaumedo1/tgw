import React, { useState } from "react";
import questions100 from "../question.json";

const Test = () => {
  const questions = questions100;

  const [number, setNumber] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const number = Math.floor(Math.random() * 100) + 1;
    setNumber(number);
    console.log(number);
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
