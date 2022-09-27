// WRITE ONLY HIGLIGHTED CODE

const SVGList1 = `<SvgIconList grid size="l" />`;
const SVGList2 = `<SvgIconList />`;

const SingleIcon1 = `{
"icons": [
	{"name": "arrow", "desc": "An arrow indicating a direction"},
	{"name": "home", "desc": "An home icon"},
	{"name": "pencil", "desc": "Pencil indicating editing"},
]
}
`;

const SingleIcon2 = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<symbol id="home" viewBox="0 0 32 32">
	<path d="M32 18.451 16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"/>
</symbol>
<symbol id="checkmark" viewBox="0 0 32 32"><path d="M27 4 12 19l-7-7-5 5 12 12L32 9z"/></symbol>
</svg>`;

const SingleIcon3 = `const iconsJSON = dataJSON.icons; // include of icon listing

const Icon = ({name, color, size}) => (
return iconsJSON.map((icons) => (
	<svg className={\`icon icon-\${icons.name}\`} key={icons.name}>
		<use xlinkHref={\`\${IconPath}#\${name}\`} />
	</svg>
);
};
`;

const SingleIcon4 = `<Icon name="home" size="l" />`;
const SingleIcon5 = `<Icon name="home" size="l" label="Custom description" />`;

export {SingleIcon1, SingleIcon2, SingleIcon3, SingleIcon4, SingleIcon5, SVGList1, SVGList2};
