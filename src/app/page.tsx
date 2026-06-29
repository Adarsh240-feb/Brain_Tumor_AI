import Link from "next/link";
import { Brain, Bot, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          BrainTumorAI
        </h1>

        <div className="space-x-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-xl border border-blue-500 hover:bg-blue-500 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Create Account
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
          Brain Tumor Detection
        </h1>

        <p className="text-slate-400 text-xl max-w-2xl mb-10 leading-relaxed">
          Empowering doctors with AI-assisted MRI analysis for early
          and accurate brain tumor detection.
        </p>

        <div className="space-x-6">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Get Started
          </Link>

          <Link
            href="/signup"
            className="border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Register as Doctor
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-slate-100">
              <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              MRI Upload
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Upload MRI scans securely for analysis.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-slate-100">
              <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              AI Prediction
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Detect tumor types using deep learning models.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-slate-100">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              Patient Records
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Maintain history and diagnosis reports efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 BrainTumorAI | Built for Healthcare Professionals
      </footer>
    </div>
  );
}