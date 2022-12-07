import "./styles.css";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// live query client probably should be moved to a new file
var client = new Parse.LiveQueryClient({
  applicationId: Env.APPLICATION_ID,
  serverURL: 'wss://wwffb.b4a.io',
  javascriptKey: Env.JAVASCRIPT_KEY
});
client.open();

var query = new Parse.Query('Message');
query.ascending('createdAt').limit(5);
var subscription = client.subscribe(query);

subscription.on('open', () => {
  console.log('subscription opened');
 });

subscription.on('create', (object) => {
  console.log('parse object created');
  console.log(object.get("Text"));
  console.log(object.get("sentBy"));
});

subscription.on('delete', (object) => {
  console.log('parse object created');
  console.log(object.get("Text"));
  console.log(object.get("sentBy"));
});

function App() {
  return <Components />;
}

export default App;