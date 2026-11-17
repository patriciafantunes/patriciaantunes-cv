import { cn } from "@/lib/utils";

interface ImageLabelProps {
	variant?: 'primary' | 'default';
	label: string;
	className?: string;
	children: React.ReactNode;
}

export function ImageLabel({ 
  variant = 'default', 
  label, 
  className, 
  children 
}: ImageLabelProps) {


	return (
		<div 
			data-label={label}
			className={cn(
				"relative inline-block before:content-[attr(data-label)] before:w-fit before:h-fit before:p-1 before:absolute before:-bottom-1 before:-left-1 before:block before:-skew-y-3 before:uppercase before:font-bold before:text-xs",
				variant === 'default' && "before:bg-stone-900 before:text-white",
				variant === 'primary' && "before:bg-amber-600 before:text-slate-50",
				className

			)}>
			{ children }
		</div>
	)
}