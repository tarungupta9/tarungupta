import React from 'react';

export type ModalTypes = {
	show: boolean;
	onClose: Function,
	children: React.ReactNode;
	title?: string;
	footer?: string;
};