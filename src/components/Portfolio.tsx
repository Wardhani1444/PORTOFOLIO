import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Sliders,
  Laptop,
  Cpu,
  Send,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Clock,
  Sparkles,
  Linkedin,
  MapPin,
  CheckCircle,
  Briefcase,
  Trash2,
  Layers,
  Award,
  BookMarked,
  Activity,
  HeartHandshake,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react"

import { WebGLShader } from "./ui/web-gl-shader"
import SkillsDashboard from "./SkillsDashboard"
import { LiquidButton, MetalButton } from "./ui/liquid-glass-button"
const profileImg = new URL("../assets/images/regenerated_image_1781220060516.jpg", import.meta.url).href

// Types
interface CustomMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}

interface Project {
  id: string
  title: string
  description: string
  category: "IoT" | "Digital Platform" | "Social Good" | "SaaS Web" | "WordPress CMS"
  difficulty: "default" | "primary" | "success" | "gold" | "bronze"
  tags: string[]
  metrics: string
  shaderPreset: {
    xScale: number
    yScale: number
    distortion: number
    speed: number
  }
  link?: string
}

interface Organization {
  role: string
  orgName: string
  location: string
  date: string
  bullets: string[]
}

export default function Portfolio() {
  // Shader params
  const [xScale, setXScale] = useState(1.1)
  const [yScale, setYScale] = useState(0.4)
  const [distortion, setDistortion] = useState(0.08)
  const [speed, setSpeed] = useState(0.012)
  const [showTuner, setShowTuner] = useState(false)

  // System status
  const [currentTime, setCurrentTime] = useState("")
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "skills" | "organization" | "contact">("projects")

  // Contact State
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formSubject, setFormSubject] = useState("Collaboration")
  const [formMessage, setFormMessage] = useState("")
  const [messages, setMessages] = useState<CustomMessage[]>([
    {
      id: "1",
      name: "Dosen Pembimbing UNESA",
      email: "advisor@unesa.ac.id",
      subject: "Academic Research Proposal",
      message: "Luar biasa! Konsep produk digital Sajikita dan Sakana Anda sangat solutif untuk UMKM Jawa Timur. Mari kembangkan lebih lanjut menjadi paper penelitian.",
      timestamp: "2026-06-11 14:15"
    }
  ])
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Projects list matching her precise CV
  const projects: Project[] = [
    {
      id: "sakana",
      title: "SAKANA • Smart Fish Feeder",
      description: "Pemberi pakan otomatis berbasis IoT yang membantu pemilik ikan hias mengelola pemberian pakan secara terjadwal & otomatis melalui integrasi sistem digital cerdas.",
      category: "IoT",
      difficulty: "gold",
      tags: ["IoT Hardware Integration", "System Architecture", "User Experience Analysis", "Business Concept"],
      metrics: "Otomatis & Terjadwal",
      shaderPreset: { xScale: 2.2, yScale: 0.9, distortion: 0.12, speed: 0.02 }
    },
    {
      id: "sajikita",
      title: "SAJIKITA • Student Catering Deck",
      description: "Platform digital katering mahasiswa yang memudahkan pemesanan makanan sehat secara praktis & terjangkau dengan menghubungkan mahasiswa ke UMKM kuliner lokal sekitar kampus.",
      category: "Digital Platform",
      difficulty: "bronze",
      tags: ["Web-Based Ordering", "UMKM Business Model", "Market Research", "Product Strategy"],
      metrics: "Pemberdayaan UMKM Kuliner",
      shaderPreset: { xScale: 0.5, yScale: 0.3, distortion: 0.25, speed: 0.03 },
      link: "https://sajikita.vercel.app/"
    },
    {
      id: "ecocare",
      title: "ECOCARE • Crowd Donation Platform",
      description: "Platform crowdfunding donasi dan relawan yang memfasilitasi penggalangan dana digital terencana guna menggerakkan aksi sosial & program lingkungan secara transparan.",
      category: "Social Good",
      difficulty: "primary",
      tags: ["Crowdfunding Flow", "Volunteer Management", "Access Analysis", "Community Support"],
      metrics: "Transparan & Kolaboratif",
      shaderPreset: { xScale: 1.5, yScale: 0.8, distortion: 0.02, speed: 0.008 },
      link: "https://ecocare-chi.vercel.app/"
    },
    {
      id: "vestiary",
      title: "VESTIARY • Digital Wardrobe (WordPress)",
      description: "Portal pengelolaan wardrobe pribadi berbasis WordPress untuk mengorganisasi koleksi busana pribadi dan menyusun rencana outfit harian secara digital, interaktif & efisien.",
      category: "WordPress CMS",
      difficulty: "success",
      tags: ["WordPress", "Wardrobe Cataloging", "Digital Experience", "Web Design"],
      metrics: "Efisiensi Tata Busana Digital",
      shaderPreset: { xScale: 0.8, yScale: 0.15, distortion: 0.01, speed: 0.004 },
      link: "https://drive.google.com/file/d/1QJf_zsye4fwhNjOLQoPNDEM6DiP7-z1I/view?usp=drive_link"
    }
  ]

  // Organizations list matching her CV
  const organizations: Organization[] = [
    {
      role: "Liaison Officer (LO)",
      orgName: "Digi Sport Competition",
      location: "Surabaya",
      date: "Dec 2025",
      bullets: [
        "Mengelola komunikasi dan koordinasi intensif antara panitia penyelenggara dan seluruh tim peserta selama kompetisi berlangsung.",
        "Menyampaikan informasi krusial secara real-time terkait jadwal pertandingan, regulasi resmi, serta kebutuhan teknis penting lainnya.",
        "Memastikan kelancaran operasional peserta dan proaktif menyelesaikan berbagai kendala darurat yang timbul di lapangan."
      ]
    },
    {
      role: "Staff Kesekretariatan (Kesekre)",
      orgName: "Digital Business Art and Sport FEB UNESA",
      location: "Surabaya",
      date: "Oct 2025",
      bullets: [
        "Mengelola segala bentuk administrasi, surat-menyurat resmi, serta dokumentasi kegiatan pada kompetisi seni dan olahraga mahasiswa Bisnis Digital.",
        "Mengorganisir database peserta terstruktur serta mendukung kelancaran seluruh alur pendaftaran peserta perlombaan.",
        "Menyusun arsip digital dokumen penting guna mendukung koordinasi operasional antar divisi agar berjalan efektif dan transparan."
      ]
    },
    {
      role: "Staff Transkapman (Transportasi, Perlengkapan, & Keamanan)",
      orgName: "Welcome Party X Bazar",
      location: "Surabaya",
      date: "Aug 2025",
      bullets: [
        "Mengelola pemenuhan kebutuhan sarana transportasi, ketersediaan perlengkapan logistik, serta pengaturan sistem keamanan acara orientasi.",
        "Memastikan seluruh fasilitas fisik dan peralatan pendukung siap pakai guna menjamin kelancaran jalannya seluruh rangkaian pertunjukan pasca bazar.",
        "Bekerja sama dengan tim internal dalam menjaga ketertiban, kondusifitas, dan keselamatan seluruh mahasiswa baru selama orientasi."
      ]
    },
    {
      role: "Staff Perlengkapan",
      orgName: "Digicare",
      location: "Surabaya",
      date: "Mar 2025",
      bullets: [
        "Bertanggung jawab atas pengelolaan, pengecekan, serta penyiapan seluruh kelengkapan logistik selama program penggalangan dan distribusi donasi.",
        "Memastikan ketersediaan sarana operasional di lapangan untuk distribusi bantuan kemanusiaan serta meminimalisir kesalahan logistik.",
        "Mendukung proses pengepakan barang bantuan secara rapi dan sistematis agar disalurkan secara tepat sasaran kepada penerima manfaat."
      ]
    }
  ]

  // Update Clock (Sidoarjo / Surabaya WIB - Western Indonesian Time / UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " WIB")
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Smooth scroll to top of page on active tab change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [activeTab])

  // Apply project-specific background vibes
  const applyPreset = (preset: Project["shaderPreset"]) => {
    setXScale(preset.xScale)
    setYScale(preset.yScale)
    setDistortion(preset.distortion)
    setSpeed(preset.speed)
  }

  const resetShader = () => {
    setXScale(1.1)
    setYScale(0.4)
    setDistortion(0.08)
    setSpeed(0.012)
  }

  // Handle Send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName || !formEmail || !formMessage) return

    const newMessage: CustomMessage = {
      id: Date.now().toString(),
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 16)
    }

    setMessages([newMessage, ...messages])
    setFormName("")
    setFormEmail("")
    setFormMessage("")
    setSubmitSuccess(true)
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  // Delete message from ledger
  const deleteMessage = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id))
  }

  return (
    <div className="relative min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* 3D WebGL Shader Background */}
      <WebGLShader xScale={xScale} yScale={yScale} distortion={distortion} speed={speed} />

      {/* Dark overlay with subtle noise context */}
      <div className="fixed inset-0 bg-black/82 backdrop-blur-[1.5px] z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-col min-h-screen">
        
        {/* Header Ribbon */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-8 mt-2">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Layers className="h-5 w-5 text-zinc-900 font-bold" />
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-20 animate-pulse" />
            </div>
            <div>
              <h2 className="text-md md:text-lg font-black tracking-tight text-white flex items-center gap-2">
                DAVINA AULIA W. T.
                <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400 font-mono tracking-wider">BISNIS DIGITAL</span>
              </h2>
              <p className="text-xs text-slate-400 font-medium">Universitas Negeri Surabaya (UNESA)</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex flex-wrap items-center justify-center gap-1 bg-black/80 border border-zinc-900 p-1.5 rounded-2xl md:rounded-full backdrop-blur-md">
            {(["about", "projects", "skills", "organization", "contact"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl md:rounded-full capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-slate-100 text-zinc-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab === "organization" ? "Organisasi" : tab}
              </button>
            ))}
          </nav>

          {/* Local Status Indicator */}
          <div className="hidden lg:flex items-center gap-4 bg-zinc-950/40 border border-zinc-900 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>Sidoarjo, ID</span>
            </div>
            <div className="h-3 w-px bg-zinc-800" />
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{currentTime || "Loading WIB..."}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Shader Parameter Tuner */}
        <AnimatePresence mode="wait">
          {showTuner && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="p-5 bg-zinc-950/90 border border-zinc-900 rounded-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sliders className="h-4 w-4 text-cyan-400" />
                      WebGL Fluid Signal Tuner
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      Earthy digital business vibes. Modulates math vectors of the fragment shader variables in real-time.
                    </p>
                  </div>
                  <button
                    onClick={resetShader}
                    className="mt-4 w-full py-1.5 bg-zinc-900 hover:bg-zinc-800 text-[10px] font-mono rounded text-slate-300 transition"
                  >
                    Reset Preset (1.1, 0.4, 0.08)
                  </button>
                </div>

                <div className="space-y-2 md:col-span-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">X Frequency Wave</span>
                    <span className="text-cyan-400">{xScale.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="4.0"
                    step="0.1"
                    value={xScale}
                    onChange={(e) => setXScale(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-zinc-800 h-1 rounded-sm appearance-none cursor-pointer"
                  />
                  <p className="text-[9px] text-zinc-500 font-mono">Governs density of horizontal light waves.</p>
                </div>

                <div className="space-y-2 md:col-span-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Y Wave Amplitude</span>
                    <span className="text-emerald-400">{yScale.toFixed(2)}y</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="1.5"
                    step="0.05"
                    value={yScale}
                    onChange={(e) => setYScale(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 bg-zinc-800 h-1 rounded-sm appearance-none cursor-pointer"
                  />
                  <p className="text-[9px] text-zinc-500 font-mono">Governs height threshold of the noise wave.</p>
                </div>

                <div className="space-y-2 md:col-span-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Chromatic Warp</span>
                    <span className="text-purple-400">{distortion.toFixed(3)}d</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="0.5"
                    step="0.01"
                    value={distortion}
                    onChange={(e) => setDistortion(parseFloat(e.target.value))}
                    className="w-full accent-purple-400 bg-zinc-800 h-1 rounded-sm appearance-none cursor-pointer"
                  />
                  <p className="text-[9px] text-zinc-500 font-mono">Distorts RGB rays relative to current aspect.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Sections Layout */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            
            {/* ABOUT TAB */}
            {activeTab === "about" && (
              <motion.section
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Visual Bio Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column Profile Info */}
                  <div className="md:col-span-4 bg-zinc-950/50 border border-zinc-900 p-6 rounded-3xl backdrop-blur-md flex flex-col items-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border border-emerald-500/20 mb-4 shadow-xl">
                      <img
                        src={profileImg}
                        alt="Davina Aulia Wardhani Triatno"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent animate-pulse" />
                    </div>

                    <h3 className="font-extrabold text-white text-lg text-center leading-tight">Davina Aulia W. T.</h3>
                    <p className="text-xs text-slate-400 text-center mt-2 font-mono">Bisnis Digital Enthusiast</p>
                    
                    <div className="flex gap-2.5 mt-5 w-full">
                      <a 
                        href="https://www.linkedin.com/in/davina-auliaa-590982404" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center justify-center gap-1.5 px-4 py-2 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-xs font-semibold text-slate-200 transition w-full"
                      >
                        <Linkedin className="h-3.5 w-3.5 text-blue-400" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>

                    <div className="w-full mt-6 pt-6 border-t border-zinc-900 space-y-3.5 text-xs text-slate-400">
                      <div className="flex justify-between font-mono">
                        <span>Lembaga:</span>
                        <span className="text-white">UNESA</span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Studi:</span>
                        <span className="text-white font-sans text-right">S1 Bisnis Digital</span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>IPK / GPA:</span>
                        <span className="text-emerald-400 font-bold">3.70 / 4.00</span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Sektor:</span>
                        <span className="text-white text-right">Analisis & Transformasi</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Bio & Credentials */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="bg-zinc-950/50 border border-zinc-900 p-8 rounded-3xl backdrop-blur-md space-y-5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono font-semibold">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Profil Ringkas</span>
                      </div>
                      <h1 className="text-2xl md:text-3.5xl font-black tracking-tight text-white leading-tight">
                        Mengakselerasi Nilai Bisnis Melalui Inovasi Digital Berkelanjutan
                      </h1>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Saya adalah <strong>Mahasiswa Aktif Program Studi Bisnis Digital Universitas Negeri Surabaya</strong> yang memiliki kemampuan komunikasi, analisis, dan kerja sama tim yang baik. 
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Berpengalaman matang di kegiatan organisasi kemahasiswaan, kepanitiaan penting, serta perancangan proyek berbasis teknologi yang melatih penyelesaian masalah secara komprehensif. Saya sangat tertarik untuk mengembangkan karier di bidang <strong>analisis bisnis, konsultasi bisnis, serta transformasi digital</strong>.
                      </p>
                    </div>

                    {/* Timeline Pendidikan */}
                    <div className="bg-zinc-950/50 border border-zinc-900 p-8 rounded-3xl backdrop-blur-md space-y-6">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-cyan-400" />
                        Riwayat Pendidikan Resmi
                      </h3>

                      <div className="space-y-6 relative border-l border-zinc-800 pl-5 ml-1.5">
                        
                        {/* UNESA */}
                        <div className="relative">
                          <div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950" />
                          <div className="flex justify-between items-start gap-3 flex-wrap">
                            <div>
                              <h4 className="font-extrabold text-slate-100 text-sm">Universitas Negeri Surabaya</h4>
                              <p className="text-xs text-slate-400">Bachelor of Program Studi Bisnis Digital (S1)</p>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md font-bold">
                              Agu 2024 - Jul 2027 (Expected)
                            </span>
                          </div>
                          <p className="text-xs text-slate-400/80 mt-2">
                            Mendalami struktur ekonomi digital, perumusan model bisnis, analisis data pasar, digital marketing strategis, serta manajemen produk modern. IPK saat ini <strong>3.70 / 4.00</strong>.
                          </p>
                        </div>

                        {/* HIGH SCHOOL */}
                        <div className="relative">
                          <div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full bg-zinc-650 bg-zinc-600 border-2 border-zinc-950" />
                          <div className="flex justify-between items-start gap-3 flex-wrap">
                            <div>
                              <h4 className="font-extrabold text-slate-200 text-sm">SMAN 1 Krian, Sidoarjo</h4>
                              <p className="text-xs text-slate-400">Senior High School alumnus</p>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                              Jul 2021 - Jul 2024
                            </span>
                          </div>
                          <p className="text-xs text-slate-400/80 mt-2">
                            Aktif mengeksplorasi ilmu dasar tata niaga, kepemimpinan siswa, serta pengelolaan logistik skala kecil di kurikulum lokal.
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <motion.section
                key="projects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Hero Greeting Panel */}
                <div className="relative border border-zinc-900 p-2.5 w-full mx-auto max-w-4xl bg-zinc-950/35 rounded-3xl backdrop-blur-md">
                  <main className="relative border border-zinc-900 py-12 px-6 overflow-hidden rounded-2.5xl rounded-2xl bg-zinc-950/80">
                    <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-teal-500/5 via-transparent to-transparent pointer-events-none" />
                    
                    <h1 className="mb-4 text-white text-center text-4.5xl font-black tracking-tighter md:text-6.5xl leading-none">
                      Turning Ideas Into Digital Solutions
                    </h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-center text-xs md:text-sm leading-relaxed">
                      Mahasiswa Bisnis Digital Universitas Negeri Surabaya yang berfokus pada business analysis, transformasi digital, dan inovasi berbasis teknologi.
                    </p>

                    <div className="my-6 flex items-center justify-center gap-2 bg-zinc-900/60 border border-zinc-800/80 w-fit mx-auto px-4 py-1.5 rounded-full">
                      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      </span>
                      <p className="text-[11px] font-bold text-emerald-400 font-mono">Terbuka Untuk Program Magang & Proyek</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                      <LiquidButton
                        onClick={() => setActiveTab("contact")}
                        className="text-white border border-zinc-800 hover:border-cyan-400 rounded-full text-xs font-semibold"
                        size="lg"
                      >
                        Hubungi Saya
                      </LiquidButton>

                      <button
                        onClick={() => setShowTuner(!showTuner)}
                        className="px-5 py-2.5 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 text-slate-300 hover:text-white rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
                      >
                        <Sliders className="h-4 w-4 text-cyan-400" />
                        {showTuner ? "Sembunyikan WebGL Tuner" : "Kustomisasi Background"}
                      </button>
                    </div>
                  </main>
                </div>

                {/* Grid Header Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-emerald-400" />
                      Portofolio Inisiasi Proyek Teknologi
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Klik "Sinkronkan Shader" di setiap kartu untuk menyelaraskan frekuensi dinamika visual latar belakang.
                    </p>
                  </div>
                  <div className="text-[10px] bg-emerald-500/5 border border-emerald-500/25 px-3 py-1 rounded text-emerald-400 font-mono">
                    Dynamic Presets Active
                  </div>
                </div>

                {/* Bento Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="group relative bg-zinc-950/45 hover:bg-zinc-950/90 border border-zinc-900 hover:border-zinc-800 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/5"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold tracking-wider font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                            {project.category}
                          </span>
                          
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-slate-500">Vibe:</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {project.link ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 hover:underline"
                              >
                                {project.title}
                                <ExternalLink className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              </a>
                            ) : (
                              project.title
                            )}
                          </h4>
                          <p className="text-[12px] text-slate-300 mt-3 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9.5px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-850/40 text-slate-400 font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Info inside Card */}
                      <div className="pt-5 mt-6 border-t border-zinc-900/60 flex items-center justify-between gap-4 flex-wrap">
                        <span className="text-[11px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                          <CheckCircle className="h-3.5 w-3.5" />
                          {project.metrics}
                        </span>

                        <div className="flex gap-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-[10.5px] font-bold text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-500/20 hover:border-emerald-500/35 transition flex items-center gap-1 cursor-pointer"
                            >
                              Kunjungi <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          <button
                            onClick={() => applyPreset(project.shaderPreset)}
                            className="bg-zinc-900/80 hover:bg-zinc-800 text-[10.5px] font-bold text-slate-300 px-3 py-1.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition cursor-pointer"
                          >
                            Sinkronkan Shader
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <motion.section
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <SkillsDashboard />
              </motion.section>
            )}

            {/* ORGANIZATION TAB */}
            {activeTab === "organization" && (
              <motion.section
                key="organization"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-1 max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Award className="h-5 w-5 text-indigo-400" />
                      Pengalaman Organisasi & Kepanitiaan
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Keterlibatan operasional aktif secara kolaboratif mengelola acara, kesekretariatan resmi, dan koordinasi internal.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {organizations.map((org, index) => (
                      <div
                        key={index}
                        className="p-6 bg-zinc-950/65 border border-zinc-900 rounded-2xl backdrop-blur-md space-y-4 shadow-lg hover:border-zinc-800 transition"
                      >
                        <div className="flex justify-between items-start gap-4 flex-wrap">
                          <div>
                            <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {org.role}
                            </span>
                            <h4 className="font-extrabold text-sm text-white mt-1.5">{org.orgName}</h4>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-semibold text-slate-400 block font-mono">{org.date}</span>
                            <span className="text-[11px] text-zinc-500 block font-mono mt-0.5">{org.location}</span>
                          </div>
                        </div>

                        <ul className="list-disc list-inside space-y-2 text-xs text-slate-300">
                          {org.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              <span className="text-slate-300">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* CONTACT TAB */}
            {activeTab === "contact" && (
              <motion.section
                key="contact"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.05,
                    }
                  }
                }}
                className="space-y-8"
              >
                <div className="max-w-xl mx-auto space-y-8">
                  {/* Title Header */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
                    }}
                    className="text-center space-y-2"
                  >
                    <h3 className="text-2xl font-black text-white flex items-center justify-center gap-2">
                      <MessageSquare className="h-6 w-6 text-emerald-400" />
                      Hubungi Saya
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed text-center">
                      Saya selalu terbuka untuk berdiskusi mengenai proyek transformasi digital, riset bisnis, magang, maupun kolaborasi profesional lainnya.
                    </p>
                  </motion.div>

                  {/* Direct Contact Info (Highly Beautiful Card, Centered) */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                          type: "spring",
                          stiffness: 70,
                          damping: 14,
                          staggerChildren: 0.08,
                          delayChildren: 0.15
                        } 
                      }
                    }}
                    className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-36 w-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />
                    
                    <div className="space-y-6">
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.35 } }
                        }}
                        className="space-y-2 text-center md:text-left"
                      >
                        <span className="text-[10px] uppercase font-mono font-extrabold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md inline-block">
                          Kontak Langsung
                        </span>
                        <h4 className="text-lg font-black text-white tracking-tight leading-snug">
                          Davina Aulia Wardhani Triatno
                        </h4>
                        <p className="text-xs text-slate-400">
                          S1 Bisnis Digital • Universitas Negeri Surabaya (UNESA)
                        </p>
                      </motion.div>

                      {/* Contact details with high contrast */}
                      <div className="space-y-4 pt-2">
                        {/* Phone Option */}
                        <motion.a
                          variants={{
                            hidden: { opacity: 0, x: -15 },
                            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                          }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          href="https://wa.me/6282131827266"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3.5 p-3.5 bg-zinc-900/60 hover:bg-emerald-500/10 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl transition group/item"
                        >
                          <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/item:scale-105 transition-all">
                            <Phone className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <span className="text-[9px] uppercase font-mono text-slate-500 block leading-none">WhatsApp / Telepon</span>
                            <span className="text-xs text-slate-200 group-hover/item:text-emerald-400 font-bold block mt-1">+62 821-3182-7266</span>
                          </div>
                        </motion.a>

                        {/* Email Option */}
                        <motion.a
                          variants={{
                            hidden: { opacity: 0, x: -15 },
                            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                          }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          href="mailto:davvvine@gmail.com"
                          className="flex items-center gap-3.5 p-3.5 bg-zinc-900/60 hover:bg-cyan-500/10 border border-zinc-800 hover:border-cyan-500/30 rounded-2xl transition group/item"
                        >
                          <div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/item:scale-105 transition-all">
                            <Mail className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <span className="text-[9px] uppercase font-mono text-slate-500 block leading-none">Email Resmi</span>
                            <span className="text-xs text-slate-200 group-hover/item:text-cyan-400 font-bold block mt-1 select-all">davvvine@gmail.com</span>
                          </div>
                        </motion.a>

                        {/* LinkedIn Option */}
                        <motion.a
                          variants={{
                            hidden: { opacity: 0, x: -15 },
                            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                          }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          href="https://www.linkedin.com/in/davina-auliaa-590982404"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3.5 p-3.5 bg-zinc-900/60 hover:bg-blue-500/10 border border-zinc-800 hover:border-blue-500/30 rounded-2xl transition group/item"
                        >
                          <div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:scale-105 transition-all">
                            <Linkedin className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <span className="text-[9px] uppercase font-mono text-slate-500 block leading-none">LinkedIn Professional</span>
                            <span className="text-xs text-slate-200 group-hover/item:text-blue-400 font-bold block mt-1">davina-auliaa-590982404</span>
                          </div>
                        </motion.a>
                      </div>
                    </div>

                    {/* Micro location stamp */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-center gap-2 text-xs font-mono text-slate-500"
                    >
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Sidoarjo, Jawa Timur, Indonesia</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.section>
            )}

          </AnimatePresence>
        </main>

        {/* Action Ribbon Footer */}
        <footer className="border-t border-zinc-900 pt-6 mt-12 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-1 text-zinc-400 text-center md:text-left leading-relaxed">
            <span>© 2026 Interactive WebGL Portfolio. Disesuaikan untuk</span>
            <span className="text-slate-300 font-bold">Davina Aulia Wardhani Triatno</span>
            <span className="text-zinc-600 font-bold">•</span>
            <span>Program S1 Bisnis Digital UNESA Indonesia</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400 font-mono text-[10.5px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dynamic Shader Active
            </span>
          </div>
        </footer>

      </div>
    </div>
  )
}
