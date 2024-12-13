import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primaryTurquoise to-secondaryGreen text-white">
      <div className="container mx-auto p-8">
        <header className="text-center py-12">
          <h1 className="text-5xl font-extrabold">Welcome to TANGA</h1>
          <p className="mt-4 text-xl">
            Empowering grassroots organizations through transparent & verifiable impact tracking.
          </p>
        </header>

        <main className="text-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Nonprofits */}
            <div>
              <h2 className="text-3xl font-bold">For Nonprofits</h2>
              <p className="mt-4 text-lg">
                Track your health and environmental impact metrics easily and
                transparently.
              </p>
            </div>

            {/* For Donors */}
            <div>
              <h2 className="text-3xl font-bold">For Donors</h2>
              <p className="mt-4 text-lg">
                Ensure your contributions support verified, impactful
                initiatives.
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12">
            <button className="bg-white text-secondaryGreen py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 text-xl">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
