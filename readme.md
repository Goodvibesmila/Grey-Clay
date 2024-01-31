## Projectname: GREY CLAY
- Built on Npm install.
- React/ts frontend.
- Node.js/express backend.
- Third part, stripe and mongoDb mongoose/Atlas
- Work has been viewed in Google chrome while building.


# How to run the project:


1. Clone repository to desktop.
2. Open folder in VS-code or similar IDE.
3. Paste .ENV -file in server-folder.
(Given on it´s learning, make sure the file-name is .env (the dot might not be set in the name when saved in the IDE) Also make sure both keys given on it's learing are in the .env.file)

4. Open two terminals and write:
cd server (in one of the terminals).
cd client/vite-project ( in the other terminal).

5. Write in both terminals:
npm install
(Make sure package.json and package-lock.json gets installed correctly on both server and client)

6. Write in both terminals:
npm run dev (To run the project).

7. Make sure that the console.log on server-side shows in the terminal: connected to DB/Server is running.

8. To open the project in the web, hover over "http://localhost:5173/"  and click on "follow link". 

9. Make sure that you are in the right file, while doing all of the above, like explaned. 

10. The project uses API from MongoDB and Stripe.



# Add .env-file (Server-folder) (key added on it'slearning)



## Dependencies:

### Serverside:
vite@latest = latest version of npm
Npm
Express
Nodemon
dotenv
stripe
cors
bcrypt
mongoose
mongodb
Fortawesome-free
cookies


### clientside:

Fortawesome
Npm
react (+react-router-dom)
typescript (incl. eslint)
