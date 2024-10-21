import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // this is how we handle data sending
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    console.log("login render")
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex justify-center">
      <form 
        className="flex flex-col justify-center items-center gap-8 mt-8 bg-blue-200 w-[400px] p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold">Login</h2>
        <input 
          className="border-2 border-black p-2 rounded-lg focus:outline-none" 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="username" 
          required 
        />
        <input 
          className="border-2 border-black p-2 rounded-lg focus:outline-none" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="password" 
          required 
        />
        <button 
          type="submit" 
          className="border-2 border-black px-4 py-2 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
