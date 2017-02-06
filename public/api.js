var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'q2Ab54Smq5pHkpGT8AlQmLlLg',
  consumer_secret: '4eVRhyWasyPmIxaQVadQCxXTivBD8xLEVIBPenNHrfBMrjpj65',
  access_token_key: '224470490-2G0rZ548yHGvXjnpzCQljoSCihXYEBgA5th6PSGL',
  access_token_secret: 'cIlhqrw7lyqjYGUb4HFq2BmM4yrdv6lYsJbic9uHmVyS2'
});
 
var params = {screen_name: 'moukale'};
//statuses/user_timeline

function callback (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  $("#content").html(tweets);
}

client.get('statuses/show', params, callback);