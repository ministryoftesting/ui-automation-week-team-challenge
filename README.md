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

### Context 
The challenge application contains a GUI that reads data from a third party application and renders it in a dashboard for the user to view. The monitor app shows details of nodes that are running 

### Your challenge

Your task is to build an automated solution that will open the monitor app and test what the monitor GUI looks like in a set of different scenarios:

### Scenario 1:

The monitor renders three nodes all appearing green

### Scenario 2:

The monitor renders three nodes one showing green, one showing amber (with warning) and one showing red (with error)

### Scenario 3: 

The monitor renders six nodes with at least one node in green state, one amber state and one red state
