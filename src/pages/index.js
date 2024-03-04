import React from "react"; // , { useState }
import Nav from "../components/nav";
import { Link } from "react-router-dom";

const Home = () => {
  // const [number, setNumber] = useState(0);

  // function handleSubmit(e) {
  // e.preventDefault();
  // const number =
  //   Math.floor(Math.random() * (Object.keys(questions100).length - 1)) + 1;
  // setNumber(number);
  // }

  return (
    <>
      <Nav />
      <div style={styles.center}>
        <div>
          <div style={styles.center}>
            <h2>퀴즈</h2>
          </div>
          <button>
            <Link to="/makeRoom">방만들기</Link>
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
};

export default Home;
