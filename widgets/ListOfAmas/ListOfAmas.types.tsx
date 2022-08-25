import React from "react";

export type AmaType = {
	id: string;
	query: string;
	userName: string;
	userEmail: string;
	userImage: string;
	createdAt: string;
};

export type ListOfAmasType = {
	amas: AmaType[];
};
