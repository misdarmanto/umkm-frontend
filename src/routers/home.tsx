import { Carousel } from "flowbite-react";

const Home = () => {
	return (
		<>
			<div className="sm:flex justify-between">
				{[1, 2].map((item: any) => (
					<div key={item} className="p-5 h-64 sm:w-full md:w-64 bg-teal-500 m-2">
						{item}
					</div>
				))}
			</div>

			<div className="flex overflow-x-auto max-w-full p-4">
				{[1, 2, 3, 4].map((item: any) => (
					<div key={item} className="p-5 h-64 w-64 bg-purple-500 m-2">
						{item}
					</div>
				))}
			</div>

			<div className="sm:flex justify-between">
				{[1, 2].map((item: any) => (
					<div key={item} className="p-5 h-64 sm:w-full md:w-64 bg-amber-500 m-2">
						{item}
					</div>
				))}
			</div>

			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<Carousel>
					<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
						Slide 1
					</div>
					<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
						Slide 2
					</div>
					<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
						Slide 3
					</div>
				</Carousel>
			</div>

			<div className="sm:flex justify-between flex-wrap">
				{[1, 2, 3, 4, 5, 6].map((item: any) => (
					<div key={item} className="p-5 h-64 sm:w-full md:w-64 bg-blue-500 m-2">
						{item}
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
