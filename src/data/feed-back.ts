export interface FeedbackTypes {
	id: number;
	userName: string;
	message: string;
	avatar: string;
}

export const FEEDBACK: FeedbackTypes[] = [
	{
		id: 11,
		message:
			"Saya sangat terkesan dengan kualitas hidangan di Restoran ini! Rasanya luar biasa dan presentasinya sangat menarik. Layanan dari staf juga sangat ramah dan profesional. Saya pasti akan kembali lagi!",
		userName: "Sarah",
		avatar: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1438761681033-6461ffad8d80.avif?alt=media&token=8875e8a7-6a50-45d5-a7b6-e1729ea4b185",
	},

	{
		id: 2,
		userName: "David",
		message:
			"Tempat yang sangat nyaman dan suasana yang menyenangkan. Saya sangat menyukai hidangan mereka, terutama daging panggangnya yang juicy dan empuk. Pelayanan staf juga sangat baik. Sangat direkomendasikan!",
		avatar: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1547425260-76bcadfb4f2c.avif?alt=media&token=56ece1d3-a914-4cc0-8182-aa18c0690cda",
	},
	{
		id: 3,
		userName: "Anisa",
		message:
			"Restoran ini benar-benar memanjakan lidah saya! Hidangan yang dihidangkan sangat enak dan bergizi. Saya juga suka tampilan presentasinya yang cantik. Pelayanan ramah dan cepat membuat pengalaman makan saya sangat menyenangkan",
		avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
	},
	{
		id: 4,
		userName: "Meta",
		message:
			"Restoran ini adalah tempat favorit saya untuk bersantap. Hidangan yang mereka sajikan selalu segar, berkualitas tinggi, dan memiliki rasa yang otentik.",
		avatar: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fpexels-photo-220453.webp?alt=media&token=d831385d-4d73-4bf0-aef9-0cec078949ff",
	},
	{
		id: 5,
		userName: "Melia",
		message:
			"Pelayanannya sangat ramah dan cepat. Makanannya enak dan disajikan dengan indah. Saya pasti akan kembali lagi!",
		avatar: "https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1554151228-14d9def656e4.avif?alt=media&token=8a9f2d9e-b1fc-45f3-b09f-4735965be9c7",
	},
];
