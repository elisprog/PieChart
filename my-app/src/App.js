import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";


function App() {
  return (
    <div className="App">
    <Chart
      chartType="PieChart"
      data = {[
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]}
      options = {{title: "My Daily Activities",
      }}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
