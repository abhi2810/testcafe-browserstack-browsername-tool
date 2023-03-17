const request = require("request");

function help() {
  console.log(
    'help:\n\t-b  Get list of Browsers\n\t\toptions:  "OS Name" "Browser Name"\n\t\t          "Device Name"\n\t-h  help\n'
  );
}

function generateBrowserNames(platformsInfo) {
  var browserNames = platformsInfo.map((info) => {
    var isDesktop = !info["device"];
    var name = isDesktop ? info["browser"] : info["device"];
    var version = isDesktop ? info["browser_version"] : info["os_version"];
    var platform = isDesktop ? `${info["os"]} ${info["os_version"]}` : "";
    return `browserstack:${name}@${version}${platform ? ":" + platform : ""}`;
  });
  return browserNames;
}

function extractBrowsers(browsersList, browser, os) {
  const matches = browsersList.filter((s) => {
    var data = s.toLowerCase();
    if (os)
      return (
        data.includes(browser.toLowerCase()) && data.includes(os.toLowerCase())
      );
    else return data.includes(browser.toLowerCase());
  });
  return matches;
}

var options = {
  url: "https://api.browserstack.com/automate/browsers.json",
  auth: {
    user: process.env.BROWSERSTACK_USERNAME,
    password: process.env.BROWSERSTACK_ACCESS_KEY,
  },
};

switch (process.argv[2]) {
  case "-b":
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const response = JSON.parse(body);
        const browsers = generateBrowserNames(response);
        const browserList = extractBrowsers(
          browsers,
          process.argv[3],
          process.argv[4]
        );
        browserList.map((b) => console.log(b));
      } else {
        if (response.statusCode === 401) {
          console.log(
            "Please set your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY as an environment variable."
          );
        }
      }
    });
    break;
  case "-h":
    help();
    break;
  default:
    help();
}
