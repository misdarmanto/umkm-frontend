import { Card } from "flowbite-react";
import ImageBanner from "../assets/banner1.png";
import ImageVegtable from "../assets/banner2.png";
import Typography from "../components/typography";
import CardStyle from "../components/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ServiceApi } from "../services/api";
import { CONFIG } from "../configs";
import { ChefTypes, FeedbackTypes, MenuTypes } from "../types";

const Home = () => {
	const [listPopularMenu, setListPopularMenu] = useState<MenuTypes[]>([]);
	const [listChefe, setListChefe] = useState<ChefTypes[]>([]);
	const [listFeedBack, setListFeedBack] = useState<FeedbackTypes[]>([]);

	const fecthData = async () => {
		const serviceApi = new ServiceApi(CONFIG.base_url_api);
		const menus = await serviceApi.get("/menu/list?category=popular");
		setListPopularMenu(menus.items);
		console.log(menus);

		const feedBack = await serviceApi.get("/feed-back/list");
		setListFeedBack(feedBack.items);

		const chefe = await serviceApi.get("/employee/list");
		setListChefe(chefe.items);
	};

	useEffect(() => {
		fecthData();
	}, []);

	return (
		<>
			<div className="sm:flex justify-between items-center mb-10">
				<div className="p-5 sm:w-full m-2">
					<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Selamat Datang di Restoran
						<span className="text-teal-600 dark:text-teal-500"> Mbadok</span>
					</h1>
					<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
						Nikmati pengalaman kuliner yang tak terlupakan di Restoran Mbadok. Kami adalah
						restoran pilihan bagi pecinta makanan yang mencari rasa autentik dan kualitas terbaik.
						Dengan menu yang kaya akan cita rasa, bahan-bahan segar, dan pelayanan yang ramah,
						Restoran Mbadok siap memanjakan lidah Anda.
					</p>
				</div>
				<img
					className="sm:h-64 w-full sm:w-96 max-w-lg rounded-lg"
					src={ImageBanner}
					alt="image description"
				/>
			</div>

			<Typography variant="h2" className="text-center mb-5">
				Menu Populer
			</Typography>
			<div className="flex overflow-x-auto max-w-full my-5">
				{listPopularMenu.map((item: MenuTypes) => (
					<Link to={`/menu/detail/${item.id}`}>
						<CardStyle
							key={item.id}
							title={item.title}
							stars={item.stars}
							price={item.price}
							image={item.image}
							className="m-2"
						/>
					</Link>
				))}
			</div>

			<div className="sm:flex justify-between items-center my-20">
				<img
					className="sm:h-64 w-full sm:w-96 max-w-lg rounded-lg"
					src={ImageVegtable}
					alt="image description"
				/>
				<div className="p-5 sm:w-full m-2">
					<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Nikmati Kelezatan Masakan Kami
					</h1>
					<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
						Kami mengutamakan kualitas bahan-bahan yang digunakan dalam setiap hidangan kami. Kami
						hanya menggunakan bahan-bahan segar dan berkualitas tinggi untuk memastikan cita rasa
						yang optimal. Dari ikan laut yang segar, sayuran organik, daging pilihan, hingga
						bumbu-bumbu rempah pilihan, kami berkomitmen untuk memberikan yang terbaik bagi para
						tamu kami.
					</p>
				</div>
			</div>

			<Typography variant="h2" className="text-center my-20">
				Bersama Chef profesional
			</Typography>
			<div className=" sm:flex max-w-full">
				{listChefe.map((item: ChefTypes) => (
					<div
						key={item.id}
						className="bg-white rounded-lg shadow-md my-5 p-2 sm:p-4 w-full sm:w-96 sm:m-5"
					>
						<img src={item.image} alt="chefes" className="object-contain rounded-lg" />
						<h3 className="text-xl font-semibold">{item.name}</h3>
					</div>
				))}
			</div>

			<Typography variant="h2" className="text-center my-20">
				Apa kata pelanggan kami
			</Typography>
			<div className="flex overflow-x-auto max-w-full">
				{listFeedBack.map((item: FeedbackTypes) => (
					<div key={item.id} className="max-w-sm m-5">
						<Card key={item.id} className="w-96 p-2 h-64">
							<p className="font-normal truncate-50 text-gray-700 dark:text-gray-400">
								{item.message}
							</p>
							<div className="flex">
								<img
									className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 "
									src={item.image}
									alt="Bordered avatar"
								/>

								<h5 className="text-2xl mx-5 font-bold tracking-tight text-gray-900 dark:text-white">
									{item.name}
								</h5>
							</div>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
