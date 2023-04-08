export interface PopularFoodTypes {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
	stars: number;
}

export const POPULAR_FOOD: PopularFoodTypes[] = [
	{
		id: 1,
		title: "Kraby Paty",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fcocacola.png?alt=media&token=d73ad07b-efa6-41d9-b0dd-8c034f98493b",
		stars: 4,
		description: "Kraby Paty istimewa dengan bumbu khas nusantara.",
		price: 35000,
	},
	{
		id: 2,
		title: "Nasi Goreng",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-goreng.jpg?alt=media&token=7fd6994e-3f88-4726-aa8d-16db5e325c49",
		stars: 4,
		description: "Nasi goreng istimewa dengan bumbu khas nusantara.",
		price: 30000,
	},
	{
		id: 3,
		title: "Sate Ayam",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fsate-ayam.jpg?alt=media&token=b730e90d-f962-40a3-97f8-235261d205e9",
		stars: 4,
		description: "Sate ayam lezat dengan bumbu kacang yang khas.",
		price: 10000,
	},
	{
		id: 4,
		title: "Rendang",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Frendang.jpg?alt=media&token=c3a3cb54-f0d0-4a00-a5d1-dc55b6d35cf4",
		stars: 5,
		description: "Rendang daging sapi empuk dengan rempah pilihan.",
		price: 45000,
	},
	{
		id: 5,
		title: "Gado-Gado",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fgado-gado-khas-betawi-foto-resep-utama.webp?alt=media&token=13d3f2d3-2339-460a-bae3-46eb8ab90952",
		stars: 3,
		description: "Gado-gado segar dengan saus kacang yang lezat.",
		price: 25000,
	},
	{
		id: 6,
		title: "Nasi Ayam",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-ayam.png?alt=media&token=1fc29f1d-d79e-4b8f-8c4b-529cacf5b394",
		stars: 4,
		description: "Nasi ayam hangat dengan aroma bercita rasa khas.",
		price: 15000,
	},
];
