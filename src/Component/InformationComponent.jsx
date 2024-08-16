const InformationComponent = () => {
  return (
    <div className=" container mx-auto relative -mt-0 md:-mt-0  lg:-mt-20 bg-[#AB173D] text-white p-8 shadow-lg">
      <div className=" px-8">
        <div className=" relative flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Area of Bangladesh */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-medium pt-3">147,570</p>
            <h2 className="text-xl pt-3 pb-4">km², Square</h2>
          </div>

          {/* Weather */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <p className="text-4xl font-medium pt-3">32°C</p>
              <img
                src="https://img.icons8.com/ios/50/000000/partly-cloudy-day.png"
                alt="Weather Icon"
                className="h-12 w-12 filter invert"
              />
            </div>
            <h2 className="text-xl pt-3 pb-4">Weather</h2>
          </div>

          {/* Foundation of Bangladesh */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-medium pt-3">1971</p>
            <h2 className="text-xl pt-3 pb-4">Foundation</h2>
          </div>

          {/* Population of Bangladesh */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-medium pt-3">169,400,000</p>
            <h2 className="text-xl font-semibold pt-3 pb-4">Population</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationComponent;
