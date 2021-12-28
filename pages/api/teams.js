import teamData from "../../data/teams.json";

export default function handler(req, res) {
  res.status(200).json(teamData);
}
