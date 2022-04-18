import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BookModal from "./BookModal";
import "../style/Buttons.css";

function TriggerButton(props) {
	const [modalShow, setModalShow] = useState(false);
	let final;

	switch (props.type) {
		case "create":
			final = (
				<>
					<Button
						variant="primary"
						onClick={() => setModalShow(true)}
						className="add"
					>
						+ Add Book
					</Button>
					<BookModal
						type={"create"}
						show={modalShow}
						setChange={props.setChange}
						change={props.change}
						setHide={setModalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			);
			break;
		case "edit":
			final = (
				<>
					<Button
						variant="primary"
						onClick={() => setModalShow(true)}
						className="edit"
					>
						{/* Edit */}
					</Button>
					<BookModal
						type={"edit"}
						data={props.data}
						show={modalShow}
						setChange={props.setChange}
						setHide={setModalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			);
			break;
		case "delete":
			final = (
				<>
					<Button
						variant="danger"
						onClick={() => setModalShow(true)}
						className="delete"
					>
						{/* Delete */}
					</Button>
					<BookModal
						type={"delete"}
						data={props.data}
						show={modalShow}
						setChange={props.setChange}
						setHide={setModalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			);
			break;
	}

	return final;
}

export default TriggerButton;
