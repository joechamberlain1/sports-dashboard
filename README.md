# Newcastle United Live Dashboard

Live scores, fixtures and results for Newcastle United FC.

## Requirements

- Node.js v18+
- A free API key from [football-data.org](https://www.football-data.org/)

## Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/sports-dashboard.git
cd sports-dashboard
```

2. Install frontend dependencies

```bash
npm install
```

3. Install backend dependencies

```bash
cd server
npm install
```

4. Create a `.env` file inside the `server/` folder

```
PORT=3000
FOOTBALL_API_KEY=your_api_key_here
```

## Running the app

Start the backend — from the `server/` folder:

```bash
npm run dev
```

Start the frontend — from the project root:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.