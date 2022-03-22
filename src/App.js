import ResultViewer from "./ResultViewer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>📊 Welcome Yaberus students, Wish you good luck with your result </h3>
      <h5>🛑 Enter your registration number:</h5>
      <ResultViewer />

      <p style={{ paddingTop: 15 }}>
        🆕 we will be releasing a placement result soon
      </p>

      <footer style={{ padding: 10, fontFamily: "monospace" }}>
        <hr />
        <p>
          👨‍💻 DEVELOPED with 💜 by{" "}
          <a href="https://bit.ly/KINFISHTECH" target="_blank">
            KINFE
          </a>
        </p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
