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
      <div className="flex justify-between mt-4">
        {/* Sidebar */}
        <aside className="w-61 pr-4 mr-20">
          <MatchesList searchTerm={searchTerm} />
        </aside>

        {/* Main content */}
        <main className="w-full flex gap-4 2xl:justify-between">
          <AnomalyCard />
          <AISuggestion />
        </main>
      </div>
    </div>
  );
}
