import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json()); // arayüzden apiye json olarak istek göndermemizi sağlar.
app.use(cors());
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "furkan123",
	database: "test",
});

app.get("/", (req, res) => {
	res.json("Hello this is the backend");
});

app.get("/books", (req, res) => {
	const q = "SELECT * FROM books";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post("/books", (req, res) => {
	const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
	const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json("book created succesfully");
	});
});

app.listen(8080, () => {
	console.log("Connected the backend server !!");
});
