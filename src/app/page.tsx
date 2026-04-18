'use client';

import { useState } from 'react';
import Link from 'next/link';
import AddSubscriptionModal from '@/components/AddSubscriptionModal';

export default function Home() {
  // 1. Setup State for the Modal and the Subscriptions List
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([
    { name: 'Netflix', price: '$19.99', date: 'In 2 days', icon: '🍿', color: 'bg-red-50' },
    { name: 'Spotify', price: '$10.99', date: 'In 5 days', icon: '🎵', color: 'bg-green-50' },
    { name: 'Adobe CC', price: '$54.99', date: 'May 1st', icon: '🎨', color: 'bg-orange-50' },
  ]);

  // 2. Logic to add a new subscription to the list
  const addSubscription = (newSub: any) => {
    setSubscriptions([...subscriptions, newSub]);
  };

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
        {/* Navigation Header */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <div className="flex items-center gap-10">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SubHub
              </span>
              <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
                <button className="text-blue-600 border-b-2 border-blue-600 py-5">Overview</button>
                <Link href="/subscriptions" className="hover:text-slate-800 py-5 transition">Subscriptions</Link>
                <Link href="/analytics" className="hover:text-slate-800 py-5 transition">Analytics</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                PS
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all active:scale-95"
              >
                + Add Subscription
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-10">
          <header className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500 mt-2 font-medium">Welcome back, Parneet. Here’s your subscription health today.</p>
          </header>

          {/* Top Row: Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Monthly</p>
              <h2 className="text-4xl font-black mt-2 text-slate-900">$145.00</h2>
              <div className="mt-4 flex items-center text-green-500 text-xs font-bold bg-green-50 w-fit px-2 py-1 rounded-lg">
                ↓ 4% vs last month
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Yearly Projection</p>
              <h2 className="text-4xl font-black mt-2 text-slate-900">$1,740</h2>
              <p className="text-slate-400 text-[10px] mt-4 font-medium italic">Based on current active cycles</p>
            </div>

            <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Active Services</p>
                <h2 className="text-4xl font-black mt-2">{subscriptions.length}</h2>
                <button className="mt-4 text-[10px] bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full font-bold transition">
                  View All →
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dynamic Renewals Section */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Upcoming Renewals</h3>
                <span className="text-blue-600 text-xs font-bold cursor-pointer hover:underline">See Calendar</span>
              </div>
              
              <div className="space-y-4">
                {/* 3. We use the 'subscriptions' state variable here */}
                {subscriptions.map((sub, index) => (
                  <Link 
                    href={`/subscriptions/${sub.name.toLowerCase().replace(' ', '-')}`} 
                    key={index}
                    className="block outline-none"
                  >
                    <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group cursor-pointer border border-transparent hover:border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${sub.color || 'bg-blue-50'} rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition`}>
                          {sub.icon}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{sub.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{sub.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">{sub.price}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Monthly</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>  
            </div>

            {/* Analytics Visualizer */}
            <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-white">
              <h3 className="text-xl font-bold mb-8">Spending Insights</h3>
              <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="flex-1 group relative">
                    <div 
                      className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-400 cursor-pointer" 
                      style={{ height: `${h}%` }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition shadow-lg">
                      ${h * 2}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs font-medium text-slate-400">🔥 Pro Tip: You have 3 unused streaming services. Cancelling them could save you $34/mo.</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 4. Pass the add function to the Modal */}
      <AddSubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={addSubscription}
      />
    </>
  );
}