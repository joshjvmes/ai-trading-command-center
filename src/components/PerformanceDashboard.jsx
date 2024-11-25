import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const monthlyData = [
  { year: 2020, Jan: 32.30, Feb: 40.20, Mar: 64.15, Apr: 37.04, May: 9.90, Jun: 19.65, Jul: 21.58, Aug: 4.38, Sep: 4.95, Oct: 17.30, Nov: 7.21, Dec: 18.79, Total: 277.45 },
  { year: 2021, Jan: 3.67, Feb: 13.88, Mar: 11.06, Apr: 10.84, May: 8.48, Jun: 4.21, Jul: 6.60, Aug: 8.89, Sep: 10.46, Oct: 1.36, Nov: 5.32, Dec: 8.24, Total: 93.01 },
  { year: 2022, Jan: 3.19, Feb: 4.90, Mar: 8.12, Apr: 8.73, May: 8.47, Jun: 7.04, Jul: 7.04, Aug: 7.73, Sep: 4.14, Oct: 2.89, Nov: 4.37, Dec: 3.98, Total: 72.70 },
  { year: 2023, Jan: 4.98, Feb: 3.86, Mar: -2.12, Apr: 6.86, May: 3.98, Jun: -0.68, Jul: 3.69, Aug: 1.51, Sep: 4.34, Oct: 0.51, Nov: 7.31, Dec: 5.92, Total: 40.16 },
  { year: 2024, Jan: 3.72, Feb: 5.62, Mar: 3.78, Apr: 5.22, May: 3.52, Jun: 3.92, Jul: 2.06, Total: 28.38 }
];

// Transform data for the cumulative chart
const generateCumulativeData = () => {
  let cumulative = 0;
  const cumulativeData = [];
  
  monthlyData.forEach(yearData => {
    Object.entries(yearData).forEach(([month, value]) => {
      if (month !== 'year' && month !== 'Total') {
        cumulative += value;
        cumulativeData.push({
          date: `${month} ${yearData.year}`,
          value: cumulative
        });
      }
    });
  });
  
  return cumulativeData;
};

const PerformanceDashboard = () => {
  const cumulativeData = generateCumulativeData();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Returns (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => `${value.toFixed(2)}%`}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Bar dataKey="Total" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cumulative Performance (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cumulativeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={6}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => `${value.toFixed(2)}%`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb" 
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-rok-blue">511.07%</div>
              <div className="text-sm text-gray-500">Total Return Since Jan 2020</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rok-blue">2.06%</div>
              <div className="text-sm text-gray-500">Last Month Return</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rok-blue">277.45%</div>
              <div className="text-sm text-gray-500">Best Year (2020)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rok-blue">28.38%</div>
              <div className="text-sm text-gray-500">YTD 2024</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500">
        ** The above returns are for accounts size between USD$1,000,000 and USD$1,500,000
      </div>
    </div>
  );
};

export default PerformanceDashboard;