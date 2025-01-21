import { Accordion, AccordionItem } from "@heroui/react";

export default function FAQ() {
	const AccordionData = [
		{
			que: "What credit score do I need to apply for a credit card?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: " How can I apply for a credit card online?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: "Are there any annual fees associated with the credit card?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: "How long does it take to receive the credit card once approved?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: " How can I check my credit card balance and transactions?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: " What should I do if my credit card is lost or stolen?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
		{
			que: "Is my credit card information secure?",
			ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
		},
	];

	return (
		<>
			<section className="flex flex-col gap-10 lg:gap-2.5 xl:gap-8 mt-20 lg:mt-28">
				<h2 className="font-bold leading-tight text-2xl lg:text-3xl">
					FAQs
				</h2>

				<Accordion>
					{AccordionData.map((item, index) => (
						<AccordionItem
							key={index}
							aria-label={item.que}
							title={item.que}
							className="border-b-2 border-white font-bold"
						>
							<span className="text-secondary font-normal">
								{item.ans}
							</span>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</>
	);
}
