
import './App.css';
import UserProfile from './components/UserProfile';
import { UserProviderProfile } from './components/user-contextProfile';

function App() {
  return (
    
    <UserProviderProfile>
    <div className="App">
       <UserProfile />
    </div>
    </UserProviderProfile>
  );
}

export default App;
