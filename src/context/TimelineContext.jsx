"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // ✅ Load from localStorage (NO delete on reload)
  useEffect(() => {
    const saved = localStorage.getItem("timeline");
    if (saved) {
      setTimeline(JSON.parse(saved));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  // ✅ Add interaction
  const addInteraction = (type, name) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleString(), // 🔥 better format
    };

    setTimeline((prev) => [entry, ...prev]);
  };

  // ✅ Clear manually
  const clearTimeline = () => {
    setTimeline([]);
    localStorage.removeItem("timeline");
  };

  return (
    <TimelineContext.Provider
      value={{ timeline, addInteraction, clearTimeline }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);