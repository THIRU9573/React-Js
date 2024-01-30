import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import About from './Components/About';

function MyButton( ) {
  return (
    <button>
      I'm button
    </button> 
  );
}

export default function MyApp() {
  return (
    <div>
      <h1> Wel Come to MyApp </h1>
      <MyButton />
      <Heading />
      <About />
    </div>
  )
}

