export function GlobalStyles() {
  return (
    <style jsx global>{`
      .chart-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        height: 300px;
        max-height: 400px;
      }
      @media (min-width: 640px) {
        .chart-container {
          height: 280px;
          max-height: 340px;
        }
      }
      @media (min-width: 768px) {
        .chart-container {
          height: 320px;
          max-height: 380px;
        }
      }
      .metric-chart-container {
        position: relative;
        width: 100%;
        height: 24px;
      }
      .nav-link {
        transition: color 0.2s ease;
      }
      .nav-link:hover {
        color: #1e293b;
      }
      .tag {
        transition: all 0.2s ease-in-out;
      }
      .tag:hover {
        transform: translateY(-2px);
        box-shadow:
          0 4px 6px -1px rgb(0 0 0 / 0.08),
          0 2px 4px -2px rgb(0 0 0 / 0.06);
      }
      .tab.active {
        background-color: #1e293b;
        color: #ffffff;
      }
    `}</style>
  );
}
