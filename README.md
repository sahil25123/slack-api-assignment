
# 🚀 Slack Messaging API using Express.js

> **Assignment for MERN Stack Internship at Sitegalleria Pvt Ltd**

This project was created as part of an internship assignment provided by **Sitegalleria Pvt Ltd** for the position of **MERN Stack Intern**. The task was to work with the **Slack Web API**, particularly focusing on **messaging functionalities** within a **developer sandbox environment**.

---

## 📌 Assignment Objective

**Goal:** Implement an Express.js-based backend that interacts with Slack’s messaging API to perform the following tasks:

### ✅ Functional Requirements:

- **Authentication/Login** using Slack OAuth or Bot Token (Token-based authentication)
- **Send or Schedule** a message to a Slack channel
- **Retrieve** a message using timestamp or ID
- **Edit** a message
- **Delete** a message
- All actions should use the **Slack Developer Sandbox** environment

🔗 **Resources Referenced**:
- [Slack API Docs](https://api.slack.com/apis)
- [Messaging Guide](https://api.slack.com/messaging)
- [Developer Sandbox Setup](https://api.slack.com/docs/developer-sandbox)

---

## 🗂️ Project Structure

```
slack-api-assignment/
│
├── controller/
│   └── msgController.js         # Logic for each Slack operation
├── routes/
│   └── msgRoutes.js             # Route definitions
├── .env                         # Contains Slack Bot Token
├── index.js                     # Express server entry point
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

- **Node.js** with **Express.js**
- **Slack Web API SDK**
- **dotenv** for environment variables
- **Postman** used for API testing

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sahil25123/slack-api-assignment.git
cd slack-api-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder with the following:

```env
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
PORT=3000
```

> ⚠️ Make sure your Slack App has `chat:write`, `chat:write.public`, `chat:delete`, `channels:history`, and other relevant scopes enabled.

### 4. Run the Server

```bash
node index.js
```

---

## 🔌 API Endpoints

### Base URL: `http://localhost:3000/api/messages`

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | `/send`               | Send a message             |
| POST   | `/schedule`           | Schedule a message         |
| GET    | `/:ts`                | Retrieve a message         |
| PUT    | `/:ts`                | Edit a message             |
| DELETE | `/:ts`                | Delete a message           |

### 📤 Example: Send a Message

```json
POST /api/messages/send
Content-Type: application/json

{
  "channel": "CHANNEL_ID",
  "text": "Hello from Express Slack API!"
}
```

---

## 🧪 Testing

You can test the API using [Postman](https://www.postman.com/) or any other REST client. Ensure your request body is `JSON` and matches the endpoint's requirements.

---

## 🏢 About the Company

**Sitegalleria Pvt Ltd** is a tech-driven organization offering IT solutions and digital marketing services. They provide internship opportunities for MERN Stack Developers to work on live projects, improve their full-stack development skills, and gain real-world experience in building scalable APIs and applications.

---

## 📬 Contact

For queries related to this project or internship task:

**Candidate:** Jagrat Gupta  
**Email:** sahilgupta25123@gmail.com 
**LinkedIn:** https://www.linkedin.com/in/sahil25123/

---

