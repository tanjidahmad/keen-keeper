

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import { useTimeline } from "@/context/TimelineContext"; // ✅ add

export default function Navbar() {
  const path = usePathname();

  // ✅ get clear function
  const { clearTimeline } = useTimeline();

  const linkStyle = (route) =>
    `flex items-center gap-1 px-3 py-2 rounded transition ${
      path === route
        ? "bg-green-700 text-white"
        : "text-gray-600 hover:text-green-600"
    }`;

  return (
    <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
      
      {/* Logo */}
      <Image
        src="/assets/logo.png"
        width={120}
        height={40}
        alt="logo"
      />

      {/* Links */}
      <div className="flex gap-4">

        {/* 🔥 HOME (double click reset) */}
        <Link
          href="/"
          className={linkStyle("/")}
          onDoubleClick={() => clearTimeline()}
          title="Double click to reset"
        >
          <FaHome size={14} /> Home
        </Link>

        <Link href="/timeline" className={linkStyle("/timeline")}>
          <FaClock size={14} /> Timeline
        </Link>

        <Link href="/stats" className={linkStyle("/stats")}>
          <FaChartBar size={14} /> Stats
        </Link>

      </div>
    </div>
  );
}