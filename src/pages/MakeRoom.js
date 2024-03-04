import React, { useState } from "react";
import Nav from "../components/nav";
import randomStringCode6 from "../utils/randomStringCode6";
// import addQuestion1 from "../addQuestion.json";

const MakeRoom = () => {
  const [roomId, setRoomId] = useState("");

  function handleSubmit(e) {
    setRoomId(randomStringCode6());
  }

  return (
    <>
      <Nav />
      <div style={styles.center}>
        <div>
          <div style={styles.center}>
            <h2>방만들기</h2>
          </div>
          <h3>{roomId}</h3>
          <button onClick={handleSubmit}>방주소 생성</button>
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
};

export default MakeRoom;
