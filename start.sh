rm -rf node_modules package-lock.json yarn.lock
docker system prune --all
docker compose down
yarn install
yarn build
docker compose up --build