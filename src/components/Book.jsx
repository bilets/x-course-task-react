import { useNavigate } from 'react-router-dom';
import imageNotFound from '../images/imageNotFound.png';

export default function Book({ image, title, author, price }) {
  const navigate = useNavigate();
  return (
    <div className='card'>
      <img src={image ? image : imageNotFound} alt='imageNotFound' />
      <h4>{title.length > 24 ? title.substr(0, 24) + '...' : title}</h4>
      <p>
        author: <b>{author}</b>
      </p>
      <div className='price'>
        <p>
          price: <b>{price} $</b>
        </p>
        <button onClick={() => navigate(title)}>View</button>
      </div>
    </div>
  );
}
