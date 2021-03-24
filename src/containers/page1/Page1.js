import React from 'react';
import {withRouter} from "react-router";

function Page1(props) {

	return (
		<div className="flex w-full h-full justify-center items-center">
			<h2>Page 1</h2>
		</div>
	);
}

export default withRouter(Page1);
