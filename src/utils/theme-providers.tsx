import Footer from "@/components/ui/header-cmp/footer";
import Header from "@/components/ui/header-cmp/header";
import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Header/>
      <div className="overflow-y-scroll">
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
