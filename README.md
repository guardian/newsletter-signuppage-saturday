### Running locally

You need the gulp-cli installed globally: `npm install -g gulp-cli`

Make sure you are using the correct version of node with NVM: run `nvm use` in the root of the repo. 
If you don't have nvm installed, add it: `brew install nvm`.

Install node modules: `npm i`

To run locally: `npm start` or `gulp`.  

### Create a new atom 

Duplicate an existing atom. Remember to change the path in the server/render.js file to point to the html file in the new atom. 

### Deploy to S3

To deploy to the Interactives S3 bucket you need AWS credentials for the Interactives account in your command line. You can get these from the Guardian's permissions manager system [Janus](https://janus.gutools.co.uk/). You need to be assigned these permissions and be on a Guardian network or VPN to see them on Janus. 

Fill out config.json:

```
{
    "title": "Title of your interactive",
    "docData": "Any associated external data",
    "path": "year/month/unique-title"
}
```

Deploy: `gulp deploylive`

Get the deployed links: `gulp url`

The link can be pasted into a Composer file 


### Testing in apps

To test on the Guardian apps - follow our 
[Testing in Apps guide here](https://github.com/guardian/interactive-atom-template-2019/blob/master/docs/guide-to-apps-testing.md)

To test with dark mode on apps - see [Testing in Dark Mode](https://github.com/guardian/interactive-atom-template-2019/blob/master/docs/dark-mode-in-apps.md)


### Loading content (images, text, links)

Content is pulled from a spreadsheet using Mustache (https://mustache.github.io/) to facilitate the editor's access. 
The spreadsheet needs to be shared with docs-tool@guardian-visuals.iam.gserviceaccount.com

Add the link provided in https://visuals.gutools.co.uk/docs/ in render.js

### sign up form

The sign up form is added via an iframe.
This is the spreadsheet with all the embed codes: https://docs.google.com/spreadsheets/d/1AvNd0dmtUzZAiDBwXyutdrk00atl6ZR_4E0uWi6qIc0/edit#gid=0



