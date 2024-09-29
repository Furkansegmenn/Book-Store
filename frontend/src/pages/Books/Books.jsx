import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./books.scss";

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

	const handleDelete = async (id) => {
		try {
			const response = await fetch(`http://localhost:8080/books/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				window.location.reload();
			} else {
				console.error("Delete failed:", response.status, response.statusText);
			}
		} catch (err) {
			console.error("Network error:", err);
		}
	};
	return (
		<div className='container'>
			<h1 className='header'>BOOK STORE</h1>
			<div className='books'>
				{books.map((book) => (
					<div key={book.id} className='book'>
						{book.cover && <img className='cover' src={book.cover} />}
						<h2 className='title'>{book.title}</h2>
						<p className='description'>{book.desc}</p>
						<span className='price'> ${book.price}</span>
						<div className='buttons'>
							<button className='delete' onClick={() => handleDelete(book.id)}>
								Delete
							</button>

							<button className='update'>
								<Link to='/update/:id' style={{ textDecoration: "none", color: "#fff" }}>
									Update
								</Link>
							</button>
						</div>
					</div>
				))}
			</div>

			<Link to='/add' style={{ textDecoration: "none", color: "#fff" }}>
				<button className='newbook'>Add new book</button>
			</Link>
		</div>
	);
};

export default Books;
