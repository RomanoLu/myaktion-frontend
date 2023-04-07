# Basisimage
FROM node:14-alpine

# Verzeichnis erstellen und es als Arbeitsverzeichnis festlegen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Projekt kopieren
COPY . .

# Build durchführen
RUN npm run build

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
