import Link from 'next/link';

// 1. Add 'async' before the function name
export default async function SubscriptionDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> // 2. Update the type to a Promise
}) {
  
  // 3. Await the params before using them
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm font-bold text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
        
        <div className="bg-white mt-6 p-10 rounded-[2rem] border border-slate-100 shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-4xl">🍿</span>
              <h1 className="text-4xl font-black text-slate-900 mt-4 capitalize">
                {/* 4. Use the unwrapped 'id' here */}
                {id.replace('-', ' ')}
              </h1>
              <p className="text-slate-500 font-medium">Subscription Details & History</p>
            </div>
            <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold">
              Active
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 border-t pt-10">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Monthly Cost</p>
              <p className="text-2xl font-black text-slate-900">$19.99</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Next Billing Date</p>
              <p className="text-2xl font-black text-slate-900">April 24, 2026</p>
            </div>
          </div>

          <button className="w-full mt-10 bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
}