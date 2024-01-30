import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile';

const userDetailsList = [
  {
    uniqueNo:1,
    imageUrl:"https://wallpapercave.com/dwp2x/wp2948621.jpg",
    name:"Rebort Downy Jr",
    role:"Hollywood Actor"
  },
  {
    uniqueNo:2,
    imageUrl:"https://wallpapercave.com/dwp2x/wp2948608.jpg",
    name:"Tom Cruise",
    role:"Hollywood Actor"
  },
  {
    uniqueNo:3,
    imageUrl:"https://wallpapercave.com/dwp2x/wp2278316.jpg",
    name:"Rebort Patinson",
    role:"Hollywood Actor"
  },
  {
    uniqueNo:4,
    imageUrl:"https://wallpapercave.com/dwp2x/wp10855627.jpg",
    name:"Prabhas",
    role:"Tollywood Actor"
  },
  {
    uniqueNo:5,
    imageUrl:"https://wallpapercave.com/dwp2x/wp12038329.jpg",
    name:"Ram Charan",
    role:"Tollywood Actor"
  },
  {
    uniqueNo:6,
    imageUrl:"https://wallpapercave.com/dwp2x/wp6339814.jpg",
    name:"Jr.NTR",
    role:"Tollywood Actor"
  },
  {
    uniqueNo:7,
    imageUrl:"https://wallpapercave.com/dwp2x/wp13126593.jpg",
    name:"Sharuk Khan",
    role:"Bollywood Actor"
  },
  {
    uniqueNo:8,
    imageUrl:"https://wallpapercave.com/dwp2x/wp7175849.jpg",
    name:"Surya",
    role:"Kollywood Actor"
  },
  {
    uniqueNo:9,
    imageUrl:"https://wallpapercave.com/dwp2x/wp5950656.jpg",
    name:"Nani",
    role:"Tollywood Actor"
  },
  {
    uniqueNo:10,
    imageUrl:"https://wallpapercave.com/dwp2x/wp6356794.jpg",
    name:"Vijay Devarakonda",
    role:"Tollywood Actor"
  }
]

const App = () => (
  <div className="list-container">
    <h1 className='title'>User List </h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails = {eachItem} />
      ))}
    </ul>
  </div>
)

export default App;