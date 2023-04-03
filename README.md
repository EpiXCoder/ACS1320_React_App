# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployed Page
https://epixcoder.github.io/ACS1320_React_App/

## User Stories
### User 1
As a tourist visiting San Francisco, I want to find a nice public space where I can sit and relax, so I go to the website and use the search function to look for spaces with benches or chairs. I find a few options and decide to visit one of them. I click on the space's page and read the description, which includes the address and directions on how to get there. I also check the business hours to make sure the space is open when I plan to visit. Finally, I use the map and the photos to get a better idea of the space and decide if it's the right fit for me.

### User 2
As a local resident who works near the Financial District, I often need a quiet place to have lunch or take a break from work. I remember seeing the website advertised somewhere and decide to give it a try. I click on the "random" button and get taken to a page for a small park I've never heard of before. I read the description and find out that it has plenty of shade and some picnic tables. I decide to give it a try and visit it the next day. I enjoy the space and decide to sign up for your website so that I can bookmark it and also receive updates about new spaces added to the list.

### User 3
As a researcher studying urban public spaces, I need a comprehensive list of all the privately owned public spaces in San Francisco, along with their features and characteristics. I find the website and browse the index to see all the spaces listed. I use the search function to filter the spaces, and then I note down the results. I also sign up to the page to stay informed about any updates or changes to the list.

## Website Outline
```
- SFPOPOS
  - Home
    - Header
      - Page Title: SFPOPOS
      - Sub title: San Francisco Privately Owned Public Open Spaces
    - Nav
      - NavLink: Home
      - NavLink: About
      - NavLink: Register
    - Page body: list of all spaces
      - Space component (for each space component)
        - Image
        - Space name
        - Address
        - Business hours
    - Footer
      - copyright
  - Space show page: for each space
    - Header
      - Page Title: SFPOPOS
      - Sub title: San Francisco Privately Owned Public Open Spaces
    - Nav
      - NavLink: Home
      - NavLink: About
      - NavLink: Register
    - Page body: Details of a space
      - Image
      - Space name
      - Description
      - Space features: outdoors, coffee, art, toilet, power 
      - Business hours
      - Coordinates
    - Footer
      - copyright
  - About
    - Header
      - Page Title: SFPOPOS
      - Sub title: San Francisco Privately Owned Public Open Spaces
    - Nav
      - NavLink: Home
      - NavLink: About
      - NavLink: Register
    - Page body: About
      - About title
      - About Description
    - Footer
      - copyright
  - Register
    - Header
      - Page Title: SFPOPOS
      - Sub title: San Francisco Privately Owned Public Open Spaces
    - Nav
      - NavLink: Home
      - NavLink: About
      - NavLink: Register
    - Page body: registration and sign up
      - Register
        - User name: label and input form
        - Password: label and input form
        - Firstname: label and input form
        - Last name: label and input form
        - Email: label and input form
      - Sign in
        - User name: label and input form
        - Password: label and input form
    - Footer
      - copyright    
```

## Wireframes
The wireframes for the webpage are available [here](https://www.figma.com/file/k1xxoFyHQ7081Eov0Gzcxk/SFPOPOS-Wireframe?node-id=6%3A108&t=wr9PdeBj7jIeagnN-1). Two designs available: one for [Large Andoird phones](https://www.figma.com/file/k1xxoFyHQ7081Eov0Gzcxk/SFPOPOS-Wireframe?node-id=0-1) and another for [14" Macbook Pro](https://www.figma.com/file/k1xxoFyHQ7081Eov0Gzcxk/SFPOPOS-Wireframe?node-id=6-108).

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
