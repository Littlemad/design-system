import React from "react";
import "./TypographyLayout.scss";

function Typography() {
	return (
		<>
			<div className="box-typography">
				<div className="box-typography__select-font">
					Select the font that you want to visualize:
					<select className="box-typography__select-input">
						<option>choose font</option>
					</select>
				</div>
				<div className="box box-headings">
					<h2 className="h2 bold box__title">Headings</h2>

					<div className="box-headings__titles">
						<div className="cols">
							<div className="col col1">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
							<div className="col col2 bold">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
							<div className="col col3 italic">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="box box-pragraphs">
					<h2 className="h2 bold box__title">Font size</h2>
					<div className="cols">
						<div className="col col1">
							<h3 className="h4 box__title">Size 16px - Line height 20px</h3>
							<p className="regular">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="bold">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="italic">The quick brown fox jumps over the lazy dog 0123456789</p>
						</div>
						<div className="col col2">
							<h3 className="h4 box__title">Size 24px - Line height 28px</h3>
							<p className="regular">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="bold">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="italic">The quick brown fox jumps over the lazy dog 0123456789</p>
						</div>
						<div className="col col3">
							<h3 className="h4 box__title">Size 32px - Line height 36px</h3>
							<p className="regular">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="bold">The quick brown fox jumps over the lazy dog 0123456789</p>
							<p className="italic">The quick brown fox jumps over the lazy dog 0123456789</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Typography;
