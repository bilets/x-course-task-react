import SignInForm from '../components/SignInForm';
import avatar from '../images/avatar.png';

export default function SignIn({ addUsername }) {
  return (
    <div className='body'>
      <div className='signIn'>
        <img className='signIn-img' src={avatar} alt='avatar' />
      </div>
      <SignInForm addUsername={addUsername} />
    </div>
  );
}
