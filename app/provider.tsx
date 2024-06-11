"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};
export default function Provider({ children }: ProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  //useEffect only works on client components
  //so,,, once this component mounts on client side set isMounted to true

  if (!isMounted) return <>{children}</>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
  //add class attribute to theme provider for tailwind
}
