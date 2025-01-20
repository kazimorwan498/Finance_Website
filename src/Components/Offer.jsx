import Dollar from "../assets/dollar.svg";
import Ramp from "../assets/ramp.svg";
import Solution from "../assets/solution.svg";

export default function Offer() {
	const OfferList = [
		{
			img: Dollar,
			title: "Cardano Debit-Cards",
			des: "Cardano, simplified. The debit card that makes crypto spending easy.",
		},
		{
			img: Ramp,
			title: "On & Off Ramp",
			des: "Fiat meets crypto, effortlessly buy, sell, and manage.",
		},
		{
			img: Solution,
			title: "Solutions for business",
			des: "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
		},
	];

	return (
		<>
			<section className="space-y-12 mt-5 lg:mt-20">
				<h2 className="font-bold leading-tight text-center text-2xl lg:text-3xl">
					What do we offer?
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{OfferList.map((item, index) => (
						<div key={index} className="flex gap-4">
							<div className="bg-[rgb(61,63,84)] flex items-center justify-center max-h-14 max-w-14 min-h-14 min-w-14 rounded-3xl size-14">
								<img className="size-6" src={item.img} alt={item.img} />
							</div>
							<div>
								<h4 className="text-lg font-medium">
									{item.title}
								</h4>
								<p className="text-secondary text-sm">
									{item.des}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
