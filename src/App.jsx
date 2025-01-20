import "./App.css";
import Hero from "./Components/Hero";
import NavbarArea from "./Components/Navbar";
import Offer from "./Components/Offer";
import Vision from "./Components/Vision";

function App() {
	return (
		<>
			<main className="overflow-x-hidden">
				<NavbarArea />
				<div className="w-full max-w-screen-2xl px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5">
					<Hero />
					<Vision />
					<Offer />
				</div>
			</main>
		</>
	);
}

export default App;
