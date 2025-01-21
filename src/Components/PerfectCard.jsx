import { Button } from "@heroui/react";
import perfectCard from "../assets/perfect-card2.svg";

export default function PerfectCard() {
	return (
		<>
			<section className="flex flex-col sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-20 lg:mt-28">
				<div className="w-full sm:w-1/2 flex items-center justify-center">
					<img
						className="max-h-[320px] sm:max-h-max"
						src={perfectCard}
						alt="Debit Card"
					/>
				</div>
				<div className="space-y-6 w-full sm:w-1/2">
					<h2 className="font-bold leading-tight text-2xl lg:text-3xl">
						Find the Perfect Card for You
					</h2>
					<p className="text-secondary text-sm lg:text-base w-full max-w-[600px]">
						Unlocking the Power of Crypto, Both Virtually and
						Physically Manage your crypto effortlessly and spend it
						seamlessly with Wern. Our virtual card allows for
						instant and secure online transactions, while the
						physical Wern Card empowers you to convert and spend
						your crypto at millions of merchants worldwide.
						Experience the flexibility and convenience of both
						options, all within the secure and user-friendly Wern
						ecosystem.
					</p>
					<Button
						variant="solid"
						color="primary"
						radius="full"
						className="px-6"
					>
						Learn More
					</Button>
				</div>
			</section>
		</>
	);
}
