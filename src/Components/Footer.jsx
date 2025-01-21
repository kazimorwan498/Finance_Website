import LogoBottom from "../assets/logo-bt.svg";

const linksA = ["Investors", "Features", "Book a demo", "Security"];
const linksB = ["Credits Cards", "Gift Cards", "Savings accounts", "NFT"];
const linksC = ["Free rewards", "Documentation", "Affiliate program"];
const linksD = ["Changelog", "License", "Site Maps", "News"];

const FootLinks = (title, links) => (
	<div className="space-y-3">
		<h5 className="font-bold">{title}</h5>

		<ul className="text-secondary text-sm space-y-2">
			{links.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</div>
);

export default function Footer() {
	return (
		<>
			<footer className="bg-[rgb(39,50,47,0.25)] backdrop-blur-sm mt-20 lg:mt-28">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-2.5 lg:gap-8 py-12 px-2.5 md:px-10 lg:px-20 xl:px-24 w-full mx-auto">
					<div className="space-y-3 col-span-1 md:col-span-2">
						<img src={LogoBottom} alt="LogoBottom" />
						<p className="font-normal text-secondary max-w-[290px]">
							Discover the power of our secure and rewarding
							credit cards
						</p>
					</div>
					{FootLinks("About us", linksA)}
					{FootLinks("Products", linksB)}
					{FootLinks("Useful Links", linksC)}
					{FootLinks("Social", linksD)}
				</div>
			</footer>
		</>
	);
}
