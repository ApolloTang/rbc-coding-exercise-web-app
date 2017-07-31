
Althought I attached the src code in email, you can also clone
it from bitbucket:

  web-app:

    https://bitbucket.org/apollotang/rbc/overview

  api:

    https://bitbucket.org/apollotang/rbc-api/overview


It is also deployed to heroku, so you can look and play with it
right away:

  web-app:

    https://rbc-transfer.herokuapp.com

  api:

    https://rbc-api.herokuapp.com


````````````````````````````````````````````````````````````````

 To compile the web app for development run:

  1. yarn       // this installs dependency
  2. yarn dev   // this will compile with webpack and watch for change, if you don't want to watch, used 'yarn build'
  3. yarn start // this will start express app and its server


 There is no compilation step for the api, simply run yarn to install dependency:

  1. yarn       // this install dependency
  3. yarn start // this will start node server


 Web app runs at localhost:3000
 Api runs and localhost:3001 (CORS)

 Login does not required password, it is a fake one, it pretends
 to put an fake 'token' into the redux store to kick start a sesssion.
 When you logout, the 'token' is removed and the session is killed.


To examime/evaluate you should install Redux and React tools:

  https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
  http://extension.remotedev.io/


 The web app is pretending to be an addon module to an existing
 'static' webapp, (which is the express application).
 It is like a sand box, even the css is reset.



```````````````````````````````````````````````````````
****************************
** Everything is a module **
****************************

I need to explained that the the achitecture of this react/redux app
is somewhat different from the popular one you usually see online.

You see what I mean if you cd into app-ui/containers/ :

~/Desktop/rbc/src
$ tree app-ui/containers/ -L 2
app-ui/containers/
├── header-control
│   ├── index.js
│   ├── selector.js
│   ├── styles.scss
│   └── to-delete
├── login
│   ├── action-names.js
│   ├── action.js
│   ├── index.js
│   ├── reducer.js
│   ├── selector.js
│   └── styles.scss
├── profile
│   ├── action-names.js
│   ├── action.js
│   ├── index.js
│   ├── reducer.js
│   ├── selector.js
│   └── styles.scss
└── transfer
    ├── action-names.js
    ├── action.js
    ├── index.js
    ├── reducer.js
    ├── selector.js
    └── styles.scss


 This is a modular achitecture -- all the relevent reducer, action,
 action-name, selector, style for each component/feature is
 resite in a folder.

 The usual achitectural structure is to have all reducers in
 one folder; actions in another; and components in another.  This
 way of structuring your app becomes a problem when your app scales.
 For the past two yeasr, this happenned to me -- as my app grows
 I spend almost half of my time looking for related file of a
 feature, very inefficient.

 Modular achitecture like the one you see in this repo make development
 fast, you know where all your file are related to a feature.
 and whenever you need to develop a new feature, you can simply grap the
 existing one, clone it as a boiler plate, and your are ready to go.

 Now that I have introduced you to my modular achitecture concept,
 lets go over the folder to have a picture of the entire app:


~/Desktop/rbc/src
$ tree  -L 2
.
├── app-ui                  // This are the components you literal see at the screen
│   ├── containers          // container are components that has access to store
│   └── presentation        // presentation are dumb component

├── common
│   ├── styles              // commone style like font, imgs, reusuable mixin for styles sit here
│   └── utils               // helper script goes here

├── main.js                 // this is the entry of entire app
├── main.scss               // each js file usually has a style file accompany it, this scss file bootsstrap the style system for this app

├── root-app
│   ├── index.js            // root app is the top level of you domain specify application
│   ├── navigations         // the main item here is the router or the navigation
│   ├── styles              // the styles set up of this applicalition, like you global color, global typography etc.
│   └── styles.scss         // entry point of you style

├── root-infarstructure     // this is the root of the infarstructure
│   ├── action-names.js
│   ├── config.js
│   ├── create-history.js
│   ├── index.js
│   ├── middleware
│   ├── reducer.js
│   ├── store.js
│   └── style.scss

├── services                // all your business logics goes here
│   ├── domain
│   ├── sessions
│   └── transfer

├── vendor                  // third party library goes here
│   ├── materialDesign-colors.scss
│   └── third-party-code.js

└── widgets                 // widgets are reusuable dumb component, that can be use in other application
    ├── redux-input
    └── simple-navigation























