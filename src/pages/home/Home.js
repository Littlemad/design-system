import React from "react";
import "./HomeLayout.scss";

function Home() {
	return (
		<>
			<div className="box-presentation">
				<div className="box-presentation__txt">
					<p>A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.</p>
				</div>

				<div className="box">
					<h2 className="h3 box__title">References</h2>
					<ul className="list">
						<li className="list__li">
							<a href="https://www.bbc.co.uk/gel">BBC GEL (Global Experience Language)</a>
						</li>
						<li className="list__li">
							<a href="https://styleguide.mailchimp.com/voice-and-tone/">Mailchimp Voice &amp; Tone</a>
						</li>
					</ul>
				</div>
			</div>
			- Create another way to INJECT multiple CSS at root for variables (so that we don't duplicate root: value) FIX LOADING TYPOGRAPHY by the VARIABLE
			<br />
			- add my flexible column system
			<br />
			- Investigate theming
			<br />
			- Review naming system and organization of files
			<br />
		</>
	);
}

export default Home;
