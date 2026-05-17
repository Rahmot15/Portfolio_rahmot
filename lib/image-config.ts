/**
 * Image optimization configuration and utilities
 * Provides consistent image sizing, quality, and performance settings
 */

export const IMAGE_SIZES = {
  // Responsive sizes for different breakpoints
  heroImage: {
    sm: '100vw',
    md: '90vw',
    lg: '50vw',
    xl: '600px'
  },
  projectCard: {
    sm: '100vw',
    md: '50vw',
    lg: '33vw',
    xl: '400px'
  },
  thumbnail: {
    sm: '100vw',
    md: '50vw',
    lg: '25vw',
    xl: '200px'
  }
} as const;

export const IMAGE_QUALITY = {
  high: 90,
  medium: 85,
  low: 75
} as const;

export const BLUR_DATA_URL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3C/svg%3E';

/**
 * Generate responsive image sizes string for Next.js Image component
 * @param variant - The type of image (heroImage, projectCard, thumbnail)
 * @returns sizes string for Image component
 */
export function getImageSizes(variant: keyof typeof IMAGE_SIZES): string {
  const sizes = IMAGE_SIZES[variant];
  return `(max-width: 640px) ${sizes.sm}, (max-width: 768px) ${sizes.md}, (max-width: 1024px) ${sizes.lg}, ${sizes.xl}`;
}

/**
 * Image loader for custom CDN or image service
 * Replace with your own CDN URL if needed
 */
export function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }): string {
  // Default: use Next.js built-in optimization
  // Optionally configure for external CDN:
  // return `https://your-cdn.com/${src}?w=${width}&q=${quality || 75}`;
  return src;
}

export const IMAGE_CONFIG = {
  formats: ['image/avif', 'image/webp'] as const,
  quality: IMAGE_QUALITY.medium,
  placeholder: 'blur' as const,
  loading: 'lazy' as const,
} as const;
