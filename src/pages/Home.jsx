import React from "react";
import LeftCol from "../layouts/LeftCol";
import RightCol from "../layouts/RightCol";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";

const Home = () => {
	return (
		<div className="xl:container flex justify-center gap-3 mx-auto py-5">
			<BrowserRouter>
				<LeftCol />
				<div className="flex-grow">
					<AppRoutes />
				</div>
				<RightCol />
			</BrowserRouter>
		</div>
	);
};

export default Home;
