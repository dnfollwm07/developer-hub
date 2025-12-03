import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Briefcase, Sparkles } from 'lucide-react';

export default function Home() {
  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 mb-8">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Welcome to My Developer Hub
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                <span className="block">Hello, I&apos;m</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Jing-Ning Su
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-4 max-w-3xl mx-auto">
                You can call me <span className="font-semibold text-indigo-600 dark:text-indigo-400">Michelle</span>
              </p>
              
              <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-2xl mx-auto">
                A passionate developer sharing my journey through code, projects, and technical insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/personal"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/notes"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
                >
                  View Notes
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Explore My Work
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Discover my projects, technical notes, and professional journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/personal"
                className="group relative p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">About Me</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Learn about my education, work experience, and professional background
                  </p>
                </div>
              </Link>
              
              <Link
                href="/projects"
                className="group relative p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">My Projects</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Explore my portfolio of projects and technical implementations
                  </p>
                </div>
              </Link>
              
              <Link
                href="/notes"
                className="group relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Technical Notes</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Browse my collection of technical notes and learning resources
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
} 