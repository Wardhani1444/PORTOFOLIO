import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Laptop,
  Cpu,
  Sparkles,
  Award,
  TrendingUp,
  Layers,
  Activity,
  CheckCircle,
  Clock,
  Briefcase
} from "lucide-react"

interface Skill {
  id: string
  name: string
  level: "Intermediate" | "Proficient" | "Expert"
  percentage: number
  description: string
  tools: string[]
  projects: { name: string; link?: string }[]
  synergy: string
}

const SKILLS_DATA: Skill[] = [
  {
    id: "web-dev",
    name: "Pengembangan Website Dasar",
    level: "Intermediate",
    percentage: 50,
    description: "Pembuatan struktur situs web responsif menggunakan HTML5, CSS3 modern, JavaScript kontemporer, dan kerangka kerja web dinamis untuk mendukung keberadaan online bisnis.",
    tools: ["HTML5 / CSS3", "JavaScript ES6+", "Tailwind CSS", "Vite & React Ecosystem"],
    projects: [
      { name: "SAJIKITA • Student Catering Deck", link: "https://sajikita.vercel.app/" },
      { name: "ECOCARE • Crowd Donation", link: "https://ecocare-chi.vercel.app/" }
    ],
    synergy: "Memungkinkan konversi ide bisnis digital mentah menjadi prototipe platform web fungsional secara instan."
  },
  {
    id: "marketing",
    name: "Digital Marketing & Copywriting",
    level: "Intermediate",
    percentage: 60,
    description: "Perencanaan dan pengelolaan aset kampanye digital, pengembangan persona audiens, optimasi halaman konversi, dan penulisan copywriting persuasif berfokus pada ROI.",
    tools: ["Meta Ads Planner", "Social Media Copywriting", "Content Strategy", "SEO Fundamentals"],
    projects: [
      { name: "SAJIKITA • Go-to-Market Strategy" }
    ],
    synergy: "Mendorong traksi pengguna awal dan konversi produk digital pasca-rilis melalui pesan terarah."
  },
  {
    id: "cloud-tools",
    name: "Cloud Studio & Productivity Tools",
    level: "Intermediate",
    percentage: 50,
    description: "Pemanfaatan asisten pengkodean berbasis AI untuk akselerasi siklus pengembangan aplikasi, dikombinasikan dengan manajemen kolaborasi berbasis komputasi cerdas (Cloud).",
    tools: ["AI Coding Assistant", "GitHub Version Control", "Google Cloud Storage", "Serverless Deployment"],
    projects: [
      { name: "VESTIARY • Digital Wardrobe (WordPress)", link: "https://drive.google.com/file/d/1QJf_zsye4fwhNjOLQoPNDEM6DiP7-z1I/view?usp=drive_link" }
    ],
    synergy: "Meningkatkan kecepatan perangkaian kode produk hingga 5x lipat dengan metodologi AI-assisted development."
  },
  {
    id: "analytics",
    name: "Analisis Data & Canva Desain",
    level: "Intermediate",
    percentage: 50,
    description: "Penerjemahan metrik pasar menjadi wawasan bisnis yang actionable dikombinasikan dengan keterampilan visualisasi kreatif untuk materi promosi fungsional berestetika tinggi.",
    tools: ["Canva Pro Layout", "Business Analytics", "Figma Prototyping", "Excel Data Modeling"],
    projects: [
      { name: "SAKANA • Target Market Analysis" },
      { name: "Sajikita • Pitch Deck & Branding Matrix" }
    ],
    synergy: "Menyelaraskan data kuantitatif pasar dengan visual brand yang eye-catching agar menarik minat pemangku kepentingan."
  },
  {
    id: "office",
    name: "Microsoft Office Suite",
    level: "Proficient",
    percentage: 60,
    description: "Penguasaan mendalam atas automasi laporan di Excel, penyusunan proposal akademik terstruktur di Word, dan pembuatan presentasi pitch deck investor berdaya pikat tinggi di PowerPoint.",
    tools: ["Excel Pivot & Formulas", "PowerPoint Storytelling", "Word Document Styling", "Office Cloud Collaboration"],
    projects: [
      { name: "UNESA Academic Proposal paper" },
      { name: "Welcome Party X Bazar Budgeting Sheet" }
    ],
    synergy: "Memastikan seluruh administrasi operasional proyek dan pelaporan keuangan terkelola secara presisi dan profesional."
  }
]

