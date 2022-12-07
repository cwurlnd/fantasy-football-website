import Parse from "parse";

export const getTeamsByLeague = async (id) => {
  const Team = Parse.Object.extend("Team");
  const query = new Parse.Query(Team);
  const leagueObj = await getLeague(id);
  query.equalTo("league", leagueObj);
  return query.find().then((results) => {
    return results;
  });
};

export const getChats = async (id) => {
  const Message = Parse.Object.extend("Message");
  const query = new Parse.Query(Message);
  return query.find().then((results) => {
    return results;
  });
}


export const addChat = async (text) => {
  const Message = Parse.Object.extend("Message");
  const message = new Message();
  message.set("text", text);
  message.set("user", Parse.User.current());
  return message.save().then((result) => {
    return result;
  });
};

export const createLeague = (Name, Size, Scoring) => {
  const League = Parse.Object.extend("League");
  const league = new League();
  league.set("name", Name);
  league.set("size", parseInt(Size));
  league.set("scoring", Scoring);
  league.set("user", Parse.User.current());
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

export const addTeam = async (name, id) => {
  const Team = Parse.Object.extend("Team");
  const team = new Team();
  const leagueObj = await getLeague(id);
  team.set("name", name);
  team.set("user", Parse.User.current());
  team.set("league", leagueObj);
  return team.save().then((result) => {
    return result;
  });
};

export const getAllTeams = () => {
  const NFL = Parse.Object.extend("NFL");
  const query = new Parse.Query(NFL);
  return query.find().then((results) => {
    return results;
  });
};

export const getAllUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
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

export const getUserByID = (id) => {
  console.log(id);
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  query.equalTo("objectId", id);
  return query.find().then((results) => {
    return results[0];
  });
}

async function getLeague(id) {
  const League = Parse.Object.extend("League");
  const query = new Parse.Query(League);
  return await query.get(id);
}
