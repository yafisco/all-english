import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  if (!user) return <div className="container mx-auto px-4 py-10">Vous devez être connecté</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold">Bonjour, {user.name}</h2>
        <p className="mt-3">Email : {user.email}</p>
        <div className="mt-6">
          <h3 className="font-semibold">Progression</h3>
          <div className="w-full bg-gray-200 h-3 rounded mt-2"><div className="bg-blue-600 h-3 rounded w-1/3"></div></div>
        </div>
      </div>
    </div>
  );
}
