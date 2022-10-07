import React from "react";

const InjectRootCSS = (props) => {
	const varPrefix = props.varPrefix;

	const injectVariables = () => {
		const injection = props.data.map((inject) => `${varPrefix}${inject.var}:${inject.value};`).join("");

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
