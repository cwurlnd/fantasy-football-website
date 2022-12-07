// live query client probably should be moved to a new file
var client = new Parse.LiveQueryClient({
    applicationId: Env.APPLICATION_ID,
    serverURL: 'wss://wwffb.b4a.io',
    javascriptKey: Env.JAVASCRIPT_KEY
  });
  client.open();