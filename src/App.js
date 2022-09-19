import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile(
      "/stimulSoft/fa.xml",
      false,
      "fa"
    );
    window.Stimulsoft.Base.Localization.StiLocalization.cultureName = "fa";

    var options = new window.Stimulsoft.Viewer.StiViewerOptions();
    options.appearance.scrollbarsMode = false;
    options.appearance.rightToLeft = true;
    options.appearance.fullScreenMode = false;
    options.appearance.scrollbarsMode = false;
    options.toolbar.viewMode =
      window.Stimulsoft.Viewer.StiWebViewMode.SinglePage;
    options.toolbar.zoom = 90;
    options.toolbar.showSaveButton = true;
    options.toolbar.showAboutButton = false;
    //options.toolbar.fontFamily = "IRANSans_faNum";

    var viewer = new window.Stimulsoft.Viewer.StiViewer(
      options,
      "StiViewer",
      false
    );

    var report = new window.Stimulsoft.Report.StiReport();
    report.loadFile("/stimulsoft/reports/ReportJS.mrt");
    viewer.report = report;
    viewer.renderHtml("viewer");
  }, []);

  return <div id="viewer"></div>;
}

export default App;
