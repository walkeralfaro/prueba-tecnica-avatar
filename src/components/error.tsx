import { Link } from "react-router";

export default function Error({ error }: { error: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Not Found</h1>
      <p className="text-slate-400">{error}</p>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 inline-block"
      >
        Go Home
      </Link>
    </div>
  )
}