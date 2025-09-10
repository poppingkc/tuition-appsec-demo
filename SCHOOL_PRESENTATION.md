# Tuition Web Service - App Security Demo

This project demonstrates a secure, Microsoft-focused infrastructure for a tuition web service using:
- Node.js/Express backend
- React frontend
- Docker & Docker Compose
- Kubernetes (AKS-ready)
- Microsoft Entra ID (Azure AD) for authentication
- Microsoft Defender for Cloud for security monitoring
- GitHub for collaboration

## Structure
- `backend/` - API server
- `frontend/` - Web app
- `k8s/` - Kubernetes manifests
- `docker-compose.yml` - Local container orchestration

## See below for a step-by-step walkthrough and presentation guide.

# App Security Demo - School Presentation Package

## Project Structure

```
VS-appsec project/
│
├── backend/
│   ├── index.js         # Main backend server code (Node.js/Express)
│   ├── package.json     # Backend dependencies and scripts
│   ├── .env             # Environment variables (secrets/config)
│   └── Dockerfile       # Docker instructions for backend
│
├── frontend/
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   └── index.js     # React entry point
│   ├── public/
│   │   └── index.html   # HTML template for React
│   ├── package.json     # Frontend dependencies and scripts
│   └── Dockerfile       # Docker instructions for frontend
│
├── docker-compose.yml   # Orchestrates backend and frontend containers
└── README.md            # Project overview and setup instructions
```

---

## Concepts Used
- **Node.js/Express backend**: Serves API data, ready for authentication.
- **React frontend**: Calls backend, displays data, ready for authentication.
- **Docker**: Containerizes both backend and frontend for easy deployment.
- **Microsoft Entra ID**: (Ready for real-world authentication, not active in demo)
- **Microsoft Defender for Cloud**: (Enable in Azure for security monitoring)
- **GitHub**: Project is ready to be pushed for team collaboration.

---

## What to Present to Your Client/Teacher
- Modern, secure app structure (backend, frontend, Docker, Azure-ready)
- Clear separation of concerns (API, UI, security)
- Easy to run, easy to deploy, easy to collaborate
- Security best practices (environment variables, containerization, Azure integration)

---

## How to Run the Demo
1. Open two PowerShell windows.
2. In one, run:
   ```
   cd "c:\Users\cher kok cheung\VS-appsec project\backend"
   npm install
   npm start
   ```
3. In the other, run:
   ```
   cd "c:\Users\cher kok cheung\VS-appsec project\frontend"
   npm install
   npm start
   ```
4. Open http://localhost:3000 in your browser.

---

## How to Push to GitHub
1. In the project root, run:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   # Then follow GitHub instructions to push to your repo
   ```

---

## For Future Use (When You Get a Tech Job)
- Replace the demo authentication with Microsoft Entra ID using the latest MSAL libraries.
- Deploy to Azure and enable Microsoft Defender for Cloud for real security monitoring.
- Use Docker and GitHub for real-world team collaboration and CI/CD.

---

**You can use this file as your school demo handout or script!**

---

## Step-by-Step Walkthrough

### 1. Local Development & Demo
- Use Docker Compose to run both backend and frontend locally:
  ```
  docker-compose up --build
  ```
- Access the frontend at http://localhost:3000
- Access the backend API at http://localhost:5000/api/secure

### 2. Kubernetes (AKS) Deployment
- Use the YAML files in the `k8s/` folder to deploy to Azure Kubernetes Service (AKS):
  - `backend-deployment.yaml` and `backend-service.yaml`
  - `frontend-deployment.yaml` and `frontend-service.yaml`
- These files define how your app runs securely and scalably in the cloud.

### 3. Microsoft Entra ID (Azure AD) Integration
- Register your app in Azure Entra ID for secure authentication.
- Use MSAL libraries in frontend and backend for login and API protection.
- For the demo, explain where Entra ID would be integrated (see code comments).

### 4. Microsoft Defender for Cloud
- When deployed to Azure, enable Defender for Cloud for:
  - Vulnerability scanning
  - Threat detection
  - Security recommendations
- Show this as a key security feature in your presentation.

### 5. GitHub Collaboration
- Initialize git and push your project:
  ```
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin <your-github-repo-url>
  git push -u origin main
  ```
- Teammates can clone the repo and collaborate on code, docs, and configs.

---

**This completes your security demo setup and presentation guide!**