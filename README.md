# UI Automation Week Team Challenge
This repository contains the application code required for the UI automation week team challenge. In this readme you can find details on how to get the application started and the challenge details.

## Starting up the challenge app

This application requires the following tools to be installed:

* Node 14.15.5
* Yarn 1.22.10

Once setup, clone or download this repository, `cd` into this project folder and run `yarn install`.

Once the installation process has completed, run `yarn start` to bring the application up.

The application can be accessed at: `http://localhost:3000/`

## The challenge

### Introduction:

Spend any time working on automated checks, whether it’s UI or not, you quickly notice that there are a lot of different things that need managing. Data, assertions, reports, execution, etc. all need to be thought about and implemented to create automated checks that are valuable to a team. That’s why in this challenge, as a Team, you’re going to build a solution that requires you to think deeply about the type of framework or tool you want to use in your automation.

### Purpose:

This challenge gets you thinking about the full lifecycle or anatomy of UI automation. To succeed you will need to consider:

* How you’re going to manage data?
* How you’re going to assess the information displayed on the UI?
* What information you’re going to report?
* Where are you going to run it?

### Scenarios:

#### Context 
The challenge application contains a GUI that reads data from a third party application and renders it in a dashboard for the user to view. The monitor app shows details of nodes that are running 

#### Scenario 1:

The monitor renders three nodes one showing green, one showing amber (with warning) and one showing red (with error)

##### Purpose
The goal for this scenario is to establish a framework that can open the browser and check the different nodes

#### Scenario 2:

The monitor renders three nodes all appearing green

##### Purpose
The goal for this scenario is to determine how to update the UI when you have no control over the third party API

#### Scenario 3: 

The monitor renders six nodes with at least one node in green state, one amber state and one red state

##### Purpose
The goal for this scenario is to complete your framework to handle multiple scenarios of checking.
