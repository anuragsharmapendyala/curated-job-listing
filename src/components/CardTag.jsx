import React from "react";
import styles from "./CardTag.module.css";
const CardTag = ({ cardText }) => {
	return (
		<span
			className={[
				styles.CardTag,
				cardText === "New!" ? styles.CardTag_New : styles.CardTag_Featured,
			].join(" ")}
		>
			{cardText}
		</span>
	);
};

export default CardTag;
