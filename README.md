# Quiz and Course Management System

This project provides APIs for managing courses and quizzes. You can create, update, and retrieve courses and quizzes using this backend.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v14 or later)
- MongoDB (running locally or a connection string for a cloud instance like MongoDB Atlas)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/kunalrawat19/Smart-Path-Assignment.git>
   cd <SMART PATH>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

---

## API Documentation

The API documentation for this project is available at the following link:
[Postman API Documentation](https://www.postman.com/spaceflight-geoscientist-29428605/my-workspace/documentation/uznpona/api-documentation).

### Base URL

```
http://localhost:5000/api
