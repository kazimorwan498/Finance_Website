import { Button } from "@heroui/react";
import RightArrow from "./RightArrow";
import debitCard from "../assets/debit-card2.svg";

export default function DebitCard() {
	return (
		<>
			<section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-20 lg:mt-28">
				<div className="space-y-6 w-full sm:w-1/2">
					<h2 className="font-bold leading-tight text-2xl lg:text-3xl">
						Wern Debit Card
					</h2>
					<p className="text-secondary text-sm lg:text-base w-full max-w-[420px]">
						More than just a card, it&apos;s a bridge to a new
						financial experience. Embrace the simplicity and
						security of spending your Cardano with the Wern Card.
					</p>
					<div className="space-y-2">
						<Button
							variant="solid"
							color="primary"
							radius="full"
							endContent={<RightArrow />}
							size="lg"
						>
							Create New Card
						</Button>
						<p className="text-primary font-bold ms-2 text-base">
							Will be available soon
						</p>
					</div>
				</div>
				<div className="w-full sm:w-1/2 flex items-center justify-center">
					<img
						className="max-h-[320px] sm:max-h-max"
						src={debitCard}
						alt="Debit Card"
					/>
				</div>
			</section>
		</>
	);
}
