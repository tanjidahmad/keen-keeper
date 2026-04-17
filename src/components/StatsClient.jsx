"use client";

import { useTimeline } from "@/context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function StatsPage() {
  const { timeline } = useTimeline();

  // Count data
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    counts[item.type]++;
  });

  const data = [
    { name: "Text", value: counts.Text },
    { name: "Call", value: counts.Call },
    { name: "Video", value: counts.Video },
  ];

  const COLORS = ["#7C3AED", "#065F46", "#10B981"]; // Figma colors

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>

        
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-sm text-gray-500 mb-4">
            By Interaction Type
          </h2>

          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>

        </div>
      </div>
    </div>
  );
}