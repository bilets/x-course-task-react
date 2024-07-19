export default function BookCart({ title, count, total }) {
  return (
    <div className='cart'>
      <p className='title'>
        Book Name: <b>{title} </b>
      </p>

      <p >
        Count: <b>{count} </b>
      </p>
      <p>
        Total price: <b>{total}</b>
      </p>
    </div>
  );
}
