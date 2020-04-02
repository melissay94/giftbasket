# GiftBasket


## Elevator Pitch
Progressive Web Application allowing users to create and save different gift ideas for their friends in order to have a list to reference during special moments in those friends lives.

## User Stories
- User always sees or thinks of good gift ideas for their loved ones, but never remember them when it's actually their birthday or a holiday. They use GiftBasket to capture those ideas in the moment to reference later.

## Wireframes

- Landing Page - Create an account / Sign In
- Home Page - View all the different "baskets" that you've created (A basket is made per person you add to your profile)
- Create a Basket page - Takes in a name, birthdate, maybe an address and any primary gift ideas
- View Basket page - See a specific basket and everything in it. Can remove ideas from here, and add gift ideas.
- Edit Basket - Edit details about the person.
- User Profile page 
- Edit User Profile page
###Stretch goal:
- I'd love to create like, a feed page for sharing gift ideas that everyone can see.

## Proposed Architecture
- Backend in Express, Sequelize, Postgres
- I want to use GraphQL and Apollo for my query language
- Use the Cloudinary API to save photos
- Frontend in React, TypeScript, with making it a PWA using create-react-app as the base
- Material UI since I'm making it a PWA
### Stretch goal: 
- I want to create and integrate a chrome extension to help make it easier to save things to your baskets without having to switch tabs and such.

## MVP
- Queries and mutations for GraphQL set up with the backend
- Auth using Bcrypt for create account and login
- Able to create baskets and add/remove ideas 


