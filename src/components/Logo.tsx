import logo from "@/assets/DevNest.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="DevNest"
      className={className}
      width={242}
      height={180}
      decoding="async"
    />
  );
}

export const logoUrl = logo;
