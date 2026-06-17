import React from "react";
import styles from "./Card.module.css";
import CardTag from "./CardTag";
import Skill from "./Skill";

const Card = ({
	logo,
	company,
	new: newFlag,
	featured,
	position,
	postedAt,
	contract,
	location,
	role,
	level,
	languages,
}) => {
	return (
		<div className={styles.Card}>
			<div className="Card_Image">
				<img
					src={logo}
					alt={company}
				/>
			</div>
			<div className={styles.Card_CompanyInfo}>
				<div className={styles.Card_header_wrapper}>
					<p className={styles.Card_CompanyInfo_name}>{company}</p>
					{newFlag && <CardTag cardText={"New!"} />}
					{featured && <CardTag cardText={"Featured"} />}
				</div>
				<h2 className={styles.Card_CompanyInfo_position}>{position}</h2>
				<div className={styles.Card_position_info}>
					<span>{postedAt}</span>

					<span>{contract}</span>
					<span>{location}</span>
				</div>
			</div>
			<div className={styles.Card_skills}>
				<Skill skill={role} />
				<Skill skill={level} />
				{languages.map((skill) => (
					<Skill skill={skill} />
				))}
			</div>
		</div>
	);
};

export default Card;
