'use client';

export default function AddSubscriptionModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-slate-900">Add New Service</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">×</button>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Service Name</label>
            {/* Added 'text-slate-900' and 'placeholder:text-slate-400' below */}
            <input 
              type="text" 
              placeholder="e.g. Disney+" 
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 placeholder:text-slate-400" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Monthly Cost</label>
              {/* Added 'text-slate-900' and 'placeholder:text-slate-400' below */}
              <input 
                type="text" 
                placeholder="$0.00" 
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 placeholder:text-slate-400" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Billing Date</label>
              {/* Added 'text-slate-900' below */}
              <input 
                type="date" 
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900" 
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition active:scale-95">
            Confirm Subscription
          </button>
        </form>
      </div>
    </div>
  );
}