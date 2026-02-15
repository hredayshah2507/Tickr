import { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Heart, 
  BarChart3, 
  Plus,
  Search,
  Filter
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardStats from '../components/admin/DashboardStats';
import EventManagement from '../components/admin/EventManagement';
import FanFundingManagement from '../components/admin/FanFundingManagement';
import AnalyticsDashboard from '../components/admin/AnalyticsDashboard';

/**
 * AdminDashboard Page Component
 * 
 * Complete admin panel for managing events and fan-funding campaigns
 * Features:
 * - Dashboard overview with stats
 * - Regular event management (CRUD)
 * - Fan-funding campaign management
 * - Analytics and metrics
 * - Responsive design
 */
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Tab configuration
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'events', label: 'Events', icon: <Calendar size={20} /> },
    { id: 'fanfunding', label: 'Fan Funding', icon: <Heart size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-neutral-400">Manage events, fan-funding campaigns, and view analytics</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 border-b border-neutral-700">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-violet-500 text-violet-400 bg-violet-500/10'
                    : 'border-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-slide-in-up">
          {activeTab === 'dashboard' && <DashboardStats />}
          {activeTab === 'events' && <EventManagement />}
          {activeTab === 'fanfunding' && <FanFundingManagement />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;