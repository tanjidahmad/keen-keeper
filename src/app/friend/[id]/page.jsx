import InteractionButtons from "@/components/InteractionButtons";
import Image from "next/image";
import { FaClock, FaArchive, FaTrash } from "react-icons/fa";

const statusStyle = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600",
};

async function getFriends() {
  const res = await fetch("https://keen-keeper-lyart-nine.vercel.app/friends.json");
  return res.json();
}

export default async function Page({ params }) {
  // ✅ FIX: params await করতে হবে
  const { id } = await params;

  const friends = await getFriends();

  const friend = friends.find(
    (f) => f.id === Number(id)
  );

  if (!friend) return <h1 className="p-6">Not Found</h1>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <Image
              src={friend.picture}
              width={80}
              height={80}
              alt={friend.name}
              className="rounded-full mx-auto"
            />

            <h2 className="mt-3 text-black font-semibold text-lg">
              {friend.name}
            </h2>

            {/* ✅ Dynamic Status */}
            <span className={`px-2 py-1 text-xs rounded ${statusStyle[friend.status]}`}>
              {friend.status}
            </span>

            <div className="mt-2">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">
              {friend.bio}
            </p>

            {/* ✅ Email */}
            <p className="text-sm text-gray-600 mt-2">
              {friend.email}
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-2">

            <button className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-sm flex items-center justify-center gap-2 text-black hover:bg-gray-50 transition">
              <FaClock className="text-gray-700" />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-sm flex items-center justify-center gap-2 text-black hover:bg-gray-50 transition">
              <FaArchive className="text-gray-500" />
              Archive
            </button>

            <button className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-sm flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition">
              <FaTrash />
              Delete
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold text-black">
                {friend.days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold text-black">
                {friend.goal}
              </h2>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold text-black">
                {friend.next_due_date}
              </h2>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-black">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every {friend.goal} days
              </p>
            </div>

            <button className="border px-3 py-1 rounded text-sm hover:bg-gray-100 transition">
              Edit
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-black mb-3">
              Quick Check-In
            </h3>

            <InteractionButtons friendName={friend.name} />
          </div>
        </div>
      </div>
    </div>
  );
}