
interface colorPaletteProps {
	colors: string[];
}

export function ColorPalette({colors}: colorPaletteProps) {
	return(
		<div className="flex justify-center gap-x-5 mt-15 mb-35">
			{colors.map((color, i) => (
				<div key={i}
					style={{ backgroundColor: color }}
					className="bg-[${color}] w-15 h-15 rounded-full"
					title={color}></div>
			))}

		</div>
	)
}