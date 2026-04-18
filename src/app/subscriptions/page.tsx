import Link from 'next/link';

const allSubscriptions = [
  { name: 'Netflix', price: '$19.99', category: 'Entertainment', icon: '🍿' },
  { name: 'Spotify', price: '$10.99', category: 'Music', icon: '🎵' },
  { name: 'Adobe CC', price: '$54.99', category: 'Design', icon: '🎨' },
  { name: 'ChatGPT Plus', price: '$20.00', category: 'Productivity', icon: '🤖' },
];

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Mini Nav for this page */}
      <div className="bg-white border-b border-slate-200 px-8 py-4">
        <Link href="/" className="text-blue-600 font-bold text-sm hover:underline">← Dashboard</Link>
      </div>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900">All Subscriptions</h1>
            <p className="text-slate-500 mt-2 font-medium">Manage and track your active recurring payments.</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm">
            + New
          </button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-6 text-xs font-bold text-slate-400 uppercase">Service</th>
                <th className="p-6 text-xs font-bold text-slate-400 uppercase">Category</th>
                <th className="p-6 text-xs font-bold text-slate-400 uppercase">Price</th>
                <th className="p-6 text-xs font-bold text-slate-400 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {allSubscriptions.map((sub) => (
                <tr key={sub.name} className="hover:bg-slate-50/50 transition">
                  <td className="p-6 flex items-center gap-4">
                    <span className="text-2xl">{sub.icon}</span>
                    <span className="font-bold text-slate-800">{sub.name}</span>
                  </td>
                  <td className="p-6 text-sm font-medium text-slate-500">{sub.category}</td>
                  <td className="p-6 font-bold text-slate-900">{sub.price}</td>
                  <td className="p-6">
                    <Link 
                      href={`/subscriptions/${sub.name.toLowerCase().replace(' ', '-')}`}
                      className="text-blue-600 font-bold text-xs hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}