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
		description:
			"Nikmati cita rasa unik Kraby Paty yang akan memanjakan lidah Anda. Dari saus khas yang lezat hingga paduan bumbu rahasia yang membuat setiap hidangan kami begitu istimewa. Tersedia pilihan level kepedasan yang dapat disesuaikan, dari yang ringan hingga yang ekstra pedas, untuk memuaskan selera Anda.Selain hidangan utama, Kraby Paty juga menawarkan hidangan pendamping seperti kentang goreng renyah, salad segar, dan roti lezat untuk melengkapi pengalaman makan Anda. Nikmati hidangan lezat kami bersama keluarga, teman, atau rekan kerja Anda.",
		price: 35000,
	},
	{
		id: 2,
		title: "Nasi Goreng",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-goreng.jpg?alt=media&token=7fd6994e-3f88-4726-aa8d-16db5e325c49",
		stars: 4,
		description:
			"Nasi goreng istimewa dengan bumbu khas nusantara.Selain rasa yang lezat, nasi goreng kami juga dihidangkan dengan tampilan yang menggoda mata. Dengan hiasan yang indah, nasi goreng kami menjadi hidangan yang menggugah selera dan siap memanjakan seluruh indera Anda. Kami bangga menggunakan bahan-bahan segar dan berkualitas dalam setiap hidangan nasi goreng kami. Dibuat dengan cinta dan dedikasi, nasi goreng Nusantara kami dijamin memuaskan selera Anda dan memberikan pengalaman makan yang tak terlupakan.",
		price: 30000,
	},
	{
		id: 3,
		title: "Sate Ayam",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fsate-ayam.jpg?alt=media&token=b730e90d-f962-40a3-97f8-235261d205e9",
		stars: 4,
		description:
			"Sate ayam kami dibuat dari daging ayam pilihan yang dipotong kecil-kecil dan ditusukkan pada tusuk sate, kemudian dipanggang dengan arang untuk memberikan aroma dan rasa yang khas. Daging ayam kami diolah dengan bumbu rempah yang kaya, yang membuat sate ayam kami memiliki cita rasa yang unik dan menggugah selera. Kami juga menggunakan bumbu kacang khas dalam saus sate kami, yang memberikan rasa gurih, manis, dan sedikit pedas yang sempurna. Sate ayam kami dihidangkan dengan nasi atau lontong, dan disajikan dengan irisan bawang merah, timun, dan kerupuk sebagai pelengkap.",
		price: 10000,
	},
	{
		id: 4,
		title: "Rendang",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Frendang.jpg?alt=media&token=c3a3cb54-f0d0-4a00-a5d1-dc55b6d35cf4",
		stars: 5,
		description:
			"Rendang kami dibuat dari potongan daging sapi pilihan yang dimasak dalam campuran rempah-rempah khas Indonesia yang kaya, seperti serai, daun salam, lengkuas, cabai, dan banyak lagi. Proses memasak rendang kami dilakukan dengan hati-hati selama berjam-jam, sehingga daging sapi kami menjadi sangat empuk dan bumbu meresap hingga ke dalam setiap serat daging. Hasilnya adalah rendang dengan cita rasa yang kompleks, gurih, dan lezat. Daging sapi yang juicy dan bumbu yang kaya akan menggoyang lidah Anda dan membuat Anda ketagihan untuk mencicipi lebih banyak lagi",
		price: 45000,
	},
	{
		id: 5,
		title: "Gado-Gado",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fgado-gado-khas-betawi-foto-resep-utama.webp?alt=media&token=13d3f2d3-2339-460a-bae3-46eb8ab90952",
		stars: 3,
		description:
			"Gado-gado kami terbuat dari beragam sayuran segar, seperti kubis, mentimun, tauge, wortel, kentang, dan daun selada, yang diolah dengan hati-hati untuk mempertahankan kandungan nutrisi yang tinggi. Selain itu, kami juga menggunakan tahu, tempe, dan telur rebus sebagai sumber protein nabati yang berkualitas tinggi dalam hidangan gado-gado kami. Saus kacang khas gado-gado kami dihasilkan dari bumbu kacang alami yang dihaluskan dan dicampur dengan bahan-bahan lain seperti gula merah, air asam, dan cabai, yang memberikan cita rasa gurih, manis, dan sedikit pedas yang khas. Saus kacang ini menjadi sajian utama dalam gado-gado kami yang memberikan kenikmatan tersendiri dalam setiap suapan.",
		price: 25000,
	},
	{
		id: 6,
		title: "Nasi Ayam",
		image: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-ayam.png?alt=media&token=1fc29f1d-d79e-4b8f-8c4b-529cacf5b394",
		stars: 4,
		description:
			"Nasi Ayam kami terbuat dari bahan-bahan pilihan yang segar dan berkualitas tinggi. Ayam yang kami gunakan diolah dengan rempah-rempah khas, seperti jahe, bawang putih, ketumbar, dan serai, yang memberikan cita rasa unik dan nikmat pada ayam yang kami sajikan. Ayam kami dimasak dengan teknik yang tepat untuk menghasilkan daging yang lezat, empuk, dan penuh dengan aroma rempah-rempah yang menggoda selera. Nasi yang kami gunakan juga diolah dengan hati-hati, menghasilkan nasi yang pulen, harum, dan gurih. Nasi ayam kami biasanya disajikan bersama lauk pelengkap seperti telur rebus, sayuran hijau, dan acar, yang memberikan tambahan nutrisi dan rasa yang beragam dalam satu hidangan.",
		price: 15000,
	},
];
