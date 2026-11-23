# AniEnterprise Web

Official web platform for AniEnterprise built with React 19, Vite, and Express.

##  Tech Stack

- **Frontend:** React 19, React Router 7, Vite 8, Rolldown / CSS
- **Backend:** Node.js, Express 5, MongoDB (Mongoose), Compression, CORS
- **Tooling:** Oxlint, Concurrently

---

##  Local Development Setup

### 1. Prerequisites
- Node.js 18+ or 20+
- npm or pnpm
- MongoDB (local or MongoDB Atlas)

### 2. Installation
```bash
git clone git@github.com:itanienterprise/anienterprise-web.git
cd anienterprise-web
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Configure your environment variables:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/anienterprise
```

### 4. Running Locally
- **Frontend only:**
  ```bash
  npm run dev
  ```
- **Backend only:**
  ```bash
  npm run server
  ```
- **Both Frontend and Backend together:**
  ```bash
  npm run run:full
  ```

### 5. Production Build
```bash
npm run build
```
The compiled static assets will be output in the `dist/` directory.

---

## 🚀 Deployment on aaPanel (VPS)

### Method 1: Nginx (Frontend) + aaPanel Node Project / PM2 (Backend) [Recommended]

#### 1. Setup in aaPanel
1. Install **Nginx** and **Node.js Version Manager** (Node 20+) from aaPanel **App Store**.
2. Install **MongoDB** (or use MongoDB Atlas cloud database).

#### 2. Clone Repository on VPS
SSH into your VPS and run:
```bash
cd /www/wwwroot
git clone git@github.com:itanienterprise/anienterprise-web.git
cd anienterprise-web
npm install
npm run build
```

#### 3. Setup Frontend Website in aaPanel
1. Go to **Website** > **Add site**:
   - Domain: `yourdomain.com`
   - Document Root: `/www/wwwroot/anienterprise-web/dist`
2. Configure **URL Rewrite** (Nginx) for React SPA routing:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```
3. Add **Reverse Proxy** for `/api` to route backend requests:
   - Proxy Name: `api`
   - Target URL: `http://127.0.0.1:5000`
   - Sent domain: `$host`

#### 4. Setup Backend (Express API) in aaPanel
1. Go to **Website** > **Node project** > **Add Node project**:
   - Project directory: `/www/wwwroot/anienterprise-web`
   - Startup command: `npm run server` (or `node server/index.js`)
   - Port: `5000`
   - Run User: `www`
2. Start the project. It will run under PM2 daemon.
3. Verify backend health check at `https://yourdomain.com/api/health`.

---

## 🔄 Automatic Deployment with aaPanel WebHook

You can set up auto-deploy on every `git push`:
1. In aaPanel, install **WebHook** from the App Store.
2. Add a new Webhook task named `deploy-anienterprise` with this script:
   ```bash
   #!/bin/bash
   echo "Starting deployment..."
   cd /www/wwwroot/anienterprise-web
   git pull origin main
   npm install --production=false
   npm run build
   # Restart Node project
   pm2 restart server/index.js || npm run server
   echo "Deployment complete!"
   ```
3. Copy the Webhook URL provided by aaPanel and paste it into your GitHub Repository:
   **Settings** > **Webhooks** > **Add webhook** (Content type: `application/json`).
