import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

function BookModal(props) {
	
	const handleChangeInput = (e) => {
		let reg = /^\d+$/;
		if (e.target.value.length > 10) {
			// alert("ISBN must be 10 characters long");
			console.log(e.target.value.slice(0, 10));
		}
	};
	const handleEdit = (e) => {
		e.preventDefault();

		let data = {
			name: e.target[0].value,
			price: e.target[1].value,
			author: e.target[2].value,
			isbn: e.target[3].value,
			published: e.target[4].value,
		};
		
		fetch(`http://18.141.140.1:3000/api/update-book/${props.data._id}`, {
			method: "PUT",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(props.setChange(true))
			.then(console.log("edited result", data))
			.catch((err) => console.log(err));
	};

	const handleCreate = (e) => {
		e.preventDefault();
		let data = {
			name: e.target[0].value,
			price: e.target[1].value,
			author: e.target[2].value,
			isbn: e.target[3].value,
			published: e.target[4].value,
		};

		fetch("http://18.141.140.1:3000/api/create-books", {
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

	let final;
	switch (props.type) {
		case "create":
			final = (
				<>
					<Modal
						{...props}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						backdrop="static"
					>
						<Modal.Header closeButton>
							<Modal.Title id="contained-modal-title-vcenter">
								Add Book
							</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form onSubmit={handleCreate} show={props.show}>
								<Form.Group className="mb-3" controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Name" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="price">
									<Form.Label>Price</Form.Label>
									<Form.Control type="number" placeholder="Price" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="author">
									<Form.Label>Author</Form.Label>
									<Form.Control type="text" placeholder="Author" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="isbn">
									<Form.Label>ISBN</Form.Label>
									<Form.Control
										onChange={handleChangeInput}
										minLength={10}
										type="number"
										placeholder="ISBN"
										required
										maxLength={10}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="date">
									<Form.Label>Published On</Form.Label>
									<Form.Control
										type="date"
										placeholder="Published On"
										required
									/>
								</Form.Group>
								<Button
									variant="primary"
									type="submit"
									onClick={() => {
										props.setChange(!props.change);
										props.setHide(false);
									}}
								>
									Create
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
				</>
			);
			break;

		case "edit":
			final = (
				<>
					<Modal
						{...props}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						show={props.show}
						backdrop="static"
					>
						<Modal.Header
							closeButton
							className="d-flex flex-column align-items-center justify-content-center"
						>
							<Modal.Title id="contained-modal-title-vcenter">
								Edit Book
							</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form onSubmit={handleEdit}>
								<Form.Group className="mb-3" controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										required
										defaultValue={props.data.name}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="price">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										required
										defaultValue={props.data.price}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="author">
									<Form.Label>Author</Form.Label>
									<Form.Control
										type="text"
										required
										defaultValue={props.data.author}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="isbn">
									<Form.Label>ISBN</Form.Label>
									<Form.Control
										type="number"
										defaultValue={props.data.isbn}
										required
										maxLength="10"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="date">
									<Form.Label>Published On</Form.Label>
									<Form.Control
										required
										type="date"
										defaultValue={props.data.published.slice(0, 10)}
									/>
								</Form.Group>
								<Button
									className="align-self-center"
									variant="primary"
									type="submit"
									onClick={() => {
										props.setHide(false);
										props.setChange(true);
									}}
								>
									Save
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
				</>
			);
			break;

		case "delete":
			final = (
				<>
					<Modal
						{...props}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						show={props.show}
						backdrop="static"
					>
						<Modal.Header
							closeButton
							className="d-flex flex-column align-items-center justify-content-center"
						>
							<Modal.Title id="contained-modal-title-vcenter">
								Are you sure to delete "{props.data.name}"?
							</Modal.Title>
						</Modal.Header>

						<Modal.Body className="d-flex flex-column align-items-center justify-content-center">
							<DeleteButton
								id={props.data._id}
								setChange={props.setChange}
								setHide={props.setHide}
							/>
						</Modal.Body>
					</Modal>
				</>
			);
			break;
	}

	return final;
}

export default BookModal;
