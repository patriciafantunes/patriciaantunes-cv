import { cn } from "@/lib/utils";
import { ImageLabel } from "@/components/ImageLabel";

interface ComparisonImage {
  url: string;
  alt: string;
  role: 'before' | 'after';
  variant?: 'primary' | 'default';
}

export function BeforeAndAfter({ images }: ComparisonImage[]) {
	return (
		<div className="flex justify-center items-start mt-15 mb-30">
			{images.map((image, i) =>
				<ImageLabel 
					key={i}
					className={cn(
						image.role === 'before' && "w-5/12",
						image.role === 'after' && "w-7/12",
						i % 2 !== 0 && "-ml-6 mt-5"
					)}
					label={image.role}
					variant={image.variant} >
					<img
						className={cn(
							image.role === 'before' && "w-full rounded",
							image.role === 'after' && "w-full shadow-lg rounded border-2 border-white"
						)} 
						src={image.url} 
						alt={image.alt}/>
				</ImageLabel>
			)}
		</div>
	)	
}