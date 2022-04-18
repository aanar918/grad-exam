import React from "react";

function Header(props) {
	return (
		<>
			<div>My todo list</div>
			<div>/{props.count}</div>
		</>
	);
}

export default Header;
