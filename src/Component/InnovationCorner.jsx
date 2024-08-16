const InnovationCorner = () => (
  <section className="py-8 bg-green-100">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Innovation Corner</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Innovation Team</h3>
          <p>Details about the innovation team...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Annual Plan</h3>
          <p>Details about the annual plan...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Progress Report</h3>
          <p>Details about the progress report...</p>
        </div>
      </div>
    </div>
  </section>
);

export default InnovationCorner;
