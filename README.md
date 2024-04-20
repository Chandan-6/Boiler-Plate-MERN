# Key-Take aways for Ready to start-setup.

- This repo consists of 2 main folders **client** & **server**
- ### Client side
    - Contains clean well defined structure of folders.
        - assests
        - pages
        - utils
    - pages folder contains an useFull inital syntax for writing a jsx file. _Saves time_
    - utils contains the starting stage for creating data objects.
    - Added _BrowserRouter, Routes, Route_ for _navigating through multiple pages_ as required.
        - Import your page & apply your specified _endpoint_ as required.
    - Installed _Tailwindcss_, now start working directly by applying your _styles_. 
    - Necessary Packages installed
        - axios _For making HTTP requests from the client side._
        - js-cookie _For handling cookies in JavaScript, By using this you can set cookies in header while sending a reqest._
        - jwt-decode _For decoding JSON Web Tokens (JWT) on the client side._
        - lucide-react _for excellent Clean Icons_ 
            - [Docs](https://lucide.dev/icons/)
        - react _core library for building user interfaces in React._
        - react-router-dom _For adding routing functionality._
        - react-hot-toast _For displaying toast notifications._
            - [Docs](https://react-hot-toast.com/)
- ### Server side
    - Contains ready to start server setup
        - _Connection code_ to Database.
        - _Authentication Middleware_.
        - Sample _User Model_ Setup.
        - Added well set up _routes_ for **Login, Signup, email-verification.**
        - _Workable email sending code & otp generator code._
        - Sample .env file
        - Ready setup for starting server, go to `index.js`


# Steps to get this _Repo_ to your local computer/repo.
- Download this repo (default :  zip file) from the above `<-code` _Button_
- `npm install` in both folders `( client, server )` as both are executed at a time in _split terminal_.
- Now you are get set ready to go 🧑‍💻. 
- To run React App, make sure you are on the correct path in the terminal, run `npm start`
- To run Server, ( in the split terminal ) run `nodemon index.js`

# Hurray your are live 🎆

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
