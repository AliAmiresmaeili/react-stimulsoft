import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    var viewer = new window.Stimulsoft.Viewer.StiViewer(
      null,
      "StiViewer",
      false
    );

    var report = new window.Stimulsoft.Report.StiReport();
    report.loadFile("/reports/ReportJS.mrt");
    viewer.report = report;
    viewer.renderHtml("viewer");
  }, []);

  return <div id="viewer"></div>;
}

export default App;
