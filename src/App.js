import logo from "./logo.svg";
import "./App.css";
import AboutScreen from "./screen/AboutScreen";
import ProjectScreen from "./screen/ProjectScreen";
import ContactScreen from "./screen/ContactScreen";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
        minHeight: "100vh",
      }}
    >
      {/* <AboutScreen></AboutScreen> */}
      {/* <ProjectScreen></ProjectScreen> */}
      <ContactScreen></ContactScreen>
    </div>
  );
}

export default App;
