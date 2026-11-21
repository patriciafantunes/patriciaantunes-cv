import { ColorPalette } from "@/components/compositions/ColorPalette";
import { BotecoSymbol } from "@/components/compositions/BotecoSymbol";
import { BeforeAndAfter } from "@/components/compositions/BeforeAndAfter";
import { BeforeAfterSlider } from "@/components/compositions/BeforeAfterSlider";
import Image from "next/image";

const COMPOSITIONS = {
  colorPalette: ColorPalette,
  botecoSymbol: BotecoSymbol,
  beforeAndAfter: BeforeAndAfter,
  beforeAfterSlider: BeforeAfterSlider
};

export interface WorkSectionProps {
	title: string;
	intro?: string;
	text?: string[];
	sections?: {
		title?: string;
		intro?: string;
		text?: string[];
		image?: {
			url: string;
			alt: string;
		};
		composition?: keyof typeof COMPOSITIONS;
		compositionProps?: any;
	}[];
}

export function WorkSection({title, intro, text, sections}: WorkSectionProps) {
	return (
		<>
			<div className="mt-20">
				<p className="text-4xl w-fit -rotate-4 mb-6 py-2 bg-white">
					<span className="bg-white px-2 py-2 mix-blend-difference font-bold">{title}</span>
				</p>
				<div className="md:ml-14">
					<p className="text-2xl font-bold mb-2">{intro}</p>
					{text?.map((paragraph, i) => (
						<p key={i} className="mb-2">{paragraph}</p>
					))}

					{sections?.map((section, i) => {

						const Component = section.composition ? COMPOSITIONS[section.composition] : null;

						return (
						<div key={i}>
							<p className="text-4xl font-bold mt-12 mb-4 font-title italic ">{section.title}</p>
							<p className="text-2xl font-bold mb-2">{section.intro}</p>
							{section.text?.map((paragraph, i) => (
								<p key={i} className="mb-2">{paragraph}</p>
							))}
							{section.image && <Image width={320} height={130} className="m-auto mt-15 mb-40 w-80" src={section.image.url} alt={section.image.alt} />}

							
							{Component && (
							  <Component {...section.compositionProps} />
							)}
						</div>
					)})}

				</div>
			</div>
		</>
	)
}