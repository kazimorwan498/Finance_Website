import Quote from "../assets/quote.svg";
import Person1 from "../assets/person-1.svg";
import Person2 from "../assets/person-2.svg";
import Person3 from "../assets/person-3.svg";

export default function Feedback() {
	const UserData = [
		{
			id: 1,
			review: `"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."`,
			img: Person1,
			name: "Hadid Khan",
			designation: "UI/UX Designer",
		},
		{
			id: 2,
			review: `"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`,
			img: Person2,
			name: "Wade Warren",
			designation: "Web Designer",
		},
		{
			id: 3,
			review: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."`,
			img: Person3,
			name: "Jenny Wilson",
			designation: "Trust Administrator",
		},
	];

	return (
		<>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 lg:mt-28">
				{UserData.map((item, index) => (
					<div
						key={index.id}
						className="space-y-8 bg-[rgb(39,50,47,0.25)] border-2 border-[rgb(39,50,47)] backdrop-blur-sm px-6 py-6 sm:py-14 rounded-2xl shadow-md"
					>
						<div className="bg-[rgb(61,63,84)] flex items-center justify-center max-h-14 max-w-14 min-h-14 min-w-14 rounded-full size-14">
							<img src={Quote} alt="quote.svg" />
						</div>
						<p>{item.review}</p>
						<div className="flex gap-3 items-center">
							<img
								className="size-12"
								src={item.img}
								alt={`Person-${item.id}`}
							/>
							<div>
								<h5 className="text-base font-medium leading-tight mb-[-3px]">
									{item.name}
								</h5>
								<span className="text-xs font-light text-secondary">
									{item.designation}
								</span>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}
