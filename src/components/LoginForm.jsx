import { useState } from "react"
import axios from 'axios'


<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject ={'Project-ID': "f62c65e3-a217-4cd4-9eea-1934c4b1efce", 'User-Name' : username, 'User-Secret' : password, 'private-key' : "8862256e-8720-49f1-8ba9-e26062e31b0d"}

        try {
           await axios.get('https://api.chatengine.io/chats', {headers: authObject})

           localStorage.setItem('username', username)
           localStorage.setItem('password',  password)

           window.location.reload()
        } catch (error) {
            setError('Enter A Correct Details..')
        }

    }

    return(
          <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } className="input" placeholder="password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>

                    <h2 className="error">{error}</h2>

                </form>

            </div>
          </div>
    )
}

export default LoginForm;