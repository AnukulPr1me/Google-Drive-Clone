import './App.css';
import Header from './components/header/index.js'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState({
    displayName: "Loli Hunter",
    email: "n0one4u2kill@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://yt3.ggpht.com/xDb6ZQGDj4_6QixyKBNmv1LJ-fVtr3rYsOAHveENJ8g4XaUbRFB1n0IF-MeWEyKgfIisv95qNA=s88-c-k-c0x00ffffff-no-rj"
  })
  return (
    <div className="App">
      <Header userPhoto={user.photoURL}/>
    </div>
  );
}

export default App;
