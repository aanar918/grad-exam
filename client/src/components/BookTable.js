import React, { useEffect, useState } from "react";
import TriggerButton from "../components/TriggerButton";
import "../style/Table.css";

const BookTable = (props) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("http://18.141.140.1:3000/api/books", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((data) => data.json())
			.then((re) => {
				if (re.success === true) {
					setBooks(re.data);
				}
			})
			.finally(() => {
				props.setChange(false);
			});
	}, [props.changed]);

	return (
		<table className="table table-striped">
		{/* <table className="table table-borderless border-stripped"> */}
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Price</th>
					<th>Author</th>
					<th>ISBN</th>
					<th>Published On</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{books.map((i, index) => (
					<tr key={++index}>
						<td className="bold">{++index}</td>
						<td className="bold">{i.name}</td>
						<td>{i.price}</td>
						<td>{i.author}</td>
						<td>{i.isbn}</td>
						<td className="flex">{i.published.slice(0, 10)}</td>
						<td className="buttons">
							<TriggerButton
								className="edit"
								setChange={props.setChange}
								change={props.changed}
								type={"edit"}
								data={i}
							/>
							<TriggerButton
								className="delete"
								setChange={props.setChange}
								change={props.changed}
								type={"delete"}
								data={i}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default BookTable;
