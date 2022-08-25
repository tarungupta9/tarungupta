const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function beautifyDate(isoDate) {
	const parsedDate = new Date(isoDate);

	return [
		monthNames[parsedDate.getMonth()],
		parsedDate.getDate(),
		parsedDate.getFullYear(),
	].join(" ");
}
