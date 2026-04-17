import Link from "next/link";
import Image from "next/image";

const statusStyle = {
  overdue: "text-red-500",
  "almost due": "text-yellow-500",
  "on-track": "text-green-500",
};

export default function FriendCard({ friend }) {
  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center">

        <Image
          src={friend.picture}
          width={60}
          height={60}
          className="rounded-full mx-auto"
          alt={friend.name}
        />

        <h2 className="mt-3 font-semibold">{friend.name}</h2>

        <p className="text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ✅ Dynamic Status */}
        <p className={`mt-2 text-xs capitalize ${statusStyle[friend.status]}`}>
          {friend.status}
        </p>

      </div>
    </Link>
  );
}