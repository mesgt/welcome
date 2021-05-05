import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        const authObject = { 'Project-ID': "2ba2bfa5-265b-4d82-bca2-185c615e9830", 'User-Name': username, 'User-Secret': password  }
    
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
        } catch (error) {

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="User Name" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}