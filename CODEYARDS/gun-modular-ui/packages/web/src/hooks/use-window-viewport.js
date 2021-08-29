import { useWindowDimensions } from 'elemental-react';

const useWindowViewport = () => {
  const dimensions = useWindowDimensions();

  if (typeof window === 'undefined') {
    return dimensions;
  }

  const widths = [window.innerWidth];
  const heights = [window.innerHeight];

  if (window.screen?.width) {
    widths.push(window.screen?.width);
    heights.push(window.screen?.height);
  }

  const width = Math.min(...widths);
  const height = Math.min(...heights);

  return { ...dimensions, width, height };
}

export default useWindowViewport;
