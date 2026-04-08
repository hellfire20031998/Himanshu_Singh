import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

export function MetricChart({ metric }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            data: [metric.value],
            backgroundColor: [metric.color],
            borderWidth: 0,
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: 'rgba(24, 24, 27, 0.95)',
            titleColor: '#fafafa',
            bodyColor: '#e4e4e7',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              title: () => '',
              label: (context) => metric.customLabel || `${context.raw}%`,
            },
          },
        },
        scales: {
          x: { display: false, min: 0, max: 100 },
          y: { display: false },
        },
      },
    });

    return () => chartInstance.destroy();
  }, [metric]);

  return (
    <motion.div
      className="rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.08] bg-black/25 transition-all duration-300 hover:border-violet-500/20 hover:bg-black/35 min-w-0"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-xs sm:text-sm font-semibold text-zinc-200 mb-2 text-pretty leading-snug">{metric.label}</p>
      <div className="metric-chart-container">
        <canvas ref={chartRef} className="max-w-full" />
      </div>
    </motion.div>
  );
}
