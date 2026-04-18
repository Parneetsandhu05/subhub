export default function StatCard({ title, amount, color }: { title: string, amount: string, color: string }) {
  return (
    <div className={`p-6 rounded-xl border shadow-sm ${color} bg-white`}>
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-900">{amount}</p>
    </div>
  );
}