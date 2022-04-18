import React from "react";
import "../style/Main.css";

function Header(props) {
	return (
		<div className="header">
			<div>My todo list</div>
			<div className="counter">
				{props.toggled}/{props.count}
			</div>
		</div>
	);
}

export default Header;
