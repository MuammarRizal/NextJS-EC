import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const disabledNavbar = ["/auth/login", "/auth/register"];
  return (
    <>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
