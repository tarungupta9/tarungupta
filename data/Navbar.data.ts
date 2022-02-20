import {
	FaHome,
	FaEdit,
	FaBookmark,
	FaStickyNote,
	FaLinkedin,
	FaGithub,
	FaTwitter,
} from "react-icons/fa";
import { BsFillChatLeftFill } from "react-icons/bs";

export default {
	brandName: "Tarun Gupta",
	listings: [
		{
			hyperlinks: [
				{
					id: "home",
					Icon: FaHome,
					label: "Home",
					slug: "/",
				},
				{
					id: "blogs",
					Icon: FaEdit,
					label: "Blogs",
					slug: "/blogs",
				},
			],
		},
		{
			heading: "Me",
			hyperlinks: [
				{
					id: "bookmarks",
					Icon: FaBookmark,
					label: "Bookmarks",
					slug: "",
				},
				{
					id: "ama",
					Icon: BsFillChatLeftFill,
					label: "AMA",
					slug: "",
				},
			],
		},
		{
			heading: "Projects",
			hyperlinks: [
				{
					id: "project1",
					isExternal: true,
					Icon: FaStickyNote,
					label: "Project 1",
					slug: "",
				},
				{
					id: "project2",
					isExternal: true,
					Icon: FaStickyNote,
					label: "Project 2",
					slug: "",
				},
			],
		},
		{
			heading: "Online",
			hyperlinks: [
				{
					id: "linkedin",
					isExternal: true,
					Icon: FaLinkedin,
					label: "LinkedIn",
					slug: "https://www.linkedin.com/in/tarungupta2811/",
				},
				{
					id: "github",
					isExternal: true,
					Icon: FaGithub,
					label: "Github",
					slug: "https://github.com/tarungupta9",
				},
				{
					id: "twitter",
					isExternal: true,
					Icon: FaTwitter,
					label: "Twitter",
					slug: "https://twitter.com/tarun_gupta7",
				},
			],
		},
	],
};
