import Parse from "parse";

export const getAllPeople = () => {
  const Example = Parse.Object.extend("Example");
  const query = new Parse.Query(Example);
  return query.find().then((results) => {
    return results;
  });
};
