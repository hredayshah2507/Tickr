import { TrendingUp, Users, DollarSign, Calendar, Award, Target } from 'lucide-react';

/**
 * AnalyticsDashboard Component
 * 
 * Analytics and metrics for events and fan-funding
 */
const AnalyticsDashboard = () => {
  // Mock analytics data
  const revenueData = [
    { month: 'Jan', revenue: 450000, events: 12 },
    { month: 'Feb', revenue: 620000, events: 18 },
    { month: 'Mar', revenue: 580000, events: 15 },
    { month: 'Apr', revenue: 750000, events: 22 },
    { month: 'May', revenue: 890000, events: 25 },
    { month: 'Jun', revenue: 1020000, events: 28 }
  ];

  const topEvents = [
    { name: 'Coldplay World Tour', sold: 1850, total: 2000, revenue: 14800000 },
    { name: 'IPL 2025 Finals', sold: 4500, total: 5000, revenue: 5400000 },
    { name: 'Tech Summit Mumbai', sold: 890, total: 1000, revenue: 2670000 },
    { name: 'Dune: Part Two', sold: 245, total: 300, revenue: 110250 }
  ];

  const fanFundingStats = [
    { campaign: 'Indie Artist Tour', raised: 450000, target: 750000, progress: 60 },
    { campaign: 'Album Production', raised: 280000, target: 500000, progress: 56 },
    { campaign: 'Talent Show', raised: 620000, target: 900000, progress: 69 },
    { campaign: 'Documentary', raised: 400000, target: 400000, progress: 100 }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
              <TrendingUp size={20} className="text-violet-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold">+24%</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">₹45.2L</h3>
          <p className="text-neutral-400 text-sm">Total Revenue (6mo)</p>
        </div>

        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
              <Calendar size={20} className="text-amber-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold">120</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">28</h3>
          <p className="text-neutral-400 text-sm">Events This Month</p>
        </div>

        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
              <Users size={20} className="text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold">+1.2K</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">7,485</h3>
          <p className="text-neutral-400 text-sm">Tickets Sold</p>
        </div>

        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
              <Award size={20} className="text-blue-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold">92%</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">4.8/5.0</h3>
          <p className="text-neutral-400 text-sm">Avg Rating</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Revenue Trend</h3>
            <p className="text-neutral-400 text-sm">Last 6 months performance</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-sm text-neutral-400">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm text-neutral-400">Events</span>
            </div>
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-4">
          {revenueData.map((data, index) => (
            <div key={index}>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-neutral-400 w-12">{data.month}</span>
                <span className="text-white font-semibold">₹{(data.revenue / 100000).toFixed(1)}L</span>
                <span className="text-neutral-500">{data.events} events</span>
              </div>
              <div className="h-8 bg-neutral-800 rounded-lg overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg transition-all duration-500"
                  style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Events */}
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Top Performing Events</h3>
          <div className="space-y-4">
            {topEvents.map((event, index) => (
              <div key={index} className="p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{event.name}</span>
                  <span className="text-violet-400 font-bold">
                    ₹{(event.revenue / 100000).toFixed(1)}L
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">
                    {event.sold}/{event.total} sold
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    {Math.round((event.sold / event.total) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 bg-neutral-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-violet-600"
                    style={{ width: `${(event.sold / event.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fan Funding Performance */}
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Fan Funding Performance</h3>
          <div className="space-y-4">
            {fanFundingStats.map((stat, index) => (
              <div key={index} className="p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{stat.campaign}</span>
                  <span className={`text-sm font-bold ${
                    stat.progress >= 100 ? 'text-emerald-400' : 
                    stat.progress >= 50 ? 'text-amber-400' : 'text-neutral-400'
                  }`}>
                    {stat.progress}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-neutral-400">
                    ₹{(stat.raised / 100000).toFixed(1)}L raised
                  </span>
                  <span className="text-neutral-500">
                    Goal: ₹{(stat.target / 100000).toFixed(1)}L
                  </span>
                </div>
                <div className="h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Revenue by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Movies', amount: 1250000, color: 'violet' },
            { name: 'Concerts', amount: 2100000, color: 'amber' },
            { name: 'Sports', amount: 890000, color: 'emerald' },
            { name: 'Theater', amount: 450000, color: 'blue' },
            { name: 'Events', amount: 830000, color: 'red' }
          ].map((cat, index) => (
            <div key={index} className="text-center p-4 bg-neutral-800/50 rounded-lg">
              <div className={`text-3xl mb-2`}>
                {cat.name === 'Movies' && '🎬'}
                {cat.name === 'Concerts' && '🎵'}
                {cat.name === 'Sports' && '⚽'}
                {cat.name === 'Theater' && '🎭'}
                {cat.name === 'Events' && '🎉'}
              </div>
              <p className="text-white font-bold text-lg mb-1">
                ₹{(cat.amount / 100000).toFixed(1)}L
              </p>
              <p className="text-neutral-400 text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
