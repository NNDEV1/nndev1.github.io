declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mov' {
  const value: string;
  export default value;
}

// Vanta.js declarations
declare module 'vanta/dist/vanta.trunk.min' {
  interface VantaEffect {
    destroy(): void;
  }

  interface TrunkOptions {
    el?: string | HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    chaos?: number;
    color?: string;
    THREE?: any;
  }

  function TRUNK(options: TrunkOptions): VantaEffect;
  export default TRUNK;
}

declare module 'vanta/dist/vanta.waves.min' {
  interface VantaEffect {
    destroy(): void;
  }

  interface WavesOptions {
    el?: string | HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
    THREE?: any;
  }

  function WAVES(options: WavesOptions): VantaEffect;
  export default WAVES;
}

declare module 'vanta/dist/vanta.dots.min' {
  interface VantaEffect {
    destroy(): void;
  }

  interface DotsOptions {
    el?: string | HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    size?: number;
    spacing?: number;
    showLines?: boolean;
  }

  function DOTS(options: DotsOptions): VantaEffect;
  export default DOTS;
}

declare module 'vanta/dist/vanta.birds.min' {
  interface VantaEffect {
    destroy(): void;
  }

  interface BirdsOptions {
    el?: string | HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    quantity?: number;
    wingSpan?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    avoid?: number;
    bounce?: number;
    speed?: number;
    turbulence?: number;
    colorMode?: string;
    backgroundAlpha?: number;
    birdSize?: number;
    birdSpeed?: number;
    birdBounce?: number;
  }

  function BIRDS(options: BirdsOptions): VantaEffect;
  export default BIRDS;
} 