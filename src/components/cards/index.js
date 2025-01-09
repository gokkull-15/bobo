// HackathonCard.js
export const HackathonCard = ({
  title,
  startDate,
  endDate,
  prize,
  participants,
  status,
}) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          status === "Active"
            ? "bg-green-500/20 text-green-500"
            : status === "Upcoming"
            ? "bg-blue-500/20 text-blue-400"
            : "bg-red-500/20 text-red-500"
        }`}
      >
        {status}
      </span>
    </div>
    <div className="space-y-2 text-gray-400">
      <p>Start: {new Date(startDate).toLocaleDateString()}</p>
      <p>End: {new Date(endDate).toLocaleDateString()}</p>
      <p className="text-purple-400 font-semibold">Prize Pool: {prize} ETH</p>
      <p>{participants} Participants</p>
    </div>
  </div>
);

// ProjectCard.js
export const ProjectCard = ({ title, description, team, tech, votes }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="space-y-2">
      <p className="text-sm text-gray-400">Team: {team.join(", ")}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="text-purple-400 font-semibold">{votes} Votes</p>
    </div>
  </div>
);

// EventCard.js
export const EventCard = ({ title, date, type, speakers, attendees }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="space-y-2 text-gray-400">
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p className="text-purple-400">{type}</p>
      <p>Speakers: {speakers.join(", ")}</p>
      <p>{attendees} Registered</p>
    </div>
  </div>
);
