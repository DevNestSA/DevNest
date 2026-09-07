import logo from "@/assets/devnest-logo-lockup.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="DevNest logo"
      className={className}
      width={242}
      height={180}
      decoding="async"
    />
  );
}

export const logoUrl = logo.url;
