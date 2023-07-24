# Dan's Pizza - Restaurant Order Simulator
Welcome! This project was created with the intention to learn react and reinforce basic web application development concepts. It consists of this repository plus the following back-end and database repositories:

- [Dan's Pizza API](https://github.com/dfischesser/danspizza-api#readme)
- [PizzaDB](https://github.com/dfischesser/PizzaDB#readme)

Dan's Pizza is a technical demonstration using React (Next.js framework) and and C# .Net Core Web API backend. Both applications are implemented on Azure using Static Web Apps and App Services
## Services/Frameworks Used
- ReactJS (With Material UI)
- NextJS
- ASP.Net Core Web Api
- Azure SQL
- Azure Infrastructure
  - App Services
  - Static Web Apps
  - Azure Maps
  - Application Insights
  - Key Vault
  - Azure SQL


## React Front End
React code is implemented using Next.js. This application takes advantage of multiple features provided by the react framework.
- Server-Side Rendering (SSR)
  - getSeverSideProps is implemented to fetch account data and handle orders
  - getStaticProps is implemented to fetch menu data
- Client-Side Rendering (CSR)
  - JS fetch API is used to communicate with the back-end for anonymous and authorized requests
- Middleware
  - Next.js provides middleware to run code before any request to the site is completed
  - Middleware is used to decode the HttpOnly cookie and provide authorization for the user
- Routing
  - Pages Router is used to enable a SPA experience while preserving traditional URL based navigation


## Authentication and Authorization
Passwords are salted and hashed before being stored alongside account info in a MSSQL Database. 
Upon successful login, a JWT is created and transmitted via HttpOnly cookie. All interactions with the cookie are handled through middleware provided by Next.js

### Authorization Lifecycle

- Incoming Http Request from client
- NextJS Middleware
  - Check login cookie (can be true/create/false)
    - True or Create
      - Decode JWT
      - Sets client side cookies (firstName, role, login)
        - Check role. If request is a backoffice page and user is not an employee, redirect to homepage.
    - False (incoming logout request)
      - Delete all tokens
- ReactJS Front-end
  - Checks client-side accessible login token (Create/True)
    - Create: Set Login State to true
    - True: Same as create plus sets profile menu label to first name
