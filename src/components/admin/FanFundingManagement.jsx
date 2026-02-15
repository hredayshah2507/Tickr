import { useState } from 'react';
import { Plus, Search, Edit, Trash2, TrendingUp, Users, Target } from 'lucide-react';
import CreateFanFundModal from './CreateFanFundModal';

/**
 * FanFundingManagement Component
 * 
 * Manage fan-funding campaigns - create, monitor, manage
 */
const FanFundingManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock fan funding data
  const mockFanFunds = [
    {
      id: 101,
      title: 'Indie Artist Summer Tour',
      raisedAmount: 450000,
      targetAmount: 750000,
      contributors: 1240,
      status: 'active',
      daysLeft: 45,
      category: 'concerts',
      date: '2025-04-15'
    },
    {
      id: 102,
      title: 'Local Band Album Production',
      raisedAmount: 280000,
      targetAmount: 500000,
      contributors: 856,
      status: 'active',
      daysLeft: 28,
      category: 'music',
      date: '2025-03-20'
    },
    {
      id: 103,
      title: 'Emerging Musician Talent Show',
      raisedAmount: 620000,
      targetAmount: 900000,
      contributors: 2150,
      status: 'active',
      daysLeft: 60,
      category: 'events',
      date: '2025-05-01'
    },
    {
      id: 104,
      title: 'Folk Music Documentary',
      raisedAmount: 400000,
      targetAmount: 400000,
      contributors: 932,
      status: 'funded',
      daysLeft: 0,
      category: 'documentary',
      date: '2025-06-10'
    }
  ];

  const statuses = ['all', 'active', 'funded', 'closed'];

  const filteredFunds = mockFanFunds.filter(fund => {
    const matchesSearch = fund.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || fund.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getProgressPercentage = (raised, target) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusBadge = (status) => {
    const config = {
      active: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50', label: 'Active' },
      funded: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/50', label: 'Funded' },
      closed: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50', label: 'Closed' }
    };
    const { bg, text, border, label } = config[status] || config.active;
    
    return (
      <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${bg} ${text} border ${border}`}>
        {label}
      </span>
    );
  };

  const handleDelete = (fundId) => {
    if (confirm('Are you sure you want to delete this fan-funding campaign?')) {
      console.log('Deleting campaign:', fundId);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Fan Funding Management</h2>
          <p className="text-neutral-400">Create and manage fan-funded campaigns</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white rounded-lg font-semibold transition shadow-lg shadow-amber-500/30"
        >
          <Plus size={20} />
          <span>Start Fan Funding</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
              <TrendingUp size={20} className="text-amber-400" />
            </div>
            <span className="text-neutral-400 text-sm">Total Raised</span>
          </div>
          <h3 className="text-3xl font-bold text-white">₹17.5L</h3>
        </div>
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
              <Users size={20} className="text-violet-400" />
            </div>
            <span className="text-neutral-400 text-sm">Total Contributors</span>
          </div>
          <h3 className="text-3xl font-bold text-white">5,178</h3>
        </div>
        <div className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
              <Target size={20} className="text-emerald-400" />
            </div>
            <span className="text-neutral-400 text-sm">Success Rate</span>
          </div>
          <h3 className="text-3xl font-bold text-white">87%</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 flex items-center gap-2 bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-700">
          <Search size={20} className="text-neutral-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 placeholder-neutral-400"
          />
        </div>

        {/* Status Filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-neutral-800 text-white px-4 py-3 rounded-lg border border-neutral-700 outline-none cursor-pointer"
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Fan Funding List */}
      {filteredFunds.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900/50 rounded-xl border border-neutral-700">
          <TrendingUp size={48} className="text-neutral-600 mx-auto mb-4" />
          <p className="text-neutral-400 text-lg">No campaigns found</p>
          <p className="text-neutral-500 text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFunds.map((fund) => {
            const progress = getProgressPercentage(fund.raisedAmount, fund.targetAmount);
            
            return (
              <div
                key={fund.id}
                className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 hover:border-amber-500/50 transition-all duration-300 p-6"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Fund Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{fund.title}</h3>
                      {getStatusBadge(fund.status)}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-400">
                          ₹{fund.raisedAmount.toLocaleString()} raised
                        </span>
                        <span className="text-amber-400 font-semibold">
                          {progress.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-neutral-500">
                          Goal: ₹{fund.targetAmount.toLocaleString()}
                        </span>
                        {fund.daysLeft > 0 && (
                          <span className="text-neutral-500">
                            {fund.daysLeft} days left
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-violet-400" />
                        <span className="text-neutral-400">
                          {fund.contributors.toLocaleString()} contributors
                        </span>
                      </div>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-400">
                        📅 {new Date(fund.date).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition border border-neutral-600 whitespace-nowrap">
                      <TrendingUp size={16} />
                      <span className="text-sm">View Stats</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition whitespace-nowrap">
                      <Edit size={16} />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(fund.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition whitespace-nowrap"
                    >
                      <Trash2 size={16} />
                      <span className="text-sm">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Fan Fund Modal */}
      {showCreateModal && (
        <CreateFanFundModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default FanFundingManagement;
