import logo from './logo.svg';
import './App.css';
import IndianStateList from './Components/IndianStateList';

const IndiaStateInfo = [
  {
    stateName: "West Bengal",
    capital: "Kolkata",
    foundedOn: "1 Nov 1956"
  },
  {
    stateName: "Himachal Pradesh",
    capital: "Shimla",
    foundedOn: "25 jan 1971"
  },
  {
    stateName: "Jharkhand",
    capital: "Ranchi",
    foundedOn: "15 Nov 2000"
  }
];

function App() {
  return (
    <IndianStateList states={IndiaStateInfo} />
  )
}

export default App;
