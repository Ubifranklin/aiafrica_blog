# Project Structure

```
aiafricatoday/
├── apps/
│   ├── web/                # Next.js frontend app
│   │   ├── app/            # Next.js app directory
│   │   ├── public/         # Static assets
│   │   ├── package.json    # Frontend dependencies/scripts
│   │   ├── tsconfig.json   # TypeScript config
│   │   ├── next.config.ts  # Next.js config
│   │   ├── ...             # Other config files
│   └── api/                # Node.js backend (TypeScript + Express)
│       ├── src/            # Backend source code
│       │   └── index.ts    # Express entry point
│       ├── package.json    # Backend dependencies/scripts
│       ├── tsconfig.json   # TypeScript config
│       └── ...             # Other config files
├── pnpm-workspace.yaml     # pnpm monorepo config
├── package.json            # Root dependencies/scripts
├── README.md               # Project documentation
└── ...                     # Other root-level files
```

# Monorepo Notes
- All applications are in `apps/`.
- Shared code/packages can be added in a `packages/` directory if needed.
- Use pnpm for dependency management.
