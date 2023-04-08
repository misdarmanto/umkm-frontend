import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { MENU, MenuTypes } from "../../data";

const DetailMenu: React.FC = () => {
	const { id } = useParams();
	const detailMenu = MENU.find((item: MenuTypes) => item.id === parseInt(id || ""));

	const containerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		containerRef.current?.scrollIntoView();
	}, []);

	return (
		<div ref={containerRef} className="container mx-auto px-4">
			<div className="md:flex">
				<div className="md:w-1/2">
					<img
						src={detailMenu?.image}
						alt={"image menu"}
						className="w-full object-contain rounded-lg h-64 w-64"
					/>
				</div>
				<div className="md:w-1/2 p-6">
					<h1 className="text-3xl font-semibold mb-4">{detailMenu?.title}</h1>
					<p className="text-gray-600 mb-6">{detailMenu?.description}</p>
					<p className="text-gray-800 font-semibold mb-2">Harga:</p>
					<p className="text-gray-600 mb-4">Rp {detailMenu?.price}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailMenu;
