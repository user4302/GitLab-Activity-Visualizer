
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans selection:bg-emerald-500/30">
      {/* Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 tracking-tight">
            GitLab Activity Visualizer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Generate a beautiful contribution calendar for your GitLab profile.
            Seamlessly embed it in your GitHub README or personal portfolio.
          </p>
        </div>

        {/* Dynamic Client Component placeholder - I'll create a Client component next */}
        <div className="bg-[#161b22]/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <CalendarGenerator />
        </div>

        {/* Instructions */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#161b22]/30 border border-gray-800">
            <h3 className="text-emerald-400 font-semibold mb-2">1. Enter Username</h3>
            <p className="text-sm text-gray-500">Provide your GitLab username to fetch your activity data.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#161b22]/30 border border-gray-800">
            <h3 className="text-blue-400 font-semibold mb-2">2. Customize Theme</h3>
            <p className="text-sm text-gray-500">Choose from various color palettes to match your profile style.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#161b22]/30 border border-gray-800">
            <h3 className="text-purple-400 font-semibold mb-2">3. Embed Anywhere</h3>
            <p className="text-sm text-gray-500">Copy the Markdown link and paste it into your profile README.</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 text-center py-12 text-gray-600 text-sm border-t border-gray-900 mt-20">
        Built with Next.js and Tailwind CSS • Served via Serverless Functions
      </footer>
    </div>
  );
}

// Inline Client Component for simplicity in this file, but normally I'd separate it
function CalendarGenerator() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md space-y-6">
        <ClientSideLogic />
      </div>
    </div>
  );
}

// I'll put the actual client logic in src/components/Generator.tsx and import it here
import { Generator } from '@/components/Generator';
function ClientSideLogic() {
  return <Generator />;
}
