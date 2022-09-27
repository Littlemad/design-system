import React, {useEffect} from "react";
import IconPath from "../../../assets/svg/icons.svg";
import dataJSON from "../../../data/data.json";

const iconsJSON = dataJSON.icons;

/*
 const filteredList = iconsJSON.filter((e) => e.name === "home");
 */

const IconList = () => {
	/*
	useEffect(() => {
		console.log({filteredList});
	});
*/
	return (
		<>
			<ul className="box-iconlist">
				{iconsJSON.map((icons) => (
					<li className="box-iconlist_li" key={icons.name}>
						<h4 className="h4 box-iconlist_label">{icons.name}</h4>
						<svg
							className={`icon icon-${icons.name} icon--size-l`}
							role="img"
							aria-label={icons.desc}
							key={icons.name}
						>
							<use xlinkHref={`${IconPath}#${icons.name}`} />
						</svg>
					</li>
				))}
			</ul>
		</>
	);
};

export default IconList;
