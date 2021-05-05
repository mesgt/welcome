import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

export function App() {
    if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='2ba2bfa5-265b-4d82-bca2-185c615e9830'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;