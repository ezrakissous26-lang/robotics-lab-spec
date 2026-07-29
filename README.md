# Robotics Lab Specification API

## Description

This project is a backend API for managing robotics lab sessions and students.

The project uses two databases:

* Supabase (PostgreSQL) for lab sessions
* MongoDB Atlas for students

The API is built with Node.js and Express.

---

## Technologies

* Node.js
* Express 5
* MongoDB Atlas
* Supabase
* Docker

---

## Installation

Install the project dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root folder:

```env
PORT=3000

SUPABASE_URL=your_supabase_url
SUPABASE_SECRET_KEY=your_supabase_key

MONGO_URL=your_mongodb_connection_string
```

---

## Run the project

### Local execution

Start the server:

```bash
npm start
```

The project uses Node.js watch mode, so the server automatically restarts when files are modified.

The API runs on:

```
http://localhost:3000
```

---

### Docker execution

Build and start the container:

```bash
docker compose up --build
```

The API will be available at:

```
http://localhost:3000
```

---

## Project Structure

```
robotic-lab-spec/

├── db/
│   ├── lab-connect.js
│   └── students-connect.js
│
├── middlewares/
│   ├── lab-middleware.js
│   └── students-middleware.js
│
├── repos/
│   ├── lab-repo.js
│   └── students-repo.js
│
├── routes/
│   ├── lab-sessions-routes.js
│   └── students-routes.js
│
├── services/
│   ├── lab-services.js
│   └── students-services.js
│
└── server.js
```

---

## Database Models

### Sessions (Supabase)

Example:

```json
{
  "id": "uuid",
  "topic": "Arduino Basics",
  "dateTime": "2026-08-10T09:00:00Z",
  "capacity": 20
}
```

### Students (MongoDB)

Example:

```json
{
  "firstName": "Moshe",
  "lastName": "Levi",
  "className": "12A",
  "labSessionsIds": []
}
```

---

## Implemented Endpoints

### Get session by ID

```
GET /sessions/:sessionId
```

Checks if the session exists in Supabase and returns the session data.

---

### Register a student to a session

```
POST /sessions/:sessionId/register
```

Request body:

```json
{
  "studentId": "student-id"
}
```

Current process:

1. Validate request body.
2. Check that the session exists.
3. Check that the student exists.
4. Add the session ID to the student's `labSessionsIds`.

Success response:

```
201 Created
```

---

## Implemented Features

* Supabase connection
* MongoDB connection
* Session retrieval
* Student creation
* Student retrieval
* Request body validation
* Session existence validation
* Student existence validation
* Student registration update

---

## Not Implemented Yet

* Duplicate registration handling
* Session capacity verification
* Concurrent registration management with `Promise.all`
* `registeredCount` calculation
* `remainingSpots` calculation
* Full service layer implementation

---

## Docker

The project uses:

```
node:24.17.0-alpine
```

The application connects to external databases (Supabase and MongoDB Atlas), so no database containers are required.

```
```
