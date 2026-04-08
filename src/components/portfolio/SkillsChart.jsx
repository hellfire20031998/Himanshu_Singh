import { useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import { resumeData, SKILL_CHART_COLORS } from '@/data/resumeData';

const tickColor = '#a1a1aa';
const gridColor = 'rgba(255, 255, 255, 0.06)';

function tickFontSize() {
  if (typeof window === 'undefined') return 11;
  return window.matchMedia('(max-width: 639px)').matches ? 9 : window.matchMedia('(max-width: 1023px)').matches ? 10 : 11;
}

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
    const fs = tickFontSize();

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
            borderRadius: 6,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { left: 0, right: 4, top: 4, bottom: 4 },
        },
        plugins: { legend: { display: false } },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: gridColor },
            ticks: { color: tickColor, precision: 0, font: { size: fs } },
            border: { display: false },
          },
          y: {
            grid: { display: false },
            ticks: {
              color: tickColor,
              font: { size: fs },
              maxRotation: 0,
              autoSkip: false,
            },
            border: { display: false },
          },
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

    const onResize = () => {
      const next = tickFontSize();
      if (chartInstance.options.scales?.x?.ticks && chartInstance.options.scales?.y?.ticks) {
        chartInstance.options.scales.x.ticks.font = { size: next };
        chartInstance.options.scales.y.ticks.font = { size: next };
        chartInstance.update('none');
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      chartInstance.destroy();
    };
  }, [onBarClickStable]);

  return <canvas ref={chartRef} className="max-w-full" />;
}
