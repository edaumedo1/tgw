import React, { useState } from "react";
import Nav from "../components/nav";
import randomStringCode6 from "../utils/randomStringCode6";
// import addQuestion1 from "../addQuestion.json";

const IntoRoom = () => {
  const [, setRoomId] = useState(""); //roomId

  function handleSubmit(e) {
    setRoomId(randomStringCode6());
  }

  return (
    <>
      <Nav />
      <div style={styles.center}>
        <div>
          <div style={styles.center}>
            <h2>방코드 입력</h2>
          </div>
          <input style={styles.textbox}></input>
          <button style={styles.button} onClick={handleSubmit}>
            입장하기
          </button>
        </div>
      </div>
    </>
  );
};

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15px",
    width: "120px",
    margin: "5px 0 5px 0",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "15px",
    // width: "120px",
  },
};

export default IntoRoom;
