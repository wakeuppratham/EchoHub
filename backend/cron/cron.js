import cron from "cron";
import https from "https";

const URL = "https://echohub-1ngf.onrender.com/";

const job = new cron.CronJob("*/15 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request", e);
    });
});

export default job;