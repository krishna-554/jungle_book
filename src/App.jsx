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
  Camera,
  Star,
  Zap,
  ArrowRight,
  Upload,
  CheckCircle,
  UserRound,
} from "lucide-react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  // Animal profile
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [animalSpecies, setAnimalSpecies] = useState("Dog");
  const [customSpecies, setCustomSpecies] = useState("");
  const [animalImage, setAnimalImage] = useState(null);
  const [profileCreated, setProfileCreated] = useState(false);

  // Training / XP
  const [xp, setXp] = useState(0);
  const [completedSkills, setCompletedSkills] = useState([]);

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Explore Skills", icon: Compass },
    { name: "Training", icon: Dumbbell },
    { name: "Competitions", icon: Trophy },
    { name: "Subscription", icon: CreditCard },
    { name: "Appearance", icon: Settings },
    { name: "Helpline Center", icon: HelpCircle },
  ];

  const speciesGroups = {
    Domestic: ["Dog", "Cat", "Cow", "Horse"],
    Wild: ["Lion", "Tiger", "Elephant", "Wolf"],
    Birds: ["Parrot", "Eagle", "Owl", "Sparrow"],
    Aquatic: ["Fish", "Dolphin", "Whale"],
    Reptiles: ["Snake", "Turtle", "Crocodile"],
    Insects: ["Butterfly", "Bee", "Ant"],
  };

  const skills = {
    Physical: [
      "Walking",
      "Running",
      "Flying",
      "Jumping",
      "Dancing",
      "Swimming",
      "Climbing",
      "Racing",
    ],
    Creative: [
      "Dancing",
      "Painting",
      "Drawing",
      "Singing",
      "Music",
      "Photography",
      "Acting",
      "Writing",
    ],
    "Intelligence & Technology": [
      "Problem Solving",
      "Coding",
      "Memory Training",
      "Mathematics",
      "Chess",
      "Strategy",
      "Robotics",
      "AI",
    ],
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setAnimalImage(imageURL);
    }
  };

  const createProfile = () => {
    if (!animalName || !animalAge) {
      alert("Please enter your animal's name and age.");
      return;
    }

    setProfileCreated(true);
    setActivePage("Home");
  };

  const completeSkill = (skill) => {
    if (!completedSkills.includes(skill)) {
      setCompletedSkills([...completedSkills, skill]);
      setXp(xp + 100);
    }
  };

  const level = Math.floor(xp / 500) + 1;
  const levelProgress = ((xp % 500) / 500) * 100;

  const displaySpecies =
    animalSpecies === "Custom" ? customSpecies : animalSpecies;

  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-800">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-orange-100 bg-white p-5 shadow-sm md:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-2xl bg-orange-400 p-3 text-white shadow-md">
            <PawPrint size={25} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              JUNGLE BOOK
            </h1>
            <p className="text-xs text-gray-500">
              Learn • Train • Roar
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02] ${
                  activePage === item.name
                    ? "bg-orange-100 font-semibold text-orange-600"
                    : "text-gray-600 hover:bg-orange-50"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Small profile section */}
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-orange-50 p-4">
          <div className="flex items-center gap-3">
            {animalImage ? (
              <img
                src={animalImage}
                alt="Animal"
                className="h-12 w-12 rounded-2xl object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-200">
                <PawPrint className="text-orange-600" size={22} />
              </div>
            )}

            <div className="min-w-0">
              <p className="text-xs text-gray-500">Your learner</p>
              <p className="truncate font-bold">
                {profileCreated ? animalName : "Not registered"}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="min-h-screen md:ml-64">
        {/* TOP BAR */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-orange-100 bg-white/90 px-5 py-4 backdrop-blur md:px-8">
          <div>
            <p className="text-xs font-medium text-orange-500">
              Welcome to the jungle 🌿
            </p>
            <h2 className="text-xl font-bold md:text-2xl">
              {activePage}
            </h2>
          </div>

          <button className="rounded-2xl border border-orange-100 bg-white p-3 shadow-sm md:hidden">
            <Menu size={20} />
          </button>
        </header>

        <div className="p-5 md:p-8">

          {/* ================= HOME ================= */}
          {activePage === "Home" && (
            <div className="space-y-6">
              {/* Hero */}
              <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-300 via-orange-200 to-amber-100 p-7 shadow-sm md:p-10">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-orange-600">
                      🐾 Vocational learning for animals
                    </span>

                    <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                      Every animal has
                      <span className="text-orange-600">
                        {" "}a talent.
                      </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-gray-700">
                      Discover skills, train every day, earn XP,
                      compete with the jungle and become the best
                      version of yourself.
                    </p>

                    <button
                      onClick={() =>
                        setActivePage(
                          profileCreated
                            ? "Explore Skills"
                            : "Explore Skills"
                        )
                      }
                      className="mt-6 flex items-center gap-2 rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
                    >
                      Explore Skills
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white/70 text-8xl shadow-xl">
                      {animalImage ? (
                        <img
                          src={animalImage}
                          alt="Animal"
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        "🦁"
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Profile */}
              {!profileCreated ? (
                <section className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <p className="text-sm font-semibold text-orange-500">
                        STEP 01
                      </p>
                      <h2 className="mt-1 text-2xl font-bold">
                        Create your animal profile
                      </h2>
                      <p className="mt-1 text-gray-500">
                        Tell us who is joining the jungle academy.
                      </p>
                    </div>

                    <button
                      onClick={() => setActivePage("Animal Profile")}
                      className="rounded-2xl bg-orange-400 px-5 py-3 font-semibold text-white transition hover:scale-105"
                    >
                      Create Profile
                    </button>
                  </div>
                </section>
              ) : (
                <section className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    {animalImage ? (
                      <img
                        src={animalImage}
                        alt={animalName}
                        className="h-28 w-28 rounded-3xl object-cover"
                      />
                    ) : (
                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-orange-100 text-5xl">
                        🐾
                      </div>
                    )}

                    <div className="flex-1">
                      <p className="text-sm text-gray-500">
                        Your learner
                      </p>

                      <h2 className="text-3xl font-bold">
                        {animalName} 🐾
                      </h2>

                      <p className="text-gray-500">
                        {displaySpecies} • {animalAge} years old
                      </p>

                      <div className="mt-4">
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-semibold">
                            Level {level}
                          </span>
                          <span>{xp} XP</span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-orange-400 transition-all"
                            style={{
                              width: `${levelProgress}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActivePage("Explore Skills")}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 font-semibold text-white"
                    >
                      Train
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </section>
              )}

              {/* Stats */}
              <div className="grid gap-5 md:grid-cols-3">
                <StatCard
                  icon={<Star />}
                  title="Current Level"
                  value={`Level ${level}`}
                />

                <StatCard
                  icon={<Zap />}
                  title="Total XP"
                  value={xp}
                />

                <StatCard
                  icon={<CheckCircle />}
                  title="Skills Completed"
                  value={completedSkills.length}
                />
              </div>
            </div>
          )}

          {/* ================= ANIMAL PROFILE ================= */}
          {activePage === "Animal Profile" && (
            <section className="mx-auto max-w-4xl">
              <div className="mb-6">
                <p className="font-semibold text-orange-500">
                  YOUR JUNGLE ID
                </p>
                <h1 className="text-4xl font-bold">
                  Create Animal Profile 🐾
                </h1>
                <p className="mt-2 text-gray-500">
                  Build your learner profile and start your journey.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-10">
                {/* Image Upload */}
                <div className="mb-8 flex flex-col items-center">
                  <label className="group relative cursor-pointer">
                    {animalImage ? (
                      <img
                        src={animalImage}
                        alt="Preview"
                        className="h-40 w-40 rounded-[2rem] object-cover shadow-lg"
                      />
                    ) : (
                      <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[2rem] bg-orange-50 text-orange-500">
                        <Camera size={35} />
                        <span className="mt-2 text-sm font-semibold">
                          Add Photo
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-2 right-2 rounded-xl bg-gray-900 p-3 text-white shadow-lg">
                      <Upload size={16} />
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  <p className="mt-3 text-sm text-gray-400">
                    Upload a profile picture
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Animal Name
                    </label>

                    <input
                      value={animalName}
                      onChange={(e) => setAnimalName(e.target.value)}
                      placeholder="Eg: Bruno"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Age
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={animalAge}
                      onChange={(e) => setAnimalAge(e.target.value)}
                      placeholder="Eg: 3"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Species */}
                <div className="mt-6">
                  <label className="mb-3 block text-sm font-semibold">
                    Choose Species
                  </label>

                  <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(speciesGroups).map(
                      ([group, animals]) => (
                        <div
                          key={group}
                          className="rounded-2xl bg-orange-50 p-4"
                        >
                          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-orange-500">
                            {group}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {animals.map((animal) => (
                              <button
                                key={animal}
                                onClick={() =>
                                  setAnimalSpecies(animal)
                                }
                                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                                  animalSpecies === animal
                                    ? "bg-orange-400 text-white"
                                    : "bg-white text-gray-600 hover:bg-orange-100"
                                }`}
                              >
                                {animal}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => setAnimalSpecies("Custom")}
                    className={`mt-4 rounded-xl px-4 py-2 text-sm font-semibold ${
                      animalSpecies === "Custom"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    + Custom Species
                  </button>

                  {animalSpecies === "Custom" && (
                    <input
                      value={customSpecies}
                      onChange={(e) =>
                        setCustomSpecies(e.target.value)
                      }
                      placeholder="Enter species"
                      className="mt-3 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-400"
                    />
                  )}
                </div>

                <button
                  onClick={createProfile}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-400 px-6 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-500"
                >
                  Create My Profile
                  <ArrowRight size={20} />
                </button>
              </div>
            </section>
          )}

          {/* ================= EXPLORE SKILLS ================= */}
          {activePage === "Explore Skills" && (
            <div>
              <div className="mb-8">
                <p className="font-semibold text-orange-500">
                  DISCOVER YOUR TALENT
                </p>
                <h1 className="text-4xl font-bold">
                  Explore Skills 🌟
                </h1>
                <p className="mt-2 text-gray-500">
                  Choose a department and discover what your animal
                  can learn.
                </p>
              </div>

              <div className="space-y-8">
                {Object.entries(skills).map(
                  ([department, departmentSkills]) => (
                    <section key={department}>
                      <h2 className="mb-4 text-2xl font-bold">
                        {department}
                      </h2>

                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {departmentSkills.map((skill, index) => (
                          <button
                            key={`${skill}-${index}`}
                            onClick={() => setActivePage("Training")}
                            className="group rounded-3xl bg-white p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <div className="mb-5 flex items-center justify-between">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                                {department === "Physical"
                                  ? "🏃"
                                  : department === "Creative"
                                  ? "🎨"
                                  : "🧠"}
                              </div>

                              <ArrowRight
                                size={18}
                                className="text-gray-300 transition group-hover:text-orange-500"
                              />
                            </div>

                            <h3 className="font-bold">{skill}</h3>

                            <p className="mt-1 text-sm text-gray-400">
                              Beginner friendly
                            </p>

                            <div className="mt-4 h-2 rounded-full bg-gray-100">
                              <div className="h-full w-1/5 rounded-full bg-orange-300" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </section>
                  )
                )}
              </div>
            </div>
          )}

          {/* ================= TRAINING ================= */}
          {activePage === "Training" && (
            <div>
              <div className="mb-8">
                <p className="font-semibold text-orange-500">
                  TRAIN • PRACTICE • GROW
                </p>

                <h1 className="text-4xl font-bold">
                  Training Arena 🎯
                </h1>

                <p className="mt-2 text-gray-500">
                  Complete challenges and earn XP.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {["Running", "Problem Solving", "Painting", "Memory Training"].map(
                  (skill) => {
                    const completed = completedSkills.includes(skill);

                    return (
                      <div
                        key={skill}
                        className="rounded-[2rem] bg-white p-7 shadow-sm"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                            {skill === "Running"
                              ? "🏃"
                              : skill === "Painting"
                              ? "🎨"
                              : "🧠"}
                          </div>

                          {completed && (
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
                              Completed ✓
                            </span>
                          )}
                        </div>

                        <h2 className="mt-5 text-2xl font-bold">
                          {skill}
                        </h2>

                        <p className="mt-2 text-gray-500">
                          Beginner Challenge
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                          <div className="flex gap-3">
                            <CheckCircle size={18} className="text-orange-400" />
                            Complete warm-up
                          </div>

                          <div className="flex gap-3">
                            <CheckCircle size={18} className="text-orange-400" />
                            Complete main challenge
                          </div>

                          <div className="flex gap-3">
                            <CheckCircle size={18} className="text-orange-400" />
                            Finish the challenge
                          </div>
                        </div>

                        <button
                          disabled={completed}
                          onClick={() => completeSkill(skill)}
                          className={`mt-7 w-full rounded-2xl px-5 py-3 font-bold transition ${
                            completed
                              ? "cursor-not-allowed bg-green-100 text-green-600"
                              : "bg-gray-900 text-white hover:scale-[1.02]"
                          }`}
                        >
                          {completed
                            ? "Challenge Completed ✓"
                            : "Complete Challenge +100 XP"}
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {/* ================= COMPETITIONS ================= */}
          {activePage === "Competitions" && (
            <div>
              <div className="mb-8">
                <p className="font-semibold text-orange-500">
                  SHOW YOUR SKILLS
                </p>

                <h1 className="text-4xl font-bold">
                  Jungle Champions 🏆
                </h1>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <div className="space-y-4">
                  {[
                    ["🥇", "Simba", 1450],
                    ["🥈", "Bruno", 1280],
                    ["🥉", "Coco", 1120],
                    ["4", "Max", 980],
                    ["5", "Luna", 850],
                  ].map(([rank, name, score]) => (
                    <div
                      key={name}
                      className="flex items-center gap-4 rounded-2xl bg-orange-50 p-4"
                    >
                      <div className="w-10 text-center text-xl font-bold">
                        {rank}
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                        🐾
                      </div>

                      <div className="flex-1">
                        <p className="font-bold">{name}</p>
                        <p className="text-xs text-gray-400">
                          Jungle Academy
                        </p>
                      </div>

                      <div className="font-bold text-orange-500">
                        {score} XP
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gray-900 p-5 text-white">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-400">
                        Your Current Rank
                      </p>
                      <p className="mt-1 text-3xl font-bold">#12</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-400">
                        Your XP
                      </p>
                      <p className="mt-1 text-3xl font-bold">
                        {xp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SUBSCRIPTION ================= */}
          {activePage === "Subscription" && (
            <div>
              <div className="mb-8">
                <p className="font-semibold text-orange-500">
                  CHOOSE YOUR JOURNEY
                </p>

                <h1 className="text-4xl font-bold">
                  Jungle Pass 💎
                </h1>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <PlanCard
                  name="Explorer"
                  price="₹0"
                  features={[
                    "Basic Skills",
                    "Beginner Training",
                    "XP Tracking",
                  ]}
                />

                <PlanCard
                  name="Jungle Pro"
                  price="₹199"
                  popular
                  features={[
                    "All Skills",
                    "Advanced Training",
                    "Competitions",
                    "AI Coach",
                  ]}
                />
              </div>
            </div>
          )}

          {/* ================= APPEARANCE ================= */}
          {activePage === "Appearance" && (
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">
                Appearance ⚙️
              </h1>

              <div className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold">
                  Choose your jungle theme
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <button className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-5 text-left">
                    <div className="text-2xl">☀️</div>
                    <p className="mt-2 font-bold">Light</p>
                    <p className="text-sm text-gray-500">
                      Bright and friendly
                    </p>
                  </button>

                  <button className="rounded-2xl border border-gray-200 p-5 text-left">
                    <div className="text-2xl">🌙</div>
                    <p className="mt-2 font-bold">Dark</p>
                    <p className="text-sm text-gray-500">
                      Coming soon
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= HELPLINE ================= */}
          {activePage === "Helpline Center" && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <p className="font-semibold text-orange-500">
                  WE ARE HERE FOR YOU
                </p>

                <h1 className="text-4xl font-bold">
                  Helpline Center 💛
                </h1>

                <p className="mt-2 text-gray-500">
                  Need help? The Jungle Academy team is ready.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <HelpCard
                  icon="📞"
                  title="Call Support"
                  text="Talk to our support team."
                />

                <HelpCard
                  icon="💬"
                  title="Live Chat"
                  text="Chat with the jungle team."
                />

                <HelpCard
                  icon="❓"
                  title="FAQs"
                  text="Find quick answers."
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MOWGLI FLOATING BUTTON */}
      <button
        onClick={() =>
          alert(
            "🐒 Mowgli says: Train hard! Even a sloth has started before you! 😂"
          )
        }
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 text-3xl shadow-xl transition hover:scale-110"
        title="Ask Mowgli"
      >
        🐒
      </button>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ icon, title, value }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
        {icon}
      </div>

      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="mt-1 text-3xl font-bold">{value}</h3>
    </div>
  );
}

function PlanCard({ name, price, features, popular }) {
  return (
    <div
      className={`relative rounded-[2rem] bg-white p-7 shadow-sm ${
        popular ? "ring-2 ring-orange-300" : ""
      }`}
    >
      {popular && (
        <span className="absolute right-6 top-6 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
          POPULAR
        </span>
      )}

      <p className="text-sm font-semibold text-orange-500">
        JUNGLE PASS
      </p>

      <h2 className="mt-2 text-2xl font-bold">{name}</h2>

      <div className="mt-4">
        <span className="text-4xl font-bold">{price}</span>

        {price !== "₹0" && (
          <span className="text-gray-400"> / month</span>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm">
            <CheckCircle
              size={18}
              className="shrink-0 text-orange-400"
            />
            {feature}
          </div>
        ))}
      </div>

      <button className="mt-7 w-full rounded-2xl bg-gray-900 px-5 py-3 font-bold text-white">
        Choose Plan
      </button>
    </div>
  );
}

function HelpCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="text-3xl">{icon}</div>

      <h2 className="mt-4 text-xl font-bold">{title}</h2>

      <p className="mt-2 text-sm text-gray-500">{text}</p>

      <button className="mt-5 font-semibold text-orange-500">
        Learn more →
      </button>
    </div>
  );
}

export default App;