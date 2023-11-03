#Образ nodejs
FROM node
#Рабочая дериктория
WORKDIR /app

COPY package.json /app

RUN npm install
# Скопировать из этой папки в папку /app
COPY . .

ENV PORT 3000
#port
EXPOSE $PORT


CMD ["npm", "start"]