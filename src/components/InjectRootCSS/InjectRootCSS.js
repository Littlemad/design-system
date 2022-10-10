import React from "react";

const InjectRootCSS = (props) => {
	const injectVariables = () => {
		const varPrefix = props.varPrefix;
		let themeDark = "";
		let themeLight = "";

		const injection = props.data
			.map(function (inject) {
				if (inject.themeDark) {
					themeDark = `${varPrefix}dark-${inject.var}:${inject.themeDark};`;
					console.log(themeDark);
				}
				themeLight = `${varPrefix}${inject.var}:${inject.value};`;

				const themes = `${themeLight}${themeDark}`;

				themeDark = "";
				themeLight = "";

				return themes;
			})
			.join("");
		return injection;
	};

	const injectCSS = `:root{${injectVariables()}}`;

	return (
		<>
			<style>{injectCSS}</style>
		</>
	);
};

export default InjectRootCSS;
