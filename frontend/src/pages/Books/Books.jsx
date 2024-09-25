import { useEffect, useState } from "react";

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await fetch("http://localhost:8080/books");
				const data = await res.json();
				setBooks(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllBooks();
	});
	return (
		<div>
			<h1>BOOK STORE</h1>
			<div className='books'>
				{books.map((book) => (
					<div key={book.id} className='book'>
						{book.cover && <img src={book.cover} alt='kitap kapağı' />}
						<h2>{book.title}</h2>
						<p>{book.desc}</p>
						<span>{book.price}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Books;
