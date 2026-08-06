export function SiteMark({ className = "", imgClassName = "" }: { className?: string; imgClassName?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/masarion-logo-whitegold-sm.png"
        alt="Masarion Energy"
        width={262}
        height={96}
        className={imgClassName || "h-8 w-auto"}
      />
    </span>
  );
}
