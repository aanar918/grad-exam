import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/Main.css";

function List(props) {
	const [toggled, setToggled] = useState(0);
	let editingList = [];
	const [edit, setEdit] = useState([]);

	const handleEdit = (id) => {
		// e.preventDefault();
		// const data = {};
		fetch(`http://18.141.140.1:3000/api/activate/${id}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(props.setChange(true));
		console.log(id);

		// console.log(editingList);
		// if (editingList.includes(id)) {
		// 	editingList.filter((e) => e !== id);
		// 	props.setChange(true);
		// } else {
		// 	editingList.push(id);
		// 	props.setChange(true);
		// }
	};

	const handleDelete = (id) => {
		fetch(`http://18.141.140.1:3000/api/delete-list/${id}`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(props.setChange(true))
			.catch((err) => console.log(err));
	};

	const handleConfirm = (id) => {
		console.log(id);
	};

	const handleToggle = (id) => {
		if (toggled === 0 || toggled <= 0) {
			setToggled(toggled + 1);
		} else {
			setToggled(toggled - 1);
		}
		console.log(id);
	};

	return (
		<ul className="list-group list-group-flush">
			{props.data.map((i) =>
				!i.editing ? (
					<li
						key={i._id}
						className="list-group-item"
						toggled={toggled}
						setToggled={setToggled}
					>
						<Form>
							{["checkbox"].map((type) => (
								<div key={`default-${type}`}>
									<Form.Check type={type} id={`default-${type}`} />
								</div>
							))}
						</Form>
						{i.text}
						<Button
							variant="primary"
							id={i._id}
							onClick={() => handleEdit(i._id)}
							className="edit"
						></Button>
						<Button
							variant="danger"
							onClick={() => handleDelete(i._id)}
							className="delete"
						></Button>
					</li>
				) : (
					<li
						key={i._id}
						className="list-group-item"
						toggled={toggled}
						setToggled={setToggled}
					>
						<Form>
							{["checkbox"].map((type) => (
								<div key={`default-${type}`}>
									<Form.Check type={type} id={`default-${type}`} />
								</div>
							))}
						</Form>
						<Form onSubmit={handleEdit}>
							<Form.Group className="mb-3" controlId="name">
								<Form.Control type="text" required defaultValue={i.text} />
							</Form.Group>
							<Button
								variant="success"
								onClick={() => handleConfirm(i._id)}
								className="confirm"
							></Button>
						</Form>
						{/* ??? */}
					</li>
				)
			)}
		</ul>
	);
}

export default List;
