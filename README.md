# CA3 - A Start Seed for JAX-RS, React and React Native based applications

![Alt text](/overview.png?raw=true "Overview")

 This project contains a start seed, which allows one to quickly get started with new applications. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Software Prerequisites
(Instructions for this seed will assume the use of this software, but instuctions should be somewhat usable in other programs)
```
Netbeans
- JAX-RS
- GSON
- mysql connector

Visual Studio Code
- React
- React-Native

Expo SDE & Expo Client (mobile)

Mysql Workbench

Other:
- Github
- Git Bash
- Node.js
```

### Installing

instructions in how to use the seed:

1 . Clone the repository and go to the CA3 folder.


Backend:	
```
- Open the [CA3Backend] project in NetBeans.
- Add a persistence unit. 
- Create a local database and connect through the Persistence Unit.
- Add some Entityclasses to the Persistence unit.
- Start the project, or deploy the .war file to a remote server.
```

Frontend:
```
- Open the [ca3react] project in Visual Studio Code or Netbeans.
- Open Git Bash
- type "yarn install" to install the dependencies
- open file "package.json" and change the "/config/URL" value to be the backend URL
- type "yarn start" to start the server

```

Native Frontend:
```
- Navigate to the [CA3Native] project folder
- Open Bash
- type "yarn add exp -g" to install Expo terminal tool (create user/login) 
- install Expo Client on your mobile device
- type "yarn install"
- open file "package.json" and change the "/config/URL" field value to your backend URL
- open a new Bash
- type "exp start --lan  (or empty to tunnel through Expo)
- Open Expo Client on your mobile device
- Click the project to view the app or scan the QR code from the terminal 

```

## Authors

* **Anders H. Christiansen** - *cph-ac172@cphbusiness.dk* - [Github](https://github.com/Anders1333)
* **Jonas V. B. Hein** - *cph-jh365@cphbusiness.dk* - [Github](http://github.com//Zenzus)
* **Andreas D. Jørgensen** - *cph-aj285@cphbusiness.dk* - [Github](https://github.com/Ddomino)
* **Thomas Ebsen** - *cph-te52@cphbusiness.dk* - [Github](https://github.com//Srax)