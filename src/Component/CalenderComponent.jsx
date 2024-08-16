import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRegBuilding,
  FaVoteYea,
  FaBook,
  FaRegNewspaper,
} from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi"; // For Office of the President
import { BiBuildings } from "react-icons/bi"; // For Cabinet Division
import { IoPeopleSharp } from "react-icons/io5"; // For Ministry of Public Administration
import { HiInformationCircle } from "react-icons/hi"; // For National Information Directory
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Sample data for meetings
const meetings = [
  { date: "2024-08-15", title: "Project Kickoff Meeting" },
  { date: "2024-08-16", title: "Design Review" },
  { date: "2024-08-17", title: "Sprint Planning" },
  { date: "2024-08-17", title: "Sprint Planning" },
];

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAllEvents, setShowAllEvents] = useState(false);

  const handleDateClick = (value) => {
    setSelectedDate(value.toDateString());
    setDate(value);
  };

  const meetingsForSelectedDate = meetings.filter(
    (meeting) => new Date(meeting.date).toDateString() === selectedDate
  );

  const upcomingMeetings = meetings.filter(
    (meeting) => new Date(meeting.date) > new Date()
  );

  return (
    <div className="p-6 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Side - Important Links */}
        <div className="md:w-1/3 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
            Important Links
          </h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <FaMapMarkerAlt className="mr-3 text-xl" /> GIS Mapping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <FaRegBuilding className="mr-3 text-xl" /> Real Estate Property
                Records
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <MdBusiness className="mr-3 text-xl" /> County Ordinances
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <FaVoteYea className="mr-3 text-xl" /> Register to Vote
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <FaBook className="mr-3 text-xl" /> General Reports &
                Publications
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <FaRegNewspaper className="mr-3 text-xl" /> National Information
                Portal
              </a>
            </li>
            {/* New Links */}
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <GiOfficeChair className="mr-3 text-xl" /> Office of the
                President
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <BiBuildings className="mr-3 text-xl" /> Cabinet Division
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <IoPeopleSharp className="mr-3 text-xl" /> Ministry of Public
                Administration
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-green-600 border-b pb-2 text-lg"
              >
                <HiInformationCircle className="mr-3 text-xl" /> National
                Information Directory
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Calendar and Meetings */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
            Calendar & Meetings
          </h2>
          <div className="flex flex-col md:flex-row">
            {/* Calendar Section */}
            <div className="md:w-1/2 p-4 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl px-4 py-2 text-white bg-green-600 text-center font-semibold mb-4">
                Public Meeting
              </h3>
              <div className="border rounded-lg p-2 bg-white">
                <Calendar onChange={handleDateClick} value={date} />
              </div>
            </div>

            {/* Meetings Section */}
            <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
              <h3 className="text-xl mt-4 px-4 py-2 text-black bg-gray-200 text-center font-semibold mb-4">
                Meetings
              </h3>

              <ul className="space-y-2">
                {(selectedDate ? meetingsForSelectedDate : upcomingMeetings)
                  .length > 0 ? (
                  (showAllEvents ? meetings : upcomingMeetings).map(
                    (meeting, index) => (
                      <li
                        key={index}
                        className="p-4 bg-green-100 rounded-lg border border-green-200 cursor-pointer hover:bg-green-200 transition"
                      >
                        <span className="font-bold">{meeting.date}</span> -{" "}
                        {meeting.title}
                      </li>
                    )
                  )
                ) : (
                  <p className="text-gray-600">No meetings available.</p>
                )}
              </ul>
              {selectedDate && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="text-lg font-semibold">Selected Date:</h4>
                  <p>{selectedDate}</p>
                </div>
              )}

              <div className="pt-16">
                <button
                  onClick={() => setShowAllEvents(!showAllEvents)}
                  className="mb-4 px-4 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
                >
                  {showAllEvents ? "Show Less" : "Show All Events"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
