import { useEffect, useState } from 'react';

export default function BookSelect({ selectBooks }) {
  const [bookSelect, setBookSelect] = useState(1);
  useEffect(() => {
    selectBooks(bookSelect);
  }, [bookSelect]);

  return (
    <select value={bookSelect} onChange={(e) => setBookSelect(e.target.value)}>
      <option value='1'>All</option>
      <option value='2'>
        0 {'<'} price {'<'} 15
      </option>
      <option value='3'>
        15 {'<'} price {'<'} 30
      </option>
      <option value='4'>price {'>'} 30</option>
    </select>
  );
}
