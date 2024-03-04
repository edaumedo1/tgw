import React from "react"; //useState, useEffect
import Nav from "../components/nav";
import { io } from "socket.io-client"; // Client Socket
// import { Server, Socket } from "socket.io";
// import randomStringCode6 from "../utils/randomStringCode6";
// import addQuestion1 from "../addQuestion.json";

const Test = () => {
  const socket = io.connect("http://localhost:4000", {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    transports: ["websocket", "polling"],
  });

  socket.on("chat message", (socket) => {
    console.log(socket);
  });

  const handleRequestSocket = () => {
    // console.log("111");
    socket.emit("chat message", {
      data: "test socket on client",
    });
  };

  function handleChange() {
    console.log("change handle");
  }

  return (
    <>
      <Nav />
      <div>
        test socket connection
        <button onClick={handleRequestSocket}>Request</button>
        <input type="text" onChange={handleChange} />
      </div>
    </>
  );
};

// const styles = {
//   center: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

export default Test;
