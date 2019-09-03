// the file contents for the current environment will overwrite these during build.
// the build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// the list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: any = {
    production: false,
    api_url: "http://localhost:4300/api/",
    auth_url: "http://localhost:4400",
    auth_redirect_url: "http://localhost:4200/auth-callback",
    landing_url: "http://localhost:4500"
};
