import { useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import { resumeData, SKILL_CHART_COLORS } from '@/data/resumeData';

export function SkillsChart({ onBarClick }) {
  const chartRef = useRef(null);
  const onBarClickStable = useCallback(
    (cat) => {
      onBarClick(cat);
    },
    [onBarClick]
  );

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const categories = Object.keys(resumeData.skills);
    const data = categories.map((cat) => resumeData.skills[cat].length);
    const n = categories.length;

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Skills in category',
            data,
            backgroundColor: SKILL_CHART_COLORS.bg.slice(0, n),
            borderColor: SKILL_CHART_COLORS.border.slice(0, n),
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { display: false }, ticks: { precision: 0 } },
          y: { grid: { display: false } },
        },
        onClick: (_event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            onBarClickStable(categories[clickedIndex]);
          } else {
            onBarClickStable(null);
          }
        },
      },
    });

    return () => chartInstance.destroy();
  }, [onBarClickStable]);

  return <canvas ref={chartRef} />;
}
