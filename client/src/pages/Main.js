import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../style/Main.css";
import TriggerButton from "../components/TriggerButton";
import List from "../components/List";
import CreateInput from "../components/CreateInput";
import Header from "../components/Header";

function Main() {
	const [changed, setChanged] = useState(false);
	const [toggled, setToggled] = useState(0);
	const [list, setList] = useState([]);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		fetch("http://18.141.140.1:3000/api/lists", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((data) => data.json())
			.then((re) => {
				if (re.success === true) {
					setList(re.data);
				}
			})
			.finally(() => {
				setChanged(false);
			});
	}, [changed]);

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center main">
			<Header count={list.length} toggled={toggled} />
			<div className="background">
				<List
					changed={changed}
					setChange={setChanged}
					data={list}
					count={list.length}
					editing={editing}
					setEditing={setEditing}
					toggled={toggled}
					setToggle={setToggled}
				/>
				<CreateInput setChange={setChanged} />
			</div>
		</Container>
	);
}

export default Main;
