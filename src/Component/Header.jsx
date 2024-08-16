/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "antd";

const Header = () => (
  <Carousel autoplay>
    <div className="relative">
      <img
        className="w-full h-[600px] object-cover"
        src="https://i.postimg.cc/B6VSNxkL/silhouette-oresundsbron-bridge-water.jpg"
        alt="Construction"
      />
      <div className="pl-14 absolute inset-0 flex pt-36 md:pt-44 justify-start bg-black bg-opacity-40 p-4">
        <div className="text-white max-w-4xl p-4">
          <h3 className="text-3xl font-bold mb-2">
            Construction was proposed to begin in July 1999 and be completed in
            June 2004.
          </h3>
          <p className="text-md pb-4">
            The proposed amount of Taka 2,893.50 crore was from foreign sources
            and Taka 750 crore from local sources.
          </p>
          <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-800">
            Discover More
          </button>
        </div>
      </div>
    </div>
    <div className="relative">
      <img
        className="w-full h-[600px] object-cover"
        src="https://i.postimg.cc/4xxJC2G7/view-breathtaking-beach-nature-landscape.jpg"
        alt="Project"
      />
      <div className="pl-14 absolute inset-0 flex pt-36 md:pt-44 justify-start bg-black bg-opacity-40 p-4">
        <div className="text-white max-w-4xl p-4">
          <h3 className="text-3xl font-bold mb-2">
            The modern Cox's Bazar derives its name from Captain Hiram Cox
          </h3>
          <p className="text-md pb-4">
            To commemorate his role in refugee rehabilitation work, a market was
            established..
          </p>
          <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-800">
            Discover More
          </button>
        </div>
      </div>
    </div>
    <div className="relative">
      <img
        className="w-full h-[600px] object-cover"
        src="https://i.postimg.cc/qM7Y4PtT/Screenshot-2024-08-15-101241.png"
        alt="Slide 3"
      />
      <div className="pl-14 absolute inset-0 flex pt-24 md:pt-44 justify-start bg-black bg-opacity-40 p-4">
        <div className="text-white max-w-4xl p-4">
          <h3 className="text-3xl font-bold mb-2">
            The General Consultant, namely the NKDM Associatio, beginning in
            February 2014. In June 2013,
          </h3>
          <p className="text-md pb-4">
            Dhaka Mass Transit Company Limited was established by the
            Government..
          </p>
          <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-800">
            Discover More
          </button>
        </div>
      </div>
    </div>
  </Carousel>
);

export default Header;
