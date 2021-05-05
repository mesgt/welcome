import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

export function App() {
    if(!localStorage.getItem('uisername')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName='Rob_Smith'
			userSecret='zxcvbnm'
			projectID='2ba2bfa5-265b-4d82-bca2-185c615e9830'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;