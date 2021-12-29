import { useQuery } from "react-query";
import Accordion from "../components/Accordion";
import Avatar from "../components/Avatar";
import PlayerCard from "../components/PlayerCard";

export default function Home() {
  const { data, isLoading } = useQuery("all", async () => {
    const teamsJson = await (await fetch("/api/teams")).json();
    const playersJson = await (await fetch("/api/players")).json();

    const sorted = teamsJson.sort((a, b) => {
      if (a.city > b.city) return 1;
      if (a.city < b.city) return -1;
      else return 0;
    });

    const allTeams = sorted.map((team) => {
      const playersOnTeam = playersJson.filter(
        (player) => player.ta === team.ta
      );
      return {
        ...team,
        players: playersOnTeam,
      };
    });

    return {
      teams: allTeams,
    };
  });

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {data?.teams?.map((team) => {
        return (
          <Accordion
            key={team.tid}
            title={
              <div className="flex items-center">
                <Avatar imgUrl={team.logo} alt={`${team.city} ${team.name}`} />
                <span className="text-xl font-bold">
                  {team.city} {team.name}
                </span>
              </div>
            }
          >
            <div className="flex flex-wrap overflow-hidden sm:-mx-4 lg:-mx-3">
              {team.players.map((player) => (
                <div
                  key={player.pid}
                  className="w-full overflow-hidden sm:my-4 sm:px-4 md:w-1/2 lg:w-1/3 p-2"
                >
                  <PlayerCard player={player} team={team} />
                </div>
              ))}
            </div>
          </Accordion>
        );
      })}
    </div>
  );
}
