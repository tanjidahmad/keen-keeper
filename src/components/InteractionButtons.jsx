"use client";
import { useTimeline } from "@/context/TimelineContext";
import toast from "react-hot-toast";
import { FaPhone, FaComment, FaVideo } from "react-icons/fa";

export default function InteractionButtons({ friendName }) {
  const { addInteraction } = useTimeline();

  const handle = (type) => {
    addInteraction(type, friendName);
    toast.success(`${type} with ${friendName}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">

      
      <button
        onClick={() => handle("Call")}
        className="
          bg-gray-100 border border-gray-200
          p-4 rounded-xl text-center
          shadow-sm
          transition-all duration-200
          hover:bg-gray-200 hover:shadow-md
          active:scale-95
        "
      >
        <FaPhone className="mx-auto mb-2 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Call</span>
      </button>

     
      <button
        onClick={() => handle("Text")}
        className="
          bg-gray-100 border border-gray-200
          p-4 rounded-xl text-center
          shadow-sm
          transition-all duration-200
          hover:bg-gray-200 hover:shadow-md
          active:scale-95
        "
      >
        <FaComment className="mx-auto mb-2 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Text</span>
      </button>

      
      <button
        onClick={() => handle("Video")}
        className="
          bg-gray-100 border border-gray-200
          p-4 rounded-xl text-center
          shadow-sm
          transition-all duration-200
          hover:bg-gray-200 hover:shadow-md
          active:scale-95
        "
      >
        <FaVideo className="mx-auto mb-2 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Video</span>
      </button>

    </div>
  );
}