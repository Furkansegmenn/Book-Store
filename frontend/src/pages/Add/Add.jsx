import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.scss";
import { IoMdHome } from "react-icons/io";

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
		if ((!book.title, !book.desc, !book.price, !book.cover)) {
			alert("Please fill all fields");
			return;
		}
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
		<div className='container'>
			<Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
				<IoMdHome className='icon' style={{ fontSize: "30px" }} />
			</Link>
			<div className='mid-container'>
				<h1 className='header'>Add New Book</h1>
				<form className='form'>
					<input type='text' placeholder='Title' onChange={handleChange} name='title' />
					<input type='text' placeholder='Description' onChange={handleChange} name='desc' />
					<input type='number' placeholder='Price' onChange={handleChange} name='price' />
					<input type='text' placeholder='Cover' onChange={handleChange} name='cover' />
					<button className='add-button' onClick={handleClick}>
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default Add;
