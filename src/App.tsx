// data
import { data } from "./data.js";

// components
import Question from "./components/Question.js";
import { useState } from "react";

function App() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<main className="flex items-center justify-center h-screen bg-gradient-to-b from-gradient-softViolet to-gradient-softBlue">
			<div className="flex items-center md:flex-row w-[350px] h-auto bg-white rounded-3xl drop-shadow-2xl md:w-[923px] md:h-[508px] flex-col">
				<div className="relative">
					<img
						src="/images/illustration-woman-online-mobile.svg"
						alt=""
						className="absolute -top-[100%] md:hidden"
					/>
					<div className="md:overflow-hidden">
						<img
							src="/images/illustration-woman-online-desktop.svg"
							alt=""
							className="relative hidden md:block -left-20 "
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							src="/images/bg-pattern-mobile.svg"
							alt=""
							className="md:hidden"
						/>
						<img
							src="/images/bg-pattern-desktop.svg"
							alt=""
							className="absolute top-[1%] hidden right-[25%] md:block"
						/>
					</div>
				</div>
				<div className="flex flex-col md:ml-0">
					<h1 className="flex items-center justify-center py-8 text-4xl font-bold md:ml-6 md:justify-start font-kumbhSans text-primary-veryDarkDesaturatedBlue">
						FAQ
					</h1>
					<section className="pb-10">
						{data.map((item, index) => (
							<Question
								isOpen={index === openIndex}
								onClick={() => handleToggle(index)}
								key={item.id}
								item={item}
							/>
						))}
					</section>
				</div>
			</div>
		</main>
	);
}

export default App;
