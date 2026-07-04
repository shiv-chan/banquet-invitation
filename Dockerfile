FROM node:24.18.0
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN groupadd -r appuser &&  \
    useradd -r -g appuser appuser && \
    chown -R appuser:appuser /usr/src/app

USER appuser

EXPOSE 3000

CMD ["npm", "run", "dev"]