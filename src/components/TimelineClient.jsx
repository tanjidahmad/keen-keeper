"use client";

import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";
import { FaPhone, FaComment, FaVideo } from "react-icons/fa";

export default function TimelinePage() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return <FaPhone className="text-gray-600" />;
    if (type === "Text") return <FaComment className="text-gray-600" />;
    if (type === "Video") return <FaVideo className="text-gray-600" />;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Timeline
        </h1>

        
        <select
          className="border rounded-lg px-3 py-2 mb-6 text-black text-sm"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        
        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4"
            >
              
              <div className="bg-gray-100 p-3 rounded-full">
                {getIcon(item.type)}
              </div>

             
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}