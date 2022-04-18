import React from "react";
import { Button } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import TriggerButton from "./TriggerButton";

function List(props) {
	return (
		<ul class="list-group list-group-flush">
			{props.data.map((i) => (
				<li key={i._id} class="list-group-item">
					<ToggleButton >
                        asd
					</ToggleButton >
					{i.text}
					{/* <TriggerButton type={"edit"} className="edit" />{" "} */}
					<Button
						variant="primary"
						// onClick={() => setModalShow(true)}
						className="edit"
					></Button>
					<Button
						variant="danger"
						// onClick={() => setModalShow(true)}
						className="delete"
					></Button>
					<Button
						variant="success"
						// onClick={() => setModalShow(true)}
						className="confirm"
					>
						✓
					</Button>
				</li>
			))}
		</ul>
	);
}

export default List;
