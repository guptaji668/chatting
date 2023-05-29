import logo from './logo.svg';
import './App.css';
import ChatBox from './component/ChatBox';
import Chat from './component/Chating';
import Message from './component/Message';
// import Emoji from './component/EmojiPicker';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"




function App() {
 
  return (
    <Router>
      <Routes>
        <Route element={<ChatBox/>} path='login'/>
        <Route element={<Chat/>} path='chating'/>
        <Route element={<Message/>} path='message'/>
        {/* <Route element={<Emoji/>} path='emoji'/> */}


      </Routes>
    </Router>
    
  );
}

export default App;
