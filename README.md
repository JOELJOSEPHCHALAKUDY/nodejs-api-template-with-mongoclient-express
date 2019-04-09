# Nodejs REST API  with Express and Mongodb , MongoClient
Nodejs REST API template  derived from public repo https://github.com/JOELJOSEPHCHALAKUDY/Nodejs-REST-API-startup-template-with-login-and-authenticaton.git

The main purpose of this repository is to show a good end-to-end project setup and workflow for writing Node REST API  



# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/JOELJOSEPHCHALAKUDY/Nodejs-REST-API-startup-template-with-login-and-authenticaton.git
```
- Install dependencies
```
cd <project_name>
yarn install
```
- Configure your mongoDB server
```bash
# create the db directory
sudo mkdir -p /data/db
# give the db correct read/write permissions
sudo chmod 777 /data/db
```
- Start your mongoDB server (you'll probably want another command prompt)
```
mongod
```
- Run the project
```
nodemon
```
> **Note!** Make sure you have already have  installed nodemon as global dependency or dev dependency `yarn global add nodemon` othewise you may encounter following error:- nodemon is not recognized as internal or external command, operable program or batch file


Finally, navigate to `http://localhost:4000` and you should see the template being served and rendered locally!

# Deploying the app
There are many ways to deploy an Node app, and in general, nothing about the deployment process changes here 