export default function SkillsDashboard() {
  const [selectedSkillId, setSelectedSkillId] = useState<string>("web-dev")
  const [synergySkills, setSynergySkills] = useState<string[]>(["web-dev", "marketing"])
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const activeSkill = SKILLS_DATA.find((sk) => sk.id === selectedSkillId) || SKILLS_DATA[0]

  // Radar Chart Mathematics (Center of 150, 150 on a viewbox of 300x300)
  const cx = 150
  const cy = 150
  const rMax = 100
  const nPoints = SKILLS_DATA.length

  const getCoordinates = (index: number, valPercent: number) => {
    const angle = (index * 2 * Math.PI) / nPoints - Math.PI / 2
    const radius = (valPercent / 100) * rMax
    const x = cx + radius * Math.cos(angle)
    const y = cy + radius * Math.sin(angle)
    return { x, y }
  }

  // Polygon calculations
  const proficiencyPoints = SKILLS_DATA.map((sk, index) => {
    const { x, y } = getCoordinates(index, sk.percentage)
    return `${x},${y}`
  }).join(" ")

  // Synergy Combinations Outputs
  const handleToggleSynergy = (id: string) => {
    if (synergySkills.includes(id)) {
      if (synergySkills.length > 1) {
        setSynergySkills(synergySkills.filter((s) => s !== id))
      }
    } else {
      if (synergySkills.length < 3) {
        setSynergySkills([...synergySkills, id])
      } else {
        // Replace second
        setSynergySkills([synergySkills[0], id])
      }
    }
  }

  const getSynergyProject = () => {
    if (synergySkills.includes("web-dev") && synergySkills.includes("marketing")) {
      return {
        concept: "E-Commerce Landing Page Berkinerja Tinggi",
        description: "Situs web satu halaman yang dioptimalkan untuk mesin pencari (SEO) dengan salinan penjualan (copywriting) persuasif dan formulir pesanan cepat untuk bisnis katering UMKM.",
        impact: "Mendongkrak rasio konversi pesanan katering hingga 45% dibanding pemasaran manual via chat."
      }
    }
    if (synergySkills.includes("web-dev") && synergySkills.includes("analytics")) {
      return {
        concept: "Dasbor Visualisasi Penjualan UMKM",
        description: "Aplikasi web ringkas yang terkoneksi ke spreadsheet bisnis, menampilkan grafik interaktif performa laba rugi bulanan dan preferensi menu pelanggan.",
        impact: "Membantu pemilik kedai kuliner mengambil keputusan bahan baku secara efisien berbasis real-world data."
      }
    }
    if (synergySkills.includes("cloud-tools") && synergySkills.includes("web-dev")) {
      return {
        concept: "Prototipe Aplikasi Web Interaktif Kilat",
        description: "Arsitektur frontend modular modern (React + Tailwind) yang dirakit presisi menggunakan AI Coding Assistant untuk mengekstrak data JSON katalog produk secara dinamis.",
        impact: "Siklus riset dan pengujian konsep bisnis digital dipercepat dari 4 minggu menjadi hanya 3 hari."
      }
    }
    if (synergySkills.includes("marketing") && synergySkills.includes("analytics")) {
      return {
        concept: "Laporan Kampanye Kreatif Multi-Channel",
        description: "Integrasi desain infografis Canva yang diselaraskan dengan metrik performa iklan digital (CTR & CPC) untuk review dewan direksi atau pemilik jenama.",
        impact: "Memperjelas arah alokasi anggaran kampanye berikutnya dengan dasar wawasan estetika visual terbaik."
      }
    }
    if (synergySkills.includes("office") && synergySkills.includes("analytics")) {
      return {
        concept: "Sistem Audit Keuangan & Stok Otomatis",
        description: "Model spreadsheet Microsoft Excel terstruktur yang mengolah database penjualan harian untuk menghasilkan laporan ringkasan otomatis harian.",
        impact: "Menghilangkan kesalahan pencatatan transaksi manual hingga mendekati 0%."
      }
    }
    // Default fallback
    return {
      concept: "Ekosistem Kolaboratif Kampus - UMKM",
      description: "Sinergi platform digital fungsional berbasis awan yang memetakan jejaring bisnis lokal dan memudahkan sirkulasi proposal kemitraan akademik.",
      impact: "Membangun iklim kewirausahaan yang adaptif, tangguh, dan berbasis teknologi terapan."
    }
  }

  const synergyResult = getSynergyProject()

  return (
    <div id="skills-dashboard" className="space-y-8">
      {/* Dynamic Skill Matrix Header */}
      <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Column 1: Radar Chart (Interactive SVG) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-400 bg-emerald-400/5 px-2.5 py-1 rounded-full border border-emerald-500/10 inline-block mb-2">
                Interactive Radar Matrix
              </span>
              <h4 className="text-sm font-bold text-slate-200">
                Visualisasi Profil Kompetensi
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 max-w-xs mx-auto">
                Sentuh titik sudut peta kekuatan untuk melihat sinergi performa.
              </p>
            </div>

            {/* Radar SVG Container */}
            <div className="relative w-[280px] h-[280px] bg-zinc-950/80 rounded-2xl border border-zinc-900/60 flex items-center justify-center p-4">
              <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                {/* 1. Draw grid circles & concentric pentagons */}
                {[25, 50, 75, 100].map((level) => {
                  const points = SKILLS_DATA.map((_, i) => {
                    const { x, y } = getCoordinates(i, level)
                    return `${x},${y}`
                  }).join(" ")
                  return (
                    <polygon
                      key={level}
                      points={points}
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="1"
                      strokeDasharray={level === 100 ? "0" : "2,2"}
                    />
                  )
                })}

                {/* Concentric helper labels */}
                {[50, 100].map((l) => (
                  <text
                    key={l}
                    x={cx + 3}
                    y={cy - (l / 100) * rMax + 3}
                    fill="#475569"
                    fontSize="7"
                    className="font-mono"
                  >
                    {l}%
                  </text>
                ))}

                {/* 2. Draw axis lines */}
                {SKILLS_DATA.map((sk, i) => {
                  const { x, y } = getCoordinates(i, 100)
                  return (
                    <line
                      key={sk.id}
                      x1={cx}
                      y1={cy}
                      x2={x}
                      y2={y}
                      stroke="#1e293b"
                      strokeWidth="1.5"
                    />
                  )
                })}

                {/* 4. Draw Current Proficiency Area (Teal / Fills) */}
                <polygon
                  points={proficiencyPoints}
                  fill="rgba(16, 185, 129, 0.15)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  className="transition-all duration-500 ease-out"
                />

                {/* 5. Intersecting line dots representing the vertices */}
                {SKILLS_DATA.map((sk, i) => {
                  const { x, y } = getCoordinates(i, sk.percentage)
                  const isCurSelected = sk.id === selectedSkillId
                  const isHovered = hoveredIdx === i

                  return (
                    <g key={sk.id} className="cursor-pointer">
                      {/* Pulse ring for selected */}
                      {isCurSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r={7}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Touch target radius */}
                      <circle
                        cx={x}
                        cy={y}
                        r={12}
                        fill="transparent"
                        onMouseEnter={() => setHoveredIdx(i)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={() => setSelectedSkillId(sk.id)}
                      />

                      {/* Interactive Vertex Dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isCurSelected || isHovered ? 5.5 : 4}
                        fill={isCurSelected ? "#10b981" : "#1e293b"}
                        stroke={isCurSelected ? "#34d399" : "#10b981"}
                        strokeWidth={1.5}
                        className="transition-all duration-200"
                        onClick={() => setSelectedSkillId(sk.id)}
                      />
                    </g>
                  )
                })}

                {/* 6. External Text Labels representing skills */}
                {SKILLS_DATA.map((sk, i) => {
                  const { x, y } = getCoordinates(i, 114)
                  const isCurSelected = sk.id === selectedSkillId
                  
                  // Text anchoring and adjustments based on compass position
                  let textAnchor = "middle"
                  let dyOffset = "0.33em"
                  
                  if (i === 0) { // Top
                    dyOffset = "-0.4em"
                  } else if (i === 1) { // Bottom right
                    textAnchor = "start"
                    dyOffset = "0.33em"
                  } else if (i === 2) { // Bottom left
                    textAnchor = "start"
                    dyOffset = "0.8em"
                  } else if (i === 3) { // Bottom axis 2
                    textAnchor = "end"
                    dyOffset = "0.8em"
                  } else { // Top Left
                    textAnchor = "end"
                    dyOffset = "0.33em"
                  }

                  const abbrevName = sk.name.length > 20 ? sk.name.substring(0, 15) + "..." : sk.name

                  return (
                    <text
                      key={sk.id}
                      x={x}
                      y={y}
                      fill={isCurSelected ? "#34d399" : "#94a3b8"}
                      fontSize={isCurSelected ? "9" : "8"}
                      fontWeight={isCurSelected ? "bold" : "normal"}
                      textAnchor={textAnchor}
                      dy={dyOffset}
                      className="font-sans transition-colors duration-200 cursor-pointer select-none"
                      onClick={() => setSelectedSkillId(sk.id)}
                    >
                      {abbrevName}
                    </text>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Column 2: Selected Skill Advanced Detailed Bento */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="border border-zinc-900 rounded-2xl bg-zinc-900/30 p-6 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Title, Level badge, Percent slider */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-teal-400 flex items-center gap-1.5 uppercase bg-teal-500/5 px-2.5 py-1 rounded-md border border-teal-500/10 w-fit">
                    <Award className="h-3 w-3 shrink-0" />
                     {activeSkill.level} • {activeSkill.percentage}% Kemahiran
                  </span>
                  <h4 className="text-lg font-extrabold text-white tracking-tight mt-1.5">
                    {activeSkill.name}
                  </h4>
                </div>
                
                {/* Visual score bar */}
                <div className="flex items-center gap-2 bg-zinc-950/90 py-1.5 px-3 rounded-xl border border-zinc-850">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((step) => {
                      const isActive = activeSkill.percentage >= step * 20
                      return (
                        <div
                          key={step}
                          className={`w-3.5 h-2 rounded-sm transition-all duration-300 ${
                            isActive ? "bg-emerald-500" : "bg-zinc-800"
                          }`}
                        />
                      )
                    })}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-300">
                    {activeSkill.percentage / 10}.0
                  </span>
                </div>
              </div>

              {/* Skill Description */}
              <p className="text-xs text-slate-300 leading-relaxed bg-zinc-950/30 p-4 rounded-xl border border-zinc-900">
                {activeSkill.description}
              </p>

              {/* Tools & Tech Badge Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase">
                  Peralatan & Kerangka Kerja (Tools & Frameworks):
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] px-3 py-1.5 rounded-lg font-semibold bg-zinc-900 border border-zinc-800/80 text-emerald-300 flex items-center gap-1.5"
                    >
                      <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full inline-block" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked Projects Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase">
                    Penerapan Pada Portofolio:
                  </span>
                  <div className="space-y-1.5">
                    {activeSkill.projects.map((proj) => (
                      <div
                        key={proj.name}
                        className="text-xs px-3 py-2 bg-zinc-950/40 rounded-lg border border-zinc-900 flex items-center justify-between text-slate-300 hover:text-white transition"
                      >
                        <span className="font-medium inline-flex items-center gap-1.5 max-w-[180px] truncate">
                          <CheckCircle className="h-3 w-3 text-emerald-400 shrink-0" />
                          {proj.name}
                        </span>
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:underline shrink-0 font-mono text-[9.5px]"
                          >
                            Buka ↗
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Interactive Tool Section: Skills Synergy Simulator */}
      <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-400 fill-emerald-400/10" />
            <h4 className="text-base font-bold text-white">
              Simulator Sinergi Keterampilan (Synergy Planner)
            </h4>
          </div>
          <p className="text-xs text-slate-400">
            Bisnis Digital meletakkan fondasinya pada integrasi berbagai pilar kekuatan. Pilih <strong>dua keahlian kejuruan</strong> di bawah untuk merancang skenario keluaran solusi digital konkret.
          </p>
        </div>

        {/* Skill Selector Badges */}
        <div className="flex flex-wrap gap-2.5 bg-zinc-950/70 p-4 rounded-2xl border border-zinc-900">
          {SKILLS_DATA.map((sk) => {
            const isSelected = synergySkills.includes(sk.id)
            return (
              <button
                key={sk.id}
                onClick={() => handleToggleSynergy(sk.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-emerald-500/15 border border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/5 scale-102"
                    : "bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 text-slate-400 hover:text-slate-300"
                }`}
              >
                {isSelected ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-zinc-700 inline-block" />
                )}
                {sk.name}
              </button>
            )}
          )}
        </div>

        {/* Calculated Simulation Report */}
        <AnimatePresence mode="wait">
          <motion.div
            key={synergySkills.join("-")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/80 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left Col: Concept */}
            <div className="md:col-span-1 space-y-2">
              <span className="text-[10px] font-mono text-yellow-500 font-extrabold uppercase tracking-widest block">
                Skenario Sinergistik
              </span>
              <h5 className="text-sm font-black text-slate-100 flex items-center gap-2">
                <Laptop className="h-4 w-4 text-yellow-400 shrink-0" />
                {synergyResult.concept}
              </h5>
              <div className="pt-2 text-[10px] font-mono text-slate-500 flex flex-wrap gap-1">
                {synergySkills.map((id) => {
                  const s = SKILLS_DATA.find((sk) => sk.id === id)
                  return (
                    <span key={id} className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">
                      #{s?.name.split(" ")[0]}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Middle Col: Description */}
            <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-zinc-850/60 pt-4 md:pt-0 md:pl-6 space-y-1.5">
              <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase block">
                Deskripsi Penerapan Bisnis:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {synergyResult.description}
              </p>
            </div>

            {/* Right Col: Measured Impact */}
            <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-zinc-850/60 pt-4 md:pt-0 md:pl-6 space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider uppercase block">
                Dampak Strategis Terukur:
              </span>
              <div className="p-3.5 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-xs text-emerald-300 font-medium leading-relaxed flex gap-2">
                <TrendingUp className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{synergyResult.impact}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
