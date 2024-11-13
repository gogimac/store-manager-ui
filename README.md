
# Store Manager - Angular Application

This is the **Store Manager** application, an Angular-based front-end application designed for managing products. The application can be run locally or inside a Docker container, with both mock and real service options available for data fetching.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Via Docker](#via-docker)
  - [Locally with Yarn](#locally-with-yarn)
- [Using the Mock and Real Services](#using-the-mock-and-real-services)
- [Screenshots](#screenshots)
- [Troubleshooting CORS Issues](#troubleshooting-cors-issues)

## Installation

Before running the application, ensure you have the following installed on your machine:

- **Node.js** and **Yarn**
- **Docker** and **Docker Compose** (for running inside a container)

### Dependencies

To install the necessary dependencies, run:

```bash
npm install -g npm-check-updates
ncu -U
npm install
npm install --legacy-peer-deps
npm audit fix --force
ng add @angular/material
```

## Running the Application

The application can be started in two ways: inside a Docker container or locally.

### Via Docker on localhost:8086

To run the application inside Docker, execute:

```bash
./start.sh
```

This command builds and runs the application within a Docker container. The containerized environment provides an isolated instance of the application that includes the back-end service if configured.

### Locally with Yarn

Alternatively, you can start the application locally with:

```bash
yarn start
```

This will start the Angular development server at `http://localhost:4200`. Note that if you are using the real back-end service locally, you might encounter CORS issues.

## Using the Mock and Real Services

Due to CORS issues, you may choose between a mock service and the real service:

- **Mock Service**: A local mock service is available for development and testing. This service does not require the Java back-end to be running and is configured to avoid CORS issues.
- **Real Service**: The real back-end service requires the Java back-end server. When running the Angular app and the Java server on separate networks (e.g., one inside Docker and the other locally), you might encounter CORS issues. 

To switch between the mock and real services, you can modify the service configuration in the Angular codebase.

## Screenshots

Screenshots of the application are available in the `screenshots` directory to provide a visual overview of the interface and its features.

## Troubleshooting CORS Issues

When running the real service and the Angular app on different networks, CORS (Cross-Origin Resource Sharing) issues may arise. The following options can help:

1. **Run the Java back-end and Angular front-end on the same network** (e.g., within Docker Compose).
2. **Enable CORS** in the Java back-end server, if not already enabled, or configure it to allow requests from `http://localhost:4200`.
3. **Use the Mock Service** for development to avoid CORS issues when the Java service is not running in the container or on the same network.

---

This README provides instructions for setting up, running, and troubleshooting the application. Let me know if you'd like any additional details or customization.
