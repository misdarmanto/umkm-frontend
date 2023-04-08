import { Avatar, Card, Carousel } from "flowbite-react";
import ImageBanner from "../assets/banner1.png";
import ImageVegtable from "../assets/banner2.png";
import ImageFood from "../assets/nasigoreng.png";
import Typography from "../components/typography";
import CardStyle from "../components/card";

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
				Menu Pupular
			</Typography>
			<div className="flex overflow-x-auto max-w-full my-5">
				{[1, 2, 3, 4, 5, 6, 7].map((item: any) => (
					<CardStyle key={item} title="hello" price={item * 100} image={ImageFood} />
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
				Apa kata pelanggan kami
			</Typography>
			<div className="flex overflow-x-auto max-w-full">
				{[1, 2, 3, 4, 5].map((item: any) => (
					<div className="max-w-sm">
						<Card key={item} className="w-64 m-5 p-2">
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in
								reverse chronological order.
							</p>
							<div className="flex">
								<Avatar
									img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									rounded={true}
								/>
								<h5 className="text-2xl mx-5 font-bold tracking-tight text-gray-900 dark:text-white">
									Jarwo
								</h5>
							</div>
						</Card>
					</div>
				))}
			</div>

			<Typography variant="h2" className="text-center my-20">
				Cheif Kami
			</Typography>
			<div className="flex overflow-x-auto max-w-full">
				{[1, 2, 3, 4, 5].map((item: any) => (
					<div className="max-w-sm">
						<Card key={item} className="w-64 m-5 p-2">
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in
								reverse chronological order.
							</p>
							<div className="flex">
								<Avatar
									img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									rounded={true}
								/>
								<h5 className="text-2xl mx-5 font-bold tracking-tight text-gray-900 dark:text-white">
									Jarwo
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
