# Balance Management Application

A Node.js application for managing user balances with PostgreSQL.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:
   Create a `.env` file like .env.example

3. Create PostgreSQL database:

```sql
CREATE DATABASE balance_app;
```

4. Start the application:

```bash
npm start
```

## API Endpoints

### Update Balance

- **URL**: `/api/balance`
- **Method**: `POST`
- **Body**:

```json
{
  "userId": 1,
  "amount": -2
}
```
