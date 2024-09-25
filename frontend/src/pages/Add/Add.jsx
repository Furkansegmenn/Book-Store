import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
	const [book, setBook] = useState({
		title: "",
		desc: "",
		price: 0, // Başlangıçta 0 olarak ayarlayın
		cover: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8080/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(book),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			navigate("/");
		} catch (error) {
			console.error("Error adding book:", error);
		}
	};

	return (
		<div>
			<h1>New Book</h1>
			<input type='text' placeholder='title' onChange={handleChange} name='title' />
			<input type='text' placeholder='description' onChange={handleChange} name='desc' />
			<input type='number' placeholder='price' onChange={handleChange} name='price' />
			<input type='text' placeholder='cover' onChange={handleChange} name='cover' />
			<button onClick={handleClick}>Add</button>
		</div>
	);
};

export default Add;
