import React from "react";
import styles from "./Skill.module.css";
const Skill = ({ skill }) => {
	return <span className={styles.skill}>{skill}</span>;
};

export default Skill;
