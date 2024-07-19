import { useEffect, useState } from 'react';

export default function BookSearch({ searchBooks }) {
  const [bookName, setBookName] = useState('');
  useEffect(() => {
    searchBooks(bookName);
  }, [bookName]);

  return (
    <>
      <input
        type='search'
        placeholder='Search Book'
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
    </>
  );
}
