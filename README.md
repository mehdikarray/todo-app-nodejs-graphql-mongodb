# Todo-app

### A todo app with node.js - express, graphql - (graphql compose), mongodb (mongoose)
                                                                                                                                                                                                                                                                                                                            
### Redis (We use redis for token blacklisting)

_Mac (using [homebrew](http://brew.sh/)):_

```bash
brew install redis
```

_Linux:_

```bash
sudo apt-get install redis-server
```

### We use [yarn](https://yarnpkg.com/) - [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) with [lerna](https://www.npmjs.com/package/lerna)


```bash
cd workspaces/api
```

### COPY .env.example to .env

```bash
cp .env.example .env
```

### API Start

```bash
yarn start
yarn start:local # with nodemon
```

### Docker compose

```bash
docker-compose up -d --build
docker-compose -f docker-compose.dev.yml up --build # with nodemon
```

### ESlint Start

```bash
yarn lint
yarn lint:write # with prefix --fix
```

### API Structure

```bash
├─ src
│  ├─ graphql
│  │  ├─ index.js
│  │  ├─ schema.js
│  │  └─ types.js
│  ├─ i18next
│  │  ├─ locales
│  │  │  ├─  en.json
│  │  │  └─  ge.json
│  │  └─ index.js
│  ├─ middleware
│  │  ├─ authentication.js
│  │  ├─ authMiddleware.js
│  │  └─  index.js
│  ├─ module
│  │  ├─ auth
│  │  │  ├─ mail
│  │  │  │  ├─ index.js
│  │  │  │  └─ userMail.js
│  │  │  ├─ service
│  │  │  │  ├─ index.js
│  │  │  │  └─ userService.js
│  │  │  ├─ index.js
│  │  │  ├─ resolvers.js
│  │  │  ├─ types.js
│  │  │  └─ user.js
│  │  ├─ todo
│  │  │  ├─ index.js
│  │  │  ├─ resolvers.js
│  │  │  ├─ types.js
│  │  │  └─ todo.js
│  │  └─ index.js
│  ├─ service
│  │  ├─ logger.js
│  │  └─ nodemailer.js
│  ├─ validator
│  │  ├─ index.js
│  │  └─ userValidator.js
│  ├─ view
│  │  └─ template
│  │     ├─ reset-password
│  │     │  └─ html.ejs
│  │     ├─ verify
│  │     │  └─ html.ejs
│  │     └─ verify-request
│  │        └─ html.ejs
│  ├─ index.js
│  ├─ mongoose.js
│  └─ redis.js
├─ .dockerignore
├─ .env.example
├─ .eslintignore
├─ .eslint
├─ .gitignore
├─ Dockerfile
├─ Dockerfile.dev
├─ README.md
├─ docker-compose.dev.yml
├─ docker-compose.yml
└─ package.json
