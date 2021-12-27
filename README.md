# express-auto-gitpull

Small API to automatically pull my git repositories from GitHub on a linux machine.

## Requirements

- git
- npm
- pm2

## Instructions

- Add `https://<DOMAIN>/gateway` to Webhooks in your GH repository, where `<DOMAIN>` is your domain
- Execute the following command to give www-data read+write permissions to your local repository: `setfacl -R -m u:www-data:rw <FOLDER>`
- Change the `start` script in your package.json file to `npm i && node server.js`
- Install dependencies at least once
- Copy `pm2-process.json` to your project and change the name
- On the project folder, run `pm2 start pm2-process.json`