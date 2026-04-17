
import FriendCard from "@/components/FriendCard";

async function getFriends() {
  const res = await fetch("https://keen-keeper-lyart-nine.vercel.app/friends.json",{cache:'no-store'});
  return res.json();
}

export default async function Home() {
  const friends = await getFriends();

  return (
    <div className="bg-gray-100 ">

      {/* Banner */}
      <div className="max-w-5xl mx-auto text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl text-black font-bold">10</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl text-black font-bold">3</h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl text-black font-bold">6</h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl text-black font-bold">12</h2>
          <p className="text-sm text-gray-500">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Your Friends
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((f) => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      </div>
    </div>
  );
}