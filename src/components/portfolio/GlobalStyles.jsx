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
        color: #fafafa;
      }
      .tag {
        transition: all 0.2s ease-in-out;
      }
      .tag:hover {
        transform: translateY(-2px);
        box-shadow:
          0 8px 24px -4px rgba(139, 92, 246, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.06);
      }
      .tab.active {
        background: linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #db2777 100%);
        color: #ffffff;
        box-shadow: 0 4px 24px rgba(124, 58, 237, 0.35);
      }
    `}</style>
  );
}
