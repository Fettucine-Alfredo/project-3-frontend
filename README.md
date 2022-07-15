

# Trakr

SEIR-59 Project 3 Team Fettucine Alfredo: Alfredo, Devin, Soma, and Shiv

Project 3

## Description 

This is the frontend to [Trakr](https://jobtrakr.netlify.app/), a tool designed to help users keep track of their own job application processes by creating a personal database of job listings they're currently working on.

After an authentication process the user will be able to add a job (using a detailed form that outlines not just the basic elements of the job but what skills are required) plus their current step in the process (whether they're researching, applying, applied, or scheduled for an interview).

## Technologies

-HTML5
-CSS
-Node.js
-React.js
-Bootstrap.js
-Netlify

The app is built on React and Boostrap with responsive design as a guiding principle, and deployed on Netlify, intended to work in tandem with the backend which utilizes Express and connects to MongoDB where the information for the user's jobs are stored in json format (which is itself deployed using Heroku).

The frontend consists of six components overall: a Home component from which the user will login or sign up from, a Header which serves as the navigation bar for the wesbite and is persistent, and About page that explains in brief the functionality of the website, a User page that is displayed once the user is authenthicated accompanied by the Jobs component which is a list of all of the entries the user has entered into the database so far (along with options to add a new entry, or edit and delete currently existing ones). Finally, a succinct JobDetails component that displays the full extent of the informaton the user entered including the Company name, position Title, relevant skills, current step, and contact information.

Right now the authentication process is extremely basic, as a user is able to sign up and then log back in by using their own username, but a more robust authorization process for Passport.js is slated to be completed next to explicitly disallow any user from being able to simply punch in another person's username to access their information.

## Development

Although there were no particularly big obstacles that emerged during development (nothing ever really stonewalled us for too long a stretch of time - at worst mystified or having to review material for an hour or two), every component to say the least took slightly longer than expected to complete. We intended to have the app at MVP by the third full day of development and then our stretch goal of full user authorization implemented by the end of the next day. This was the first time we worked as a team on something for several days and had to acclimate to the way git workflow functions, and the process of pushing, pulling and rebasing. To help us communicate and organized our development we made use of Trello to create a work timeline upon which each team member could grab a task and begin work on it, making it obvious to everyone else what was currently done, what needed review, and what was currently in the process of being made (so if someone needed to reference a componeent currently in the works they always knew where to go ask). 

However, robust teamwork and code review made deployment fairly painless on the fourth day of development - once it came time to have the site up on Heroku we encountered only minor errors we could fix within minutes each of discovering them. Overall the project was a great success, and everyone did their best to ensure things could go as smoothly as possible.
