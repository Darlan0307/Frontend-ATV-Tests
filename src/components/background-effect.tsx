"use client";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";

export function BackgroundEffect() {
  const { theme } = useTheme();

  return (
    <div className="fixed top-0 left-0 overflow-hidden h-dvh w-dvw -z-10 opacity-0 md:opacity-100">
      <Particles
        color={theme === "dark" ? "#fff" : "#000"}
        vx={0.2}
        vy={0.2}
        quantity={150}
        size={0.6}
      />
    </div>
  );
}
