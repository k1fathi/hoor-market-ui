import React, {useEffect} from 'react';
import {withRouter} from "react-router";
import withReducer from "../../store/withReducer";
import home from "./store/reducers/home.reducer";

function Home() {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<h2>Home Page</h2>
		</div>
	);
}

export default withRouter(withReducer("home", home)(Home));
