import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

/**
 * DashboardStats Component
 * 
 * Overview statistics and metrics for admin dashboard
 */
const DashboardStats = () => {
  // Mock stats - replace with real data from API/blockchain
  const stats = [
    {
      label: 'Total Events',
      value: '127',
      change: '+12%',
      icon: <Calendar size={24} />,
      color: 'violet',
      trend: 'up'
    },
    {
      label: 'Active Fan Funds',
      value: '8',
      change: '+3 this month',
      icon: <TrendingUp size={24} />,
      color: 'amber',
      trend: 'up'
    },
    {
      label: 'Total Revenue',
      value: '₹12.5L',
      change: '+18%',
      icon: <DollarSign size={24} />,
      color: 'emerald',
      trend: 'up'
    },
    {
      label: 'Total Users',
      value: '45.2K',
      change: '+2.4K',
      icon: <Users size={24} />,
      color: 'blue',
      trend: 'up'
    }
  ];

  const colorClasses = {
    violet: 'bg-violet-500/20 text-violet-400 border-violet-500/50',
    amber: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/50'
  };

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg border ${colorClasses[stat.color]} flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-emerald-400 text-sm font-semibold">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-neutral-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition text-white font-semibold">
            <Calendar size={20} />
            <span>Create New Event</span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-amber-600 hover:bg-amber-700 rounded-lg transition text-white font-semibold">
            <TrendingUp size={20} />
            <span>Start Fan Funding</span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-white font-semibold border border-neutral-600">
            <Users size={20} />
            <span>View All Users</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New event created', event: 'Coldplay Concert 2025', time: '2 hours ago', type: 'event' },
            { action: 'Fan funding reached 50%', event: 'Indie Artist Tour', time: '5 hours ago', type: 'funding' },
            { action: 'Event published', event: 'Tech Summit Mumbai', time: '1 day ago', type: 'event' },
            { action: 'New fan funding started', event: 'Folk Music Documentary', time: '2 days ago', type: 'funding' }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${activity.type === 'funding' ? 'bg-amber-400' : 'bg-violet-400'}`} />
                <div>
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-neutral-400 text-sm">{activity.event}</p>
                </div>
              </div>
              <span className="text-neutral-500 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
