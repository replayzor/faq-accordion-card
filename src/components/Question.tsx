import { useState, useEffect } from "react";

type QuestionProps = {
	item: {
		id: string;
		question: string;
		answer: string;
	};
	isOpen: boolean;
	onClick: () => void;
};

function Question({ item, isOpen, onClick }: QuestionProps) {
	const [showAnswer, setShowAnswer] = useState(isOpen);

	const { question, answer } = item;

	useEffect(() => {
		setShowAnswer(isOpen);
	}, [isOpen]);

	const toggleAnswer = () => {
		setShowAnswer((prev) => !prev);
		onClick();
	};

	return (
		<div className="flex flex-col md:w-[400px] px-7">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={toggleAnswer}
			>
				<h1
					className={`hover:text-primary-softRed text-sm ${
						isOpen
							? "text-primary-veryDarkDesaturatedBlue font-kumbhSans font-bold"
							: "text-neutral-veryDarkGrayishBlue"
					} `}
				>
					{question}
				</h1>
				<button className="ml-8">
					<img src="/images/icon-arrow-down.svg" alt="" />
				</button>
			</div>
			{showAnswer && (
				<p className="pt-3 text-xs text-neutral-darkGrayishBlue font-kumbhSans">
					{answer}
				</p>
			)}
			<hr className="mt-4 mb-4 border border-solid border-divider-lightGrayishBlue" />
		</div>
	);
}

export default Question;
