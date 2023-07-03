# Blog app demo

This is a sample project - simple blog website built with React and nodejs.


# Prerequisites

nodejs,
mysql server,
npm package manager or something alternative like yarn


# Quick start

Disclaimer: front-end application should work without back-end application.

First, mysql needs to be setup like this:
schema: blog

tables:

```sql
CREATE TABLE `posts` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` longtext NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `stock_data` (
  `date` datetime NOT NULL,
  `open` varchar(45) NOT NULL,
  `high` varchar(45) NOT NULL,
  `low` varchar(45) NOT NULL,
  `close` varchar(45) NOT NULL,
  `volume` varchar(45) NOT NULL,
  PRIMARY KEY (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(511) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

Then, in api folder .env text file needs to be created to store these environment variables:
DB_HOST - database url adress
DB_USER - database user
DB_PASSWORD - database password
DB_NAME - schema name(blog)
ALPHA_API_KEY - api key from https://www.alphavantage.co/

Back-end application is stored in "api" folder and front-end application is in "client" folder.
In each of these directories, the following commands need to be executed: npm install and npm start.

And this is it.


# Screenshots


![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/33ad5690-2092-4904-b993-92ca9c33c5dd)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/c0789787-1821-4ee7-b917-3ae6590eb9cf)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/d5a6824c-2e93-4bb7-a8d2-21985fea83c5)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/665b63ae-894b-4f75-a564-f2d9d6724be2)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/6865a6bc-85ce-469b-89da-8964677cb31b)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/23791e70-0fd2-4620-94f1-3d3ec1764b19)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/b7e55103-8375-434b-b545-e4370366dc3b)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/0d51997b-1596-4c90-9638-e9d40bd7b7d2)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/dda93be3-dbe5-4737-93fb-ab3af38c272e)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/c97417c1-97c4-4e34-91de-17429dcde8da)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/409197f0-66e3-40e4-b0e4-74658756fbcf)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/75faf874-92df-4ef2-9929-8ee7940dfba4)

![image](https://github.com/MatasJurev/blog-app-demo-nodejs-react/assets/87492782/e3e035af-2a0d-4d94-afd5-2718f2fa6af7)









