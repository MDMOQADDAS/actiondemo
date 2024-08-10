# Demo Frontend

## Overview
An application build using reactjs that provide user login service.

## Installation
First, fork the repository

#### 1. Clone Repository
```bash
git clone https://github.com/your-repo/demo-frontend.git
cd demo-frontend
```

#### 2. Install Dependencies
Ensure you have Node.js installed. Install project dependencies using:
```bash
npm install
```

#### 3. Create a .env File
```bash
REACT_APP_BACKEND_URL=<backend_url>
```

#### 4. Deploy Locally
```bash
npm start
```

#### 5. Build for Production (optional)
To create a production build of your application, use:
```bash
npm run build
```

This command will generate static files in the build directory.


## Deploy with Docker
Ensure you have Docker installed on your machine.

#### 1. Create a Dockerfile
In the root of your project, create a Dockerfile with the following content:
```bash
FROM node
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

#### 2. Build the Docker Image
Run the following command to build your Docker image ( demofronend:1 is the name of image we choose, you can write any name):
```bash
docker build -t demofronend:1 .
```

#### 3. Run the Docker Container
After building the image, run the container with:
```bash
docker run demofronend:1
```

Verify the running container, below code shows the running containers. Also copy the <NAME|ID> of container demofronend
```bash
docker ps
```

### Inspect the container
Inspect the container with the given code to get the link of for the locally deployed application
```
docker inspect <NAME|ID>
```

Your application is now deployed as docker container.
