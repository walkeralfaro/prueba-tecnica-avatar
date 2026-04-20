import { useNavigate } from "react-router"

export default function ButtonBackNavigation() {
  const navigation = useNavigate()
  return (
    <button onClick={() => navigation(-1)} className="pr-1 py-1 rounded flex transition bg-slate-600 hover:bg-slate-700 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
    </button>
  )
}