import { useState } from "react";
import AISuggestion from "../components/aiInteligence/AiSuggestiion";
import AnomalyCard from "../components/aiInteligence/AnomalyCard";
import MatchesList from "../components/aiInteligence/MatchList";
import SearchBar from "../components/aiInteligence/SearchBar";

export default function AIIntelligence() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      {/* Top Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main content layout */}
      <div className="flex gap-20 mt-4 2xl:gap-30">
        {/* Sidebar */}
        <aside className="w-61 pr-4">
          <MatchesList searchTerm={searchTerm} />
        </aside>

        {/* Main content */}
        <main className="w-full flex gap-4 2xl:gap-10">
          <AnomalyCard />
          <AISuggestion />
        </main>
      </div>
    </div>
  );
}
