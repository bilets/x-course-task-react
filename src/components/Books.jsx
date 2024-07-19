import Book from './Book';

export default function Books({ books }) {
  return (
    <div className='cards'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
}
