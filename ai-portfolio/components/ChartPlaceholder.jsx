// filepath: c:\Users\Admin\Desktop\sudowudo\demo-port\components\ChartPlaceholder.jsx
"use client";
import { useEffect, useRef, useState } from 'react';

export default function ChartPlaceholder() {
  const canvasRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw background
    ctx.fillStyle = 'rgba(147, 51, 234, 0.1)'; // Light purple
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= width; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= height; i += 30) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
    
    // Generate random data points
    const points = Array.from({ length: 10 }, (_, i) => ({
      x: width * (i / 9),
      y: Math.random() * height * 0.6 + height * 0.2,
    }));
    
    // Draw line chart
    ctx.strokeStyle = '#8b5cf6'; // Purple
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#7c3aed'; // Darker purple
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Text
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#4c1d95'; // Very dark purple
    ctx.textAlign = 'center';
    ctx.fillText('Model Performance Over Time', width / 2, 20);
    
  }, [isClient]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Model Performance Visualization
      </h3>
      <div className="bg-white dark:bg-gray-700 rounded-lg p-2 overflow-hidden">
        {isClient && (
          <canvas 
            ref={canvasRef} 
            width={500} 
            height={300}
            className="w-full h-auto"
          />
        )}
        {!isClient && (
          <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-600 animate-pulse"></div>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        Interactive data visualizations coming soon... This is a placeholder for future ML model performance metrics.
      </p>
    </div>
  );
}