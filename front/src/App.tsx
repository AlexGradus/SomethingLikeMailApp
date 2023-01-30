import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import {  useSelector } from 'react-redux';
import { MyState } from './interface/interface';
import UserList from './components/userList';
import WelcomePage from './components/WelcomePage';
import InboundMessage from './components/InboundMessage';
import PositionedSnackbar from './components/Snackbar';

function App() {
  let name = useSelector((state:MyState)=>state.app.currentUser);
  
  

  return (
    <BrowserRouter>
     <div>
     <WelcomePage />
     <PositionedSnackbar/>
     
     {name&&
     <Routes>
     <Route path='/userlist' element={<UserList />}/>
     <Route path='/inboundmessage' element={<InboundMessage/>}/>
     </Routes>}
     
     {!name&&
     <Routes>
     <Route path='/login' element={<SignInPage/>}/>
     </Routes>}
     
     
     
     
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
