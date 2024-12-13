import { classNames } from "primereact/utils";


export default function Required() {
	return <span className={classNames("text-red-500")}>*</span>;
}