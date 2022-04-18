import React, { useState } from "react";
import BookTable from "../components/BookTable";
import { Container } from "react-bootstrap";
import "../style/Main.css";
import TriggerButton from "../components/TriggerButton";

function Main() {
	const [changed, setChanged] = useState(false);

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center">
			<div className="background">
				<BookTable changed={changed} setChange={setChanged} />
			</div>
			<TriggerButton type={"create"} setChange={setChanged} />
		</Container>
	);
}

export default Main;
