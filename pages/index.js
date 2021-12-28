import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading } = useQuery("all", async () => {
    const teams = await fetch("/api/teams");
    const teamsJson = await teams.json();
    const players = await fetch("/api/players");
    const playersJson = await players.json();
    return {
      teams: teamsJson,
      players: playersJson,
    };
  });

  // const [data, setData] = useState(null);
  // const [isDataLoading, setIsLoading] = useState(false);
  // const fetchAndStorePlayersAndTeams = async () => {
  //   const teams = await fetch("/api/teams");
  //   const teamsJson = await teams.json();
  //   const players = await fetch("/api/players");
  //   const playersJson = await players.json();
  //   return {
  //     teams: teamsJson,
  //     players: playersJson,
  //   };
  // };
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchAndStorePlayersAndTeams()
  //     .then((res) => {
  //       setData(res);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // console.log(data);

  return (
    <div>
      <h1 className="text-3xl">Here</h1>
    </div>
  );
}
