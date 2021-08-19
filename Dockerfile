FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm run build
RUN npm install -g serve
COPY . .
CMD ["serve", "-s","build"]

#docker build -t gcr.io/kubernetes-sd-323304/vaccinefront .