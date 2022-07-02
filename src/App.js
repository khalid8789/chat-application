
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import MessageForm from "./components/MessageForm";
import MyMessage from "./components/MyMessage";
import TheirMessage from "./components/TheirMessage";


import { BrowserRouter as Router,Routes, Route, Switch, Link } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    
     
      
    return(
        
            
        <ChatEngine
        height = "100vh"
        projectID = "f62c65e3-a217-4cd4-9eea-1934c4b1efce"
        private-key = "8862256e-8720-49f1-8ba9-e26062e31b0d"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        

        renderChatFeed = {(chatAppProps) => <ChatFeed  {... chatAppProps} />}
        
     />

     
     
        

     
    )
}
     

export default App;