import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load the components
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const Works = lazy(() => import("./pages/Works"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));

const AppRoutes = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			<Route path="/about" element={<About />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/works" element={<Works />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</Suspense>
);

export default AppRoutes;
