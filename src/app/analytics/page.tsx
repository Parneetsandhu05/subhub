import Link from 'next/link';

export default function AnalyticsPage() {
  const categories = [
    { name: 'Streaming', amount: '$85.00', color: 'bg-blue-500', width: 'w-[85%]' },
    { name: 'Software', amount: '$45.00', color: 'bg-indigo-500', width: 'w-[45%]' },
    { name: 'Music', amount: '$15.00', color: 'bg-purple-500', width: 'w-[15%]' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-slate-200 px-8 py-4">
        <Link href="/" className="text-blue-600 font-bold text-sm hover:underline">← Dashboard</Link>
      </div>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Spending Analytics</h1>
        <p className="text-slate-500 font-medium mb-10">Detailed breakdown of your subscription ecosystem.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Category Breakdown */}
          <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
            <h3 className="text-lg font-bold mb-6">Spend by Category</h3>
            <div className="space-y-6">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-slate-700">{cat.name}</span>
                    <span className="font-medium text-slate-500">{cat.amount}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className={`${cat.color} h-full ${cat.width} rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Trend Chart */}
          <div className="lg:col-span-2 bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-white">
            <h3 className="text-lg font-bold mb-8 text-blue-400">Monthly Spending Trend</h3>
            <div className="h-64 w-full flex items-end justify-between gap-4">
              {[50, 65, 40, 85, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl transition-all hover:brightness-125" 
                    style={{ height: `${h}%` }}
                  ></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Insights Card */}
          <div className="lg:col-span-3 bg-indigo-600 p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Annual Savings Opportunity</h3>
              <p className="text-indigo-100 mt-2">You could save up to <span className="font-black text-white">$240.00/year</span> by switching to annual billing on 3 services.</p>
            </div>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-black text-sm hover:bg-indigo-50 transition">
              Optimize Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}