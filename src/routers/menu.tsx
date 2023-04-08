import ImageFood from "../assets/nasigoreng.png";
import Typography from "../components/typography";
import CardStyle from "../components/card";
import { Link } from "react-router-dom";
import { MENU, MenuTypes } from "../data";
import { useState } from "react";

const Menu = () => {
	const [listMenu, setListMenu] = useState(MENU);

	console.log(listMenu);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value === "") {
			setListMenu(MENU);
			return;
		}

		const result = MENU.filter((item: MenuTypes) => {
			if (item.title.toUpperCase().search(event.target.value.toUpperCase()) !== -1) return item;
		});

		setListMenu(result);
	};

	return (
		<>
			<Typography variant="h2" className="text-center mb-10">
				All Menu
			</Typography>

			<form className="flex items-center mb-20">
				<label className="sr-only">Search</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="text"
						onChange={handleSearch}
						id="simple-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5"
						placeholder="Search"
						required
					/>
				</div>
			</form>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{listMenu.length === 0 && (
					<div className="flex items-center justify-center">
						<Typography variant="h5">Opss!... Menu tidak ada</Typography>
					</div>
				)}
				{listMenu.map((item: MenuTypes) => (
					<Link to={`/menu/detail/${item.id}`}>
						<CardStyle
							key={item.id}
							className="w-full sm:w-64"
							title={item.title}
							price={item.price}
							image={item.image}
							stars={item.stars}
						/>
					</Link>
				))}
			</div>
		</>
	);
};

export default Menu;
