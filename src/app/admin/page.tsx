'use client'

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'analytics'>('overview')

  // Mock analytics data
  const pageViewsData = [
    { name: 'Mon', views: 245 },
    { name: 'Tue', views: 312 },
    { name: 'Wed', views: 289 },
    { name: 'Thu', views: 398 },
    { name: 'Fri', views: 445 },
    { name: 'Sat', views: 523 },
    { name: 'Sun', views: 478 },
  ]

  const portfolioViewsData = [
    { category: 'Fashion', views: 1250 },
    { category: 'Editorial', views: 1890 },
    { category: 'Commercial', views: 1456 },
    { category: 'Runway', views: 987 },
  ]

  const bookingsData = [
    { month: 'Jan', bookings: 12 },
    { month: 'Feb', bookings: 15 },
    { month: 'Mar', bookings: 18 },
    { month: 'Apr', bookings: 22 },
    { month: 'May', bookings: 25 },
    { month: 'Jun', bookings: 28 },
  ]

  const recentBookings = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'Vogue Magazine',
      service: 'Editorial',
      date: '2024-12-20',
      status: 'confirmed',
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'Nike',
      service: 'Commercial',
      date: '2024-12-18',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Emma Wilson',
      company: 'Chanel',
      service: 'Runway',
      date: '2024-12-15',
      status: 'confirmed',
    },
    {
      id: '4',
      name: 'David Park',
      company: 'Elle Magazine',
      service: 'Editorial',
      date: '2024-12-12',
      status: 'confirmed',
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      company: 'L\'Oréal',
      service: 'Commercial',
      date: '2024-12-10',
      status: 'cancelled',
    },
  ]

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your portfolio and track performance</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'bookings'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Bookings
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Total Views</div>
                <div className="text-3xl font-bold mb-1">12,458</div>
                <div className="text-sm text-green-600">+12.5% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Portfolio Views</div>
                <div className="text-3xl font-bold mb-1">5,583</div>
                <div className="text-sm text-green-600">+8.3% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Contact Submissions</div>
                <div className="text-3xl font-bold mb-1">127</div>
                <div className="text-sm text-green-600">+15.2% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Confirmed Bookings</div>
                <div className="text-3xl font-bold mb-1">28</div>
                <div className="text-sm text-green-600">+20.1% from last month</div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Weekly Page Views</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={pageViewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Portfolio Category Views</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={portfolioViewsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="views"
                    >
                      {portfolioViewsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold">Recent Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
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
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{booking.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-600">{booking.company}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-600">{booking.service}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-600">{booking.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                          <button className="text-gray-600 hover:text-gray-900">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Bookings Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bookings" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Avg. Session Duration</div>
                <div className="text-3xl font-bold mb-1">3m 42s</div>
                <div className="text-sm text-green-600">+5.2% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Bounce Rate</div>
                <div className="text-3xl font-bold mb-1">32.5%</div>
                <div className="text-sm text-green-600">-3.1% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Conversion Rate</div>
                <div className="text-3xl font-bold mb-1">4.8%</div>
                <div className="text-sm text-green-600">+1.2% from last month</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Top Pages</h3>
              <div className="space-y-4">
                {[
                  { page: '/portfolio', views: 5583, percentage: 45 },
                  { page: '/', views: 3421, percentage: 27 },
                  { page: '/about', views: 2156, percentage: 17 },
                  { page: '/services', views: 1298, percentage: 11 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.page}</span>
                      <span className="text-gray-600">{item.views} views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Traffic Sources</h3>
              <div className="space-y-4">
                {[
                  { source: 'Direct', visitors: 4523, color: '#3b82f6' },
                  { source: 'Social Media', visitors: 3891, color: '#8b5cf6' },
                  { source: 'Search Engines', visitors: 2456, color: '#10b981' },
                  { source: 'Referrals', visitors: 1588, color: '#f59e0b' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium">{item.source}</span>
                    </div>
                    <span className="text-gray-600">{item.visitors} visitors</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
