import logo from "./logo.svg";
import "./App.css";
import AboutScreen from "./screen/AboutScreen";
import ProjectScreen from "./screen/ProjectScreen";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
      }}
    >
      <AboutScreen></AboutScreen>
      {/* <ProjectScreen></ProjectScreen> */}
    </div>
  );
}

export default App;
