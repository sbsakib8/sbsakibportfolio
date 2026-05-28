"use client";

import { useEffect, useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Globe, 
  TrendingUp,
  Activity,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    projects: 0,
    experiences: 0,
    skills: 0,
    services: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projRes, expRes, skillRes, servRes] = await Promise.all([
          fetch('/api/data/projects'),
          fetch('/api/data/experiences'),
          fetch('/api/data/skills'),
          fetch('/api/data/services'),
        ]);

        const [projData, expData, skillData, servData] = await Promise.all([
          projRes.json(),
          expRes.json(),
          skillRes.json(),
          servRes.json(),
        ]);

        setStats({
          projects: projData.data?.length || 0,
          experiences: expData.data?.length || 0,
          skills: skillData.data?.length || 0,
          services: servData.data?.length || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: 'Total Projects', value: stats.projects, icon: Briefcase, color: 'from-blue-500 to-cyan-500', href: '/dashboard/projects' },
    { title: 'Experiences', value: stats.experiences, icon: GraduationCap, color: 'from-purple-500 to-pink-500', href: '/dashboard/experiences' },
    { title: 'Skills Listed', value: stats.skills, icon: Code2, color: 'from-green-500 to-emerald-500', href: '/dashboard/skills' },
    { title: 'Services Offered', value: stats.services, icon: Globe, color: 'from-orange-500 to-yellow-500', href: '/dashboard/services' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-gray-400">Welcome back to your portfolio management center.</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
          <UserCheck className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium text-white">Admin Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Activity className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  {loading ? <span className="animate-pulse bg-slate-700 text-transparent rounded">00</span> : stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.title}</div>
              </div>
              <div className="mt-4 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.color} w-3/4 rounded-full opacity-50`}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
        <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Ready to update your portfolio?</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Use the sidebar navigation to start adding or editing your projects, skills, and experiences. All changes will be reflected immediately on your live website.
        </p>
      </div>
    </div>
  );
}
