# myStore

A full-stack web application with a React client and Node.js/Express/MongoDB server.

## Project Structure

```
myStore/
  client/   # React frontend (Next.js)
  server/   # Node.js backend (Express, MongoDB)
```

## Setup

### 1. Server

- Go to the `server` folder:
  ```
  cd server
  ```
- Install dependencies:
  ```
  npm install
  ```
- Create a `.env` file with your MongoDB connection string:
  ```
  PORT=3000
  MONGODB_URI=your_mongodb_connection_string
  ```
- Start the server:
  ```
  npm start
  ```
- The server runs on `http://localhost:3000`.

### 2. Client

- Go to the `client` folder:
  ```
  cd client
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the client (Next.js):
  ```
  npm run dev
  ```
- The client runs on `http://localhost:8000` (or your configured port).

## API Endpoints

### Server (`/products`)
- `GET /products/:id` — Get product details by ID
- `PUT /products/:id` — Update product price

### Example Usage

- Use Postman or the frontend to interact with the API.

## Environment Variables

- **Server:**  
  - `PORT` — Server port (default: 3000)
  - `MONGODB_URI` — MongoDB connection string

## License

MIT
