import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
	{
		id: 1,
		text: "home",
		url: "/",
	},
	{
		id: 2,
		text: "about",
		url: "/about",
	},
	{
		id: 3,
		text: "products",
		url: "/products",
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: "mission",
		text: "We want to fill all homes with high quality wooden furniture, thus encouraging the adoption of wood as a viable and richer alternative to home furniture.",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: "vision",
		text: "Our aim is to play our part in the preservation of the planet by replacing toxic materials in home decor with more organic and eco-friendly alternatives.",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "history",
		text: "Originating from a family of traditional wood workers. We bring the skill and experience of a hundred years in our craft, business and customer relations. ",
	},
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
