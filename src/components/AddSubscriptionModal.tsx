'use client';
import { useState } from 'react';

// 1. We added 'onAdd' to the list of allowed props here
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (sub: any) => void; 
}

export default function AddSubscriptionModal({ isOpen, onClose, onAdd }: ModalProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [billingDate, setBillingDate] = useState('');
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the object to send back to the dashboard
    const newEntry = {
      name: name,
      price: `$${price}`,
      date: billingDate ? `Next: ${billingDate}` : 'No date set',
      icon: '🛡️', 
      color: 'bg-blue-50'
    };

    onAdd(newEntry); // This is the function the error was complaining about
    onClose();      
    
    // Clear the form
    setName('');
    setPrice('');
    setBillingDate('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-slate-900">Add New Service</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">×</button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 text-slate-400">Service Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              placeholder="e.g. Disney+" 
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 placeholder:text-slate-400" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 text-slate-400">Monthly Cost</label>
            <input 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text" 
              placeholder="0.00" 
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 placeholder:text-slate-400" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Billing Date</label>
            <input 
              type="date" 
              value={billingDate}
              onChange={(e) => setBillingDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition" 
              />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition active:scale-95">
            Confirm Subscription
          </button>
        </form>
      </div>
    </div>
  );
}