import { Avatar, Card, Carousel } from "flowbite-react";
import ImageBanner from "../assets/banner1.png";
import ImageVegtable from "../assets/banner2.png";
import ImageFood from "../assets/nasigoreng.png";
import Typography from "../components/typography";
import CardStyle from "../components/card";
import { CHEF, ChefTypes } from "../data/chef";
import { FEEDBACK, FeedbackTypes } from "../data/feed-back";
import { POPULAR_FOOD, PopularFoodTypes } from "../data/popular-food";
import { Link } from "react-router-dom";

const Home = () => {
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
					className=" sm:h-64 w-96 max-w-lg rounded-lg"
					src={ImageBanner}
					alt="image description"
				/>
			</div>

			<Typography variant="h2" className="text-center mb-5">
				Menu Popular
			</Typography>
			<div className="flex overflow-x-auto max-w-full my-5">
				{POPULAR_FOOD.map((item: PopularFoodTypes) => (
					<Link to={`/menu/detail/${item.id}`}>
						<CardStyle
							key={item.id}
							title={item.title}
							stars={item.stars}
							price={item.price}
							image={item.image}
						/>
					</Link>
				))}
			</div>

			<div className="sm:flex justify-between items-center my-20">
				<img
					className=" sm:h-64 w-96 max-w-lg rounded-lg"
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
				{CHEF.map((item: ChefTypes) => (
					<div key={item.id} className="bg-white rounded-lg shadow-md p-4 w-96 m-5">
						<img src={item.image} alt="chefes" className="object-contain rounded-lg" />
						<h3 className="text-xl font-semibold">{item.name}</h3>
					</div>
				))}
			</div>

			<Typography variant="h2" className="text-center my-20">
				Apa kata pelanggan kami
			</Typography>
			<div className="flex overflow-x-auto max-w-full">
				{FEEDBACK.map((item: FeedbackTypes) => (
					<div key={item.id} className="max-w-sm m-5">
						<Card key={item.id} className="w-96 p-2 h-64">
							<p className="font-normal truncate-50 text-gray-700 dark:text-gray-400">
								{item.message}
							</p>
							<div className="flex">
								<img
									className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 "
									src={item.avatar}
									alt="Bordered avatar"
								/>

								<h5 className="text-2xl mx-5 font-bold tracking-tight text-gray-900 dark:text-white">
									{item.userName}
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
