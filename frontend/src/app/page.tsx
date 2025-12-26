import { Header } from "@/components/Header";
import { TranslatorCard } from "@/components/TranslatorCard";
import { LanguageGrid } from "@/components/LanguageGrid";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto">
        <Header />
        <TranslatorCard />
        <LanguageGrid />

        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
