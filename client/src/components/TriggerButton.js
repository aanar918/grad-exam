import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../style/Buttons.css";

function TriggerButton(props) {
	const [modalShow, setModalShow] = useState(false);
	let final;

	switch (props.type) {
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
				</>
			);
			break;
	}

	return final;
}

export default TriggerButton;
