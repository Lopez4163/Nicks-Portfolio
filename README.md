# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Nicks-Portfolio

**Start with NPM I and then NPM RUN DEV**


Docker Instructions
=======================
Stop and Remove the Container
Stop the running container:
--> docker stop portfolio_site

Remove the stopped container:
 --> docker rm portfolio_site

Remove the Docker Image
Remove the Docker image:
--> docker rmi portfolio_site:v1.0

Re-build the Docker Image
Re-build the Docker image:
--> docker build -t portfolio_site:v1.0 .

Re-create and Start the Container
Re-create and start the container in detached mode:
--> docker run -d --name portfolio_site portfolio_site:v1.0

TO PULL CHANGES AND UPDATE Container

Pull the latest changes from your repository:
git pull

Rebuild and restart the container using Docker Compose:
docker-compose up -d --build




