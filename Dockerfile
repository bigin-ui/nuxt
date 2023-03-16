FROM node:16-alpine as build-stage
WORKDIR /app
COPY ./package.json ./
RUN yarn
COPY . .

ARG NUXT_PUBLIC_API_URL
ARG NUXT_PUBLIC_API_SYSTEM_ID
ENV NUXT_PUBLIC_API_URL=${NUXT_PUBLIC_API_URL}
ENV NUXT_PUBLIC_API_SYSTEM_ID=${NUXT_PUBLIC_API_SYSTEM_ID}

RUN yarn build

FROM node:16-alpine as production-stage
WORKDIR /app

COPY --from=build-stage /app/.output ./.output

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs"]