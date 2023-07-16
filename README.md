# Dan's Pizza - Restaurant Order Simulator
Welcome! This project was created with the intention to learn react and reinforce basic web application development concepts

Dan's Pizza is a technical demonstration using React (Next.js framework) and and C# .Net Core Web API backend. Both applications are implemented on Azure using Static Web Apps and App Services

## React Front End
React code is implemented using Next.js. This application takes advantage of multiple features provided by the react framework.
- Server-Side Rendering (SSR)
  - getSeverSideProps is implemented to fetch account data and fulfill orders
- Incremental Static Regeneration (ISR)
  - getStaticProps is implemented to fetch menu data
- Middleware
  - Next.js provides middleware to run code before any request to the site is completed
  - Middleware is used to decode the HttpOnly cookie and provide authorization for the user
- Routing
  - Pages Router is used to enable a SPA experience while preserving traditional URL based navigation

## Shopping Cart
- Cart Items are managed through the useReducer hook.
- 
## Authentication and Authorization
Passwords are salted and hashed before being stored alongside account info in a MSSQL Database. 
Upon successful login, a JWT is created and transmitted via HttpOnly cookie. All interactions with the cookie are handled through middleware provided by Next.js
