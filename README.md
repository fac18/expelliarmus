
## Installation

1. clone the repo git clone https://github.com/fac18/expelliarmus.git
2. run npm i
3. we're *almost* there with deploying to Netlify, but for now... set up a token.js file in your root folder - instructions below
4. check our tests with npm t
5. start the server with npm start and go to localhost:3000!

#### token.js

You will need a file called 'token.js' in your src folder, with API tokens for:

1. [Github](https://github.com/settings/tokens)
2. [Harry Potter API](https://www.potterapi.com/)

in the following format:	

```	

export const tokens = {
  gh_token: "YOURTOKENHERE",	  
  hp_token: "YOURTOKENHERE"
};

```

If you're code-reviewing our project you can ask us for our tokens on Slack, to make things quicker.


## About Expelliarmus

We're buiding a Street Fighter style Harry Potter game! 🧙 🧙

Grab a friend, find your Github user profile (by searching for your organisation (e.g. foundersandcoders) and team (e.g. FAC18), and get ready to work some devious duelling magic.


### User Stories:

As a user I want to: 
- Enter my Github organisation and team to see a list of team members' names and avatars
- Select player by clicking name or avatar to enter the game
- Click a button to cast a spell attacking my opponent and receive feedback via a progress bar on how I've reduced their health
- Click a button to eat a chocolate frog and increase my own health and - see how much it has changed on a progress bar
- Know when my turn has ended
- See when the game is over (when a player reaches 0 health)

## Stretch Goals

- vary levels of attack - ie. different spells reduce health by varying degrees
- animation
- a few specific spells return a specific corresponding visual response  
- add sounds
- add more buttons to charm or curse

## Data flow diagram

How the data moves around the components!

![](https://imgur.com/uMhgauZ.jpg)


## Things we've learned

- REACT!!!!
- REACT TESTING!!!!! (kind of)


// create react app readme below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
