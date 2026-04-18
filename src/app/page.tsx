import StatCard from '@/components/StatCard';

export default function Home() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">SubHub Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Monthly" amount="$145.00" color="border-l-4 border-blue-500" />
        <StatCard title="Yearly Forecast" amount="$1,740.00" color="border-l-4 border-green-500" />
        <StatCard title="Active Subs" amount="12" color="border-l-4 border-purple-500" />
      </div>
    </main>
  );
}