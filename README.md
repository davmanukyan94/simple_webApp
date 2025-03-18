# Simple Web App

Application for managing user balances.

## Project Structure

```
├── src/                  # Source code
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Express middlewares
│   ├── migrations/       # Database migrations
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility classes and functions
│   └── app.js            # Application entry point
├── .env.example          # Example environment variables
├── package.json          # Project dependencies
└── README.md             # This file
```

## API Endpoints

- `POST /api/balance` - Update user balance
- `GET /api/health` - Health check endpoint

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and configure
3. Install dependencies: `npm install`
4. Create PostgreSQL database `CREATE DATABASE balance_app;`
5. Start the server: `npm start`

## Environment Variables

- `DB_*` - Database configuration
- `PORT` - Server port (default: 3000)

## Error Handling

The application uses a centralized error handling approach with custom error classes.
