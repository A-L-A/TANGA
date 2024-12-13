import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primaryTurquoise text-gray-900">
      {/* Header */}
      <header className="bg-secondaryGreen text-white p-6 text-center">
        <h1 className="text-4xl font-bold">TANGA Dashboard</h1>
        <p className="text-lg mt-2">
          Track Health & Environmental Impact Metrics
        </p>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Environmental Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondaryGreen">
              Environmental Metrics
            </h2>
            <ul className="mt-4 text-lg">
              <li>Trees Planted: 5,000</li>
              <li>CO₂ Sequestered: 2,000 Tons</li>
              <li>Habitats Restored: 15</li>
            </ul>
          </div>

          {/* Health Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondaryGreen">
              Health Metrics
            </h2>
            <ul className="mt-4 text-lg">
              <li>Communities Reached: 20</li>
              <li>Vaccinations Provided: 10,000</li>
              <li>Diseases Treated: Malaria, Cholera</li>
            </ul>
          </div>

          {/* Nonprofit Showcase */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondaryGreen">
              Featured Nonprofits
            </h2>
            <ul className="mt-4 text-lg">
              <li>GreenEarth Initiative</li>
              <li>Health4All Rwanda</li>
              <li>Wildlife Guardians</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
