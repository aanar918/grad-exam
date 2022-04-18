import React from "react";
import { Button } from "react-bootstrap";

function DeleteButton(props) {
	const handleDelete = () => {
		fetch(`http://18.141.140.1:3000/api/delete-book/${props.id}`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(props.setChange(true))
			.then(props.setHide(false))
			.catch((err) => console.log(err));

		console.log("deleted", props.id);
	};

	return (
		<Button variant="danger" onClick={handleDelete}>
			Delete
		</Button>
	);
}

export default DeleteButton;
