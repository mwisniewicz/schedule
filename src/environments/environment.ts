// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyBqkK4SP7ihcccaM3NJhxgEO8ZYAzJdME0",
    authDomain: "schedule-a61ac.firebaseapp.com",
    databaseURL: "https://schedule-a61ac.firebaseio.com",
    projectId: "schedule-a61ac",
    storageBucket: "schedule-a61ac.appspot.com",
    messagingSenderId: "834339551353"
  }
};
