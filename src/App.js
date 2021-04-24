import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
// import MessageForm from './components/MessageForm';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="2ba2bfa5-265b-4d82-bca2-185c615e9830"
            userName="AllPowerful"
            userSecret="password"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;