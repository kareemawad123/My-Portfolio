import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RightCol = () => {
	const menue = [
		{ name: "about", label: "About", icon: "fa-regular fa-user" },
		{ name: "resume", label: "Resume", icon: "fa-regular fa-file" },
		{ name: "works", label: "Works", icon: "fa-solid fa-briefcase" },
		{ name: "blogs", label: "Blogs", icon: "fa-brands fa-blogger" },
		{ name: "contact", label: "Contact", icon: "fa-regular fa-address-book" },
	];
	return (
		<div className="lg:w-[8%] xl:w-[8%] md:w-[8%] sm:w-[10%] xs:w-[10%]">
			<div className="bg-white rounded-md flex flex-col gap-3 justify-center py-5">
				{menue.map((item, index) => (
					<div key={index} className="">
						<Link
							to={item.name}
							className="btn flex flex-col items-center w-[70%] mx-auto px-0 h-16 bg-[#F0F0F0]"
						>
							<FontAwesomeIcon className="p-0 m-0" icon={item.icon} size="lg" />
							<p className="lg:text-sm sm:text-xs  p-0 m-0">{item.label}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RightCol;
