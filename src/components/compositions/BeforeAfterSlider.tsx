// src/components/ui/BeforeAfterSlider.tsx
'use client'; // É necessário porque este componente tem interatividade no navegador

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider';

// Definimos a estrutura de uma imagem para este componente
export interface ComparisonImageData {
  src: string;
  alt: string;
}

interface BeforeAfterSliderProps {
  beforeImage: ComparisonImageData;
  afterImage: ComparisonImageData;
  className?: string; // Para poderes adicionar margens de fora, se precisares
}

export function BeforeAfterSlider({ beforeImage, afterImage, className = "" }: BeforeAfterSliderProps) {
  

  return (
    <div className={`rounded overflow-hidden ${className}`}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImage.src} alt={beforeImage.alt} />}
        itemTwo={<ReactCompareSliderImage src={afterImage.src} alt={afterImage.alt} />}
        position={45}
        
        // Personalização da barra de arrastar (handle)
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined, 
              background: 'white',
              border: 0,
              color: '#000', // Cor das setas
              width: '40px',
              height: '40px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' 
            }}
            linesStyle={{ opacity: 0.7, backgroundColor: 'white' }} 
          />
        }
        style={{ 
          width: '100%', 
          height: 'auto',
          aspectRatio: '16/9' 
        }}
      />
    </div>
  );
}