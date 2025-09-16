# AIAfricaToday Monorepo

## Project Overview
AIAfricaToday is a monorepo containing both frontend and backend applications for building modern web solutions. It uses Next.js for the frontend and Node.js (TypeScript + Express) for the backend, managed with pnpm workspaces for efficient dependency management.

## Structure
```
aiafricatoday/
├── apps/
│   ├── web/   # Next.js frontend app
│   └── api/   # Node.js backend (TypeScript + Express)
├── pnpm-workspace.yaml
├── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (install globally: `npm install -g pnpm`)

### Install Dependencies
From the project root:
```powershell
pnpm install
```

### Running the Frontend (Next.js)
```powershell
cd apps/web
pnpm dev
```

### Running the Backend (Express API)
```powershell
cd apps/api
pnpm dev
```

## Development Notes
- All apps are managed independently in the `apps/` folder.
- Shared code can be placed in a `packages/` folder if needed.
- Use pnpm for all dependency management and scripts.

## Contributing
1. Fork the repo and clone locally.
2. Create a new branch for your feature/fix.
3. Make changes and commit.
4. Open a pull request.

## License
MIT
