import Image from "next/image";

interface CoverImageProps {
  src?: string;
  alt: string;
  fallbackText?: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
}

export function CoverImage({
  src,
  alt,
  fallbackText,
  aspectRatio = "aspect-[4/3]",
  className = "",
  priority = false,
}: CoverImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-muted ${aspectRatio} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          {fallbackText ?? alt}
        </div>
      )}
    </div>
  );
}
