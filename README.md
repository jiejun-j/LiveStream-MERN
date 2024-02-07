# MERN Stack Live-Streaming Platform

A fully functional live-streaming platform inspired by Twitch, built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Authentication**: Secure login and registration system for users.
- **Live Streaming**: Integration with OBS for seamless live video broadcasting.
- **Real-Time Chat**: Built-in chat feature using Socket.IO for viewer interactions during live streams.
- **API Testing**: Utilized Postman for testing and ensuring API functionality.
- **Interactive UI**: Developed with React, providing a dynamic and responsive user interface.

## Technologies Used

- **MongoDB**: For database management and storage.
- **Express**: Backend framework for Node.js.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for executing server-side code.
- **Socket.IO**: For enabling real-time bidirectional event-based communication.
- **OBS (Open Broadcaster Software)**: For live video streaming capabilities.
- **Postman**: For API development and testing.

## Getting Started

### Prerequisites

- Node.js installed.
- MongoDB set up and running.
- OBS installed for live streaming.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jiejun-j/LiveStream-MERN.git
```

2. Install dependencies for both server and client:
```bash
cd LiveStream-MERN
npm install
```

3. Set up your environment variables in a .env file in the root directory

4. Start the server:
```bash
cd server
npm start
```

5. Run the client:
```bash
# In a new terminal window/tab
cd client
npm start
```

The app should now be running on http://localhost:3000.
