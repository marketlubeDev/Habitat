import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  MessageSquare, 
  Link, 
  Settings, 
  BarChart3,
  Calendar,
  Bell,
  Search,
  User,
  LogOut,
  TrendingUp,
  Eye,
  Star,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Copy,
  Send,
  Check,
  ExternalLink,
  Filter
} from 'lucide-react';
import logo from "../assets/habitlogo.jpg";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  feedbackLink: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

interface Feedback {
  id: string;
  clientName: string;
  clientEmail: string;
  rating: number;
  comment: string;
  submittedAt: string;
  status: 'new' | 'reviewed';
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admin dashboard' | 'clients' | 'feedback' | 'links' | 'bookings'>('admin dashboard');
  const [showAddClient, setShowAddClient] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });
  const [selectedClient, setSelectedClient] = useState('');
  const [customMessage, setCustomMessage] = useState('Share your wellness journey with us! Your feedback helps us create better experiences for everyone. We value every story. 💚');
  const [copiedLink, setCopiedLink] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRating, setFilterRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);

  // Mock data - replace with real data from your backend
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 234-567-8900',
      feedbackLink: 'https://habitat.com/feedback/sarah-johnson-abc123',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765-43210',
      feedbackLink: 'https://habitat.com/feedback/rajesh-kumar-def456',
      status: 'active',
      joinDate: '2024-01-20'
    },
    {
      id: '3',
      name: 'Emily Chen',
      email: 'emily@example.com',
      phone: '+1 555-123-4567',
      feedbackLink: 'https://habitat.com/feedback/emily-chen-ghi789',
      status: 'inactive',
      joinDate: '2024-01-10'
    }
  ]);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: '1',
      clientName: 'Sarah Johnson',
      clientEmail: 'sarah@example.com',
      rating: 5,
      comment: 'Amazing wellness experience! The spa treatments were incredible and the staff was very professional.',
      submittedAt: '2024-01-25T10:30:00Z',
      status: 'new'
    },
    {
      id: '2',
      clientName: 'Rajesh Kumar',
      clientEmail: 'rajesh@example.com',
      rating: 4,
      comment: 'Great Ayurvedic treatments and peaceful environment. Would definitely recommend!',
      submittedAt: '2024-01-24T15:45:00Z',
      status: 'reviewed'
    },
    {
      id: '3',
      clientName: 'Emily Chen',
      clientEmail: 'emily@example.com',
      rating: 5,
      comment: 'Perfect retreat for relaxation. The rooms were clean and the food was delicious.',
      submittedAt: '2024-01-23T09:15:00Z',
      status: 'new'
    }
  ]);

  const generateFeedbackLink = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      const uniqueId = Math.random().toString(36).substring(2, 15);
      const newLink = `https://habitat.com/feedback/${client.name.toLowerCase().replace(' ', '-')}-${uniqueId}`;
      
      setClients(clients.map(c => 
        c.id === clientId 
          ? { ...c, feedbackLink: newLink }
          : c
      ));
    }
  };

  const addClient = () => {
    if (newClient.name && newClient.email) {
      const client: Client = {
        id: Date.now().toString(),
        name: newClient.name,
        email: newClient.email,
        phone: newClient.phone,
        feedbackLink: '',
        status: 'active',
        joinDate: new Date().toISOString().split('T')[0]
      };
      setClients([...clients, client]);
      setNewClient({ name: '', email: '', phone: '' });
      setShowAddClient(false);
    }
  };

  const markFeedbackAsReviewed = (feedbackId: string) => {
    setFeedbacks(feedbacks.map(f => 
      f.id === feedbackId 
        ? { ...f, status: 'reviewed' as const }
        : f
    ));
  };

  const generateLink = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    return `https://focuzhabitat.com/feedback/${randomId}`;
  };

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(''), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFeedbackStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-3.5 border-b border-gray-200">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Focuz Habitat" className="h-12 w-auto" />
            </div>
            {/* <p className="text-sm text-gray-600 text-center mt-2">Admin Panel</p> */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6">
            <button
              onClick={() => setActiveTab('admin dashboard')}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === 'admin dashboard'
                  ? 'bg-emerald-50 text-emerald-600 border-r-2 border-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('clients')}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === 'clients'
                  ? 'bg-emerald-50 text-emerald-600 border-r-2 border-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5 mr-3" />
              Clients
            </button>

            <button
              onClick={() => setActiveTab('links')}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === 'links'
                  ? 'bg-emerald-50 text-emerald-600 border-r-2 border-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Link className="w-5 h-5 mr-3" />
              Feedback Links
            </button>

            <button
              onClick={() => setActiveTab('feedback')}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === 'feedback'
                  ? 'bg-emerald-50 text-emerald-600 border-r-2 border-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              View Feedback
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === 'bookings'
                  ? 'bg-emerald-50 text-emerald-600 border-r-2 border-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Bookings
            </button>
          </nav>

          {/* Logout */}
          <div className="p-6 border-t border-gray-200">
            <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === 'admin dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Clients</p>
                      <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
                      <p className="text-sm text-green-600">+12% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-blue-500">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Feedback Received</p>
                      <p className="text-2xl font-bold text-gray-900">{feedbacks.length}</p>
                      <p className="text-sm text-green-600">+8% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-green-500">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">32</p>
                      <p className="text-sm text-green-600">+15% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-purple-500">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                      <p className="text-sm text-green-600">+0.2 from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-yellow-500">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Feedback</h3>
                  <div className="space-y-4">
                    {feedbacks.slice(0, 3).map((feedback, index) => (
                      <div key={feedback.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-gray-900">{feedback.clientName}</p>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{feedback.comment}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(feedback.submittedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setActiveTab('links')}
                      className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Generate Feedback Link
                    </button>
                    <button 
                      onClick={() => setActiveTab('clients')}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add New Client
                    </button>
                    <button 
                      onClick={() => setActiveTab('bookings')}
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View All Bookings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Client Management</h2>
                <button
                  onClick={() => setShowAddClient(true)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Client</span>
                </button>
              </div>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Clients Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Visits
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">Joined: {client.joinDate}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-gray-900">
                                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                {client.email}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                {client.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-900">
                              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                              New York, USA
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">3 visits</div>
                            <div className="text-sm text-gray-500">Last: 2024-02-28</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              client.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add Client Modal */}
              {showAddClient && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-lg p-6 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Client</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newClient.name}
                        onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={newClient.email}
                        onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={newClient.phone}
                        onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="flex space-x-3 mt-6">
                      <button
                        onClick={() => setShowAddClient(false)}
                        className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={addClient}
                        className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Add Client
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Feedback Management</h2>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Total: {feedbacks.length} | Avg Rating: 4.7/5
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="relative flex-1 min-w-60">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search feedback..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>

              {/* Feedback List */}
              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{feedback.clientName}</h3>
                          <p className="text-sm text-gray-600">{feedback.clientEmail}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {renderStars(feedback.rating)}
                          <span className="text-sm text-gray-600 ml-2">{feedback.rating}/5</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(feedback.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
                      <p className="text-gray-700 leading-relaxed">{feedback.comment}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Services:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Wellness Treatment
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Spa
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          Stay: 3 days
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getFeedbackStatusColor(feedback.status === 'new' ? 'Pending' : 'Published')}`}>
                          {feedback.status === 'new' ? 'Pending' : 'Published'}
                        </span>
                        <button
                          onClick={() => setSelectedFeedback(feedback)}
                          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Detail Modal */}
              {selectedFeedback && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Feedback Details</h3>
                      <button
                        onClick={() => setSelectedFeedback(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{selectedFeedback.clientName}</h4>
                          <p className="text-sm text-gray-600">{selectedFeedback.clientEmail}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                          <div className="flex items-center space-x-2">
                            {renderStars(selectedFeedback.rating)}
                            <span className="text-sm text-gray-600">{selectedFeedback.rating}/5</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <p className="text-sm text-gray-900">{new Date(selectedFeedback.submittedAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <p className="text-gray-900">Feedback</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                        <p className="text-gray-700 leading-relaxed">{selectedFeedback.comment}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Services Used</label>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Wellness Treatment
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Spa
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Stay Duration</label>
                          <p className="text-sm text-gray-900">3 days</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-6">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                        Approve & Publish
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        Reject
                      </button>
                      <button
                        onClick={() => setSelectedFeedback(null)}
                        className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Feedback Links</h2>
              </div>

              {/* Generate New Link */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Generate New Feedback Link</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Client</label>
                    <select
                      value={selectedClient}
                      onChange={(e) => setSelectedClient(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Choose a client...</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name} ({client.email})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Message (Optional)</label>
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Add a personal message..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex space-x-3 mt-4">
                  <button
                    disabled={!selectedClient}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Link className="w-4 h-4" />
                    <span>Generate Link</span>
                  </button>
                  <button
                    disabled={!selectedClient}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Generate & Send</span>
                  </button>
                </div>
              </div>

              {/* Generated Links Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Generated Links</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Feedback Link
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Responses
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded flex-1 truncate">
                                {client.feedbackLink || 'No link generated yet'}
                              </code>
                              {client.feedbackLink && (
                                <button
                                  onClick={() => copyToClipboard(client.feedbackLink)}
                                  className="text-blue-600 hover:text-blue-800 flex-shrink-0"
                                >
                                  {copiedLink === client.feedbackLink ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {client.joinDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              client.feedbackLink ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {client.feedbackLink ? 'Generated' : 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            0
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              {client.feedbackLink && (
                                <>
                                  <button className="text-blue-600 hover:text-blue-800">
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                  <button className="text-green-600 hover:text-green-800">
                                    <Send className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                              {!client.feedbackLink && (
                                <button
                                  onClick={() => generateFeedbackLink(client.id)}
                                  className="text-emerald-600 hover:text-emerald-800"
                                >
                                  <Link className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Bookings Management</h2>
              </div>

              {/* Bookings Content */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h3>
                <div className="text-center py-8">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No bookings available at the moment.</p>
                  <p className="text-sm text-gray-500 mt-2">Booking management features coming soon.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin; 