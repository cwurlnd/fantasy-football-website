import Parse from "parse";

export const getTeamsByLeague = async (id) => {
  const Team = Parse.Object.extend("Team");
  const query = new Parse.Query(Team);
  const leagueObj = await getLeague(id);
  console.log(leagueObj)
  query.equalTo("league", leagueObj);
  return query.find().then((results) => {
    console.log(results)
    return results;
  });
};

export const createLeague = (Name) => {
  const League = Parse.Object.extend("League");
  const league = new League();
  league.set("name", Name);
  return league.save().then((result) => {
    return result;
  });
};

export const getAllLeagues = () => {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  return query.find().then((results) => {
    return results;
  });
};

async function getLeague(id) {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  return await query.get(id);
}
