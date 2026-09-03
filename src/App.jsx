import { useState } from "react";
import {
  Home,
  Compass,
  Dumbbell,
  Trophy,
  CreditCard,
  Settings,
  HelpCircle,
  PawPrint,
  Menu,
} from "lucide-react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Explore Skills", icon: Compass },
    { name: "Training", icon: Dumbbell },
    { name: "Competitions", icon: Trophy },
    { name: "Subscription", icon: CreditCard },
    { name: "Appearance", icon: Settings },
    { name: "Helpline Center", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white p-5">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-2xl bg-orange-400 p-3 text-white">
            <PawPrint size={25} />
          </div>

          <div>
            <h1 className="text-xl font-bold">JUNGLE BOOK</h1>
            <p className="text-xs text-gray-500">Learn • Train • Roar</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:scale-105 ${
                  activePage === item.name
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen bg-orange-50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-orange-500">Welcome to the jungle 🌿</p>
            <h2 className="text-4xl font-bold">{activePage}</h2>
          </div>

          <button className="rounded-2xl bg-white p-3 shadow-sm">
            <Menu />
          </button>
        </div>

        {/* Dashboard Card */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-bold">
            Hey, little explorer! 🐾
          </h3>

          <p className="mb-6 text-gray-500">
            Welcome to JUNGLE BOOK — where every animal can discover a new
            skill.
          </p>

          <button className="rounded-2xl bg-orange-400 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-500">
            Start Learning 🚀
          </button>
        </section>

        {/* Quick Stats */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Current Level</p>
            <h3 className="mt-2 text-3xl font-bold">Level 1</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Skills Learned</p>
            <h3 className="mt-2 text-3xl font-bold">0</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Training Streak</p>
            <h3 className="mt-2 text-3xl font-bold">🔥 0 Days</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;