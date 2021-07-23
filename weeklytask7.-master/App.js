import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';

function App() {
  const user = [ 
    {
      name: 'Jeff Bezos',
      location: 'space',
      foodType: 'Everything',
      age: 48,
      likes: 'Making money',
      twitterUsername: 'JeffBezos',
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Kim Kardeshian',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and marriage',
      twitterUsername: 'kimkay',
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
    ]



  return (
    <div className="App">

      <UserCard myUser={user}/>
      


    </div>
  );
}

export default App;
