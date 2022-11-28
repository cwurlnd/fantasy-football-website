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

export const createLeague = (Name, Size, Scoring) => {
  const League = Parse.Object.extend("League");
  const league = new League();
  league.set("name", Name);
  league.set("size", parseInt(Size));
  league.set("scoring", Scoring);
  return league.save().then((result) => {
    return result;
  });
};

export const getLeagueByName = (Name) => {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  query.equalTo("name", Name);
  return query.find().then((results) => {
    return results;
  });
};

export const getAllLeagues = () => {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  return query.find().then((results) => {
    return results;
  });
};

export const getAllTeams = () => {
  const NFL = Parse.Object.extend("NFL");
  const query = new Parse.Query(NFL);
  return query.find().then((results) => {
    return results;
  });
};

export const getUserInfo = () => {
  const myUser = Parse.User.current().getUsername();
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  query.equalTo("username", myUser);
  return query.find().then((results) => {
    console.log(results[0]);
    return results[0];
  });
}

export const editUser = (firstName, lastName, team) => {
  const currentUser = Parse.User.current();
  currentUser.set('firstName', firstName);
  currentUser.set('lastName', lastName);
  currentUser.set('favoriteTeam', team);
  return currentUser.save().then((result) => {
    return result;
  });
}

async function getLeague(id) {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  return await query.get(id);
}
