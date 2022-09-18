import { AlertProps } from "@components/Snackbar/Snackbar.types";
import { createContext } from "react";

type DispatchType = (alert: AlertProps) => void;

export default createContext<DispatchType>(undefined);
