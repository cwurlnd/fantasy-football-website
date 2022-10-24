import Parse from "parse";

export const createLeague = (Name) => {
  console.log("Creating: ", Name);
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
