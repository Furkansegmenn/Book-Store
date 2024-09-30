import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Update = () => {
	return (
		<div className='container'>
			<Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
				<IoMdHome className='icon' style={{ fontSize: "30px" }} />
			</Link>
			<div className='mid-container'>
				<h1 className='header'>Update the Book</h1>
				<form className='form'>
					<input type='text' placeholder='Title' />
					<input type='textbox' placeholder='Description' />
					<input type='number' placeholder='Price' />
					<input type='text' placeholder='Cover' />
					<button className='add-button'>Update</button>
				</form>
			</div>
		</div>
	);
};

export default Update;
