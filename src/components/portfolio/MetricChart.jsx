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
      className="bg-stone-50 rounded-lg p-4 border border-stone-100 transition-shadow duration-300 hover:shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-sm font-semibold text-slate-700 mb-2">{metric.label}</p>
      <div className="metric-chart-container">
        <canvas ref={chartRef} />
      </div>
    </motion.div>
  );
}
