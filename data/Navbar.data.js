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
					isSelected: true,
					Icon: FaHome,
					label: "Home",
					slug: "",
				},
				{
					isSelected: false,
					Icon: FaEdit,
					label: "Blogs",
					slug: "",
				},
			],
		},
		{
			heading: "Me",
			hyperlinks: [
				{
					isSelected: false,
					Icon: FaBookmark,
					label: "Bookmarks",
					slug: "",
				},
				{
					isSelected: false,
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
					isExternal: true,
					isSelected: false,
					Icon: FaStickyNote,
					label: "Project 1",
					slug: "",
				},
				{
					isExternal: true,
					isSelected: false,
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
					isExternal: true,
					isSelected: false,
					Icon: FaLinkedin,
					label: "LinkedIn",
					slug: "https://www.linkedin.com/in/tarungupta2811/",
				},
				{
					isExternal: true,
					isSelected: false,
					Icon: FaGithub,
					label: "Github",
					slug: "",
				},
				{
					isExternal: true,
					isSelected: false,
					Icon: FaTwitter,
					label: "Twitter",
					slug: "",
				},
			],
		},
	],
};
