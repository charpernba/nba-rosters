import Avatar from "../Avatar";
import Image from "next/image";

export default function PlayerCard({ player, team }) {
  console.log(team);
  return (
    <div className="relative border-solid border-2 border-grey-300">
      <div className="relative h-40 lg:h-40 flex items-end">
        <div
          style={{
            position: "absolute",
            opacity: 0.1,
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(white, white), url(${team.logo})`,
            backgroundBlendMode: "saturation",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "-30px center",
            zIndex: -1,
          }}
        />
        <div className="relative p-4 pb-0 h-auto w-1/2">
          <Image
            src={player.headshot}
            alt={`${player.fn} ${player.ln}`}
            layout="responsive"
            height="75%"
            width="100%"
          />
        </div>
        <div className="p-4 h-full w-1/2 flex flex-col justify-center">
          <p className="text-gray-400">
            #{player.num} | {player.pos}
          </p>
          <p className="font-extrabold text-2xl">
            {player.fn}
            <br />
            {player.ln}
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap overflow-hidden border-t-8"
        style={{ borderColor: `${team.color}` }}
      >
        <div className="w-1/3 overflow-hidden text-center p-3 border-r-2">
          <p className="text-xl">PPG</p>
          <p className="text-2xl font-extrabold">{player.pts ?? 0}</p>
        </div>
        <div className="w-1/3 overflow-hidden text-center p-3">
          <p className="text-xl">RPG</p>
          <p className="text-2xl font-extrabold">{player.reb ?? 0}</p>
        </div>
        <div className="w-1/3 overflow-hidden text-center p-3 border-l-2">
          <p className="text-xl">APG</p>
          <p className="text-2xl font-extrabold">{player.ast ?? 0}</p>
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <Avatar imgUrl={team.logo} alt={team.name} />
      </div>
    </div>
  );
}
