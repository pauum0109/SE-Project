# SE-Project---G8

Set up prisma:
yarn add prisma @prima/client
or
npm install @prisma/client

npx prisma init --datasource-provider postgresql

npx prisma migrate dev

npx prisma studio

Set up docker:
cd src/docker
docker compose up
