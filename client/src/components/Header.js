import React from "react";

function Header(props) {
	return (
		<>
			<div>My todo list</div>
			<div>{props.toggled}/{props.count}</div>
		</>
	);
}

export default Header;
