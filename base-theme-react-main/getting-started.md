# Welcome to A Quickstart Guide for developing using the avidly react base theme

## Setting up your repo

Start by making a new repository in GitHub for your project, and then naming it after the client you will be working on. Project name should be all lowercase and words separed by hyphen (-). For example `client-name`. Make sure that the new repository is set to private.

Copy in the base theme code. This can be done from the base-theme-react repository (https://github.com/Avidly-UK/base-theme-react) by first downloading the code as a ZIP file and then extracting the files. Move extracted files in to the project folder. 

Make sure you have GitHub Desktop (https://github.com/apps/desktop) downloaded. From the GitHub Desktop clone the new repository you have created earlier and set local path to the folder where the base theme was extracted. Publish the main branch, this should now contain the base theme files.

If the project doesn't include `.gitignore` file, create one in the root folder. Copy the lines from here: https://github.com/Avidly-UK/base-theme-react/blob/main/.gitignore 

Create a `develop` branch under the main branch to ensure you don't work on the main branch, since this will be where your production ready code will live.

And now we are ready to start setting up the dev environment.

## Rename the project

Rename the project and theme. Go into `/cms-react-project/hsproject.json` and change the name, for example `client-name-project`. Then inside `/cms-react-theme/theme.json` file change the label, for example `client-name-theme`.

> **Optional**
> If you want to change `cms-react-project` and `cms-react-theme` folder names, for example to client name, those needs to be updated to `package.json` and `tailwind.config.js` as well. 

## Setting up your environment locally

Ensure you have NODE.js installed https://nodejs.org/en 

For the next steps you can use terminal in the Visual Studio Code, if you are developing with that.

### 1. Install dependencies

Open terminal and make sure it is directed in the project folder. Run `npm install`. This will install all the local development tools you need—like `@hubspot/cli` and `@hubspot/cms-dev-server`—and the dependencies used inside cms-react-app/ JS component code.

### 2. Uploading and Deploying on HubSpot

After you have made sure you have HubSpot CLI (https://developers.hubspot.com/beta-docs/guides/cms/tools/local-development-cli) installed, you can now run a `hs init` to connect the project to the portal using personal access key. Choose the portal you want to work in. 

When setting up JavaScript assets for the first time, you will need to deactivate and regenerate your personal access key making sure it includes `CMS Pages`, `Design Manager`, `Developer Projects`, and `GraphQL Data Fetching` permissions. This will create a `hubspot.config.yaml` file that is required for both uploading changes and local development. See the [HubSpot CLI documentation](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development#configure-the-local-development-tools) for more information.

Eensure that `hubspot.config.yaml` file isn't pushed to git, by making sure your .gitignore contains *yml.

> **Warning**
> If you are using an existing access key from a previous call to `hs init` or `hs auth`, you will need to deactivate and regenerate the access key to include new scopes necessary for local CMS React development.

After connecting to the portal, there are 2 commmands we will be using to deploying and uploading our project, the paths for these can be found in the package.json file and the name of the developer project can be changed in the cms-react-project/hsproject.json file

- `npm run deploy`
- `npm run upload:hubl`

`npm run deploy` will create you developer project this is where all the react code lives
`npm run upload:hubl` will upload the code and templates in the theme folder

### 3. Tailwind

For tailwind we will be running 1 command for building, which will build any tailwind used in both the theme and developer project into the theme stylesheet

- `npm run dev`

This will start a compiler that compiles on save. its important that when having change the styles, that you rerun the `npm run upload:hubl` to push the style sheet to the portal, we dont need to run the project command, since we just need to upload the style sheets

### 4. Developing Locally

Running `npm run start` will start your local development server

http://hslocal.net:3000 will then show you the modules in your project and you will be able to preview them, either in preview form, which is connected to the hubspot server, meaning default content like an image linked from the portal will show, or a standard version showing only local data, both auto refreshing on save

While this way is nice and auto updates, it falls abit short when it comes to the styling of the module, and you need to switch default content to see different layouts and options in the module.

Ways to get around this:

- 1: Run the deploy and upload command and then refresh your preview page like you would normally, but this is a long process and does feel slow

Preffered way so far:

- 2: Build your logic in a module, for the sake of this example, lets say we have a cards module with a layout field for 2,3, and 4 pr row. Then run deploy and upload, put the module on a page, then add the module 3 times one with each layout selected, publish the page (if no in a sandbox or dev server no index the page).

- Now open http://hslocal.net:3000/proxy and then pate in your pages url, it will now show as the live page, but be affacted by local changed with out uploading it, manual refresh is required but you can now style and tweak it with out uploading any code until your ready. you need to have your local server running for the proxy url to work

And final option: 

- 3: Add global CSS files temporarily inside the module `index.jsx` file:
```
<>
    <link rel="stylesheet" href="//full-file-path-from-hubspot/main.min.css"></link>
    <link rel="stylesheet" href="//full-file-path-from-hubspot/theme-overrides.css"></link>
    <section>
    </section>
</>
```

## Resources

- Hubspot CLI commands https://developers.hubspot.com/beta-docs/guides/cms/tools/local-development-cli
- Hubspot react repo for ispiration https://github.com/HubSpot/cms-react/tree/main
- Hubspot Quick start guide repo https://github.com/HubSpot-Academy/quickstart-guide-to-react-in-cms/tree/main which is connected to their React course http://academy.hubspot.com/lessons/quickstart-guide-to-react-in-cms
- Hubspot documentation https://developers.hubspot.com/beta-docs/guides/cms/content/modules/build-modules-and-partials-with-react
- Hubspot react documentation https://github.hubspot.com/cms-react/

- Tailwind docs https://tailwindcss.com/docs/installation
- React docs https://react.dev/reference/react

## notes

- Even though we are using react you can still build normal hubl modules and templates down in the theme folder.
- Using the deploy or local server will give you console errors explaining in detail where your issue might be.

## Known Issues

### “Modern” Yarn support:

> The repository has been tested with and supports the NPM and [“Classic” Yarn](https://classic.yarnpkg.com/lang/en/) package managers. There have been reported issues with [“Modern” Yarn](https://yarnpkg.com/) and “Hello World”. We recommend while working with this sample code that you do not use [“Modern” Yarn](https://yarnpkg.com/).

> Stylesheet not used when using the local dev server see ### 4 for how to work around this.