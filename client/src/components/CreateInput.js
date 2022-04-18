import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateInput(props) {
	const handleCreate = (e) => {
		e.preventDefault();
		const data = { text: e.target[0].value };

		fetch("http://18.141.140.1:3000/api/create-list", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					props.setChange(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Form onSubmit={handleCreate}>
			<Form.Group className="mb-3" controlId="name">
				<Form.Control type="text" placeholder="what's next ?" required />
			</Form.Group>
			<Button
				variant="primary"
				type="submit"
			>
				Add Task
			</Button>
		</Form>
	);
}

export default CreateInput;
