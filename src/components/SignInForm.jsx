import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignInForm({ addUsername }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  return (
    <form className='signIn'>
      <label>
        <b>Username</b>
      </label>

      <input
        type='text'
        placeholder='type Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        disabled={username.length < 4 || username.length > 16}
        onClick={() => {
          navigate('books');
          addUsername(username);
        }}
      >
        Sing-In
      </button>
    </form>
  );
}
