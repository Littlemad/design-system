import React from "react";
import ColorBox from "../../components/elements/colorbox/ColorBox";

import "./ColorsLayout.scss";

function Colors() {
	return (
		<div className="box-palette">
			- Need to organise this layout
			<br />
			- Need to create a custom SASS function to assign depending on classnames background, border
			or text color based on the colorVariables
			<br />
			- Investigate theming
			<br />
			- Add interchangable greys basic colors
			<br />
			- Review naming system and organization of files
			<br />
			- Add font values as we did with colors that can be injected directly as var properties, so
			create a custom injectRootCSS
			<br />
			<ColorBox color="primary" />
			<ColorBox color="primary-l1" />
			<ColorBox color="primary-l2" />
			<ColorBox color="primary-d1" />
			<ColorBox color="primary-d2" />
		</div>
	);
}

export default Colors;
