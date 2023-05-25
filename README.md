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

THE HOMESCHOOLING HELPER APP

This app is designed to assist homeschooling families in organizing and keeping track of assignments and the school day.  The features include:
users (authentication coming soon)
a calendar to keep track of events, with color-coding by user
assignment page that displays user's assignments for the day and there will be the ability to check off when completed
a blog for the user to document what they did and learned that day
an administrative section for the homeschooling parent to add assignments and users
future features include a display of the daily affirmation, a practice page with flashcards specific to the user

To use (for now):
click Home in nav menu to go to the screen that userID = 1 would see
click the go to assignments button to see user1's assignments
click Blog in nav menu to see user1's blog entries (they will be clickable in future for full entry)
click add blog entry button and be sure to enter 1 for user id - after you submit the new blog appears on your blog page

if you enter ritualmomma in the username box in the top right corner and submit, you will be taken to the adminstrative page, where you can add assignments and users. if you add an assignment, be sure to add to userID = 1 so that you can see it appear on the assignment page.

stretch goals - authentication so that you can sign in as a user to have your specific blogs and assignments displayed.

All of this posts and gets from the backend API that I created.


API link https://homeschool-app.onrender.com/

API routes :
/assignments/user/:userID

/calendars

/blogs/user/:userID

/users

/affirmations
