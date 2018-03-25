// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authUrl: "https://hkf9k3f5hi.execute-api.us-east-1.amazonaws.com/dev2/authenticate",
  playersUrl: "https://gp7izukedc.execute-api.us-east-1.amazonaws.com/dev2/players",
  coursesUrl: "https://d9j2m4xo32.execute-api.us-east-1.amazonaws.com/dev/courses",
  scorecardsUrl: "https://dy28q7w7x2.execute-api.us-east-1.amazonaws.com/dev/scorecards"
};
