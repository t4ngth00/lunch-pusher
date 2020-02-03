const axios = require("axios");

axios
  .post("https://lunch-pusher.herokuapp.com/lunches")
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });
