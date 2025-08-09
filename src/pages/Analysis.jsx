import ViolationTypeChart from "../components/analysis/ValidationTypeChart";
import ComPailenceScore from "../components/analysis/CompailenceScore";
import AnalysisHeading from "../components/analysis/AnalysisHeading";
import CaseReportBuilder from "../components/analysis/CaseReportBuilder";

export default function Analysis() {
  return (
    <div>
      <AnalysisHeading />

      <div className="grid grid-cols-2 gap-5">
        <ViolationTypeChart />
        <ComPailenceScore />
      </div>

      <CaseReportBuilder />
    </div>
  );
}
