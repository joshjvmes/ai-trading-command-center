import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Award, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';

const monthlyData = [
  { month: 'Jan 24', return: 3.72 },
  { month: 'Feb 24', return: 5.62 },
  { month: 'Mar 24', return: 3.78 },
  { month: 'Apr 24', return: 5.22 },
  { month: 'May 24', return: 3.52 },
  { month: 'Jun 24', return: 3.92 },
  { month: 'Jul 24', return: 2.06 }
];

const Performance = () => {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gray-900 text-white p-8">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
              <ArrowUpRight size={32} />
            </div>
            <h1 className="text-4xl font-bold">Rocket $ROK</h1>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Last Month Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2.06%</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">YTD Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28.38%</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Total Return Since 2020</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">511.07%</div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart */}
          <Card className="bg-gray-800 border-gray-700 mb-16">
            <CardHeader>
              <CardTitle>2024 Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Line type="monotone" dataKey="return" stroke="#60A5FA" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="text-blue-400" size={24} />
                <CardTitle>Award-Winning Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Systematic trading solutions with proven track record. Top performer in multiple categories.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="text-blue-400" size={24} />
                <CardTitle>Regulated & Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Swiss-based asset management following strict regulatory standards and oversight.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;