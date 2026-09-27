# Deployment

## Hosting

- **Hosting platform:** Vercel
- **Vercel dashboard:** https://vercel.com/personal-4bbb
- **Domain provider:** Hostinger
- **Hosting account email:** kamleshparmar160.dev@gmail.com

The site is deployed on Vercel and uses a domain managed through Hostinger. Domain DNS records are managed in Hostinger and should match the domain configuration shown in the Vercel project settings.

## Build Settings

This project uses Vite, React, and TypeScript. The production build settings are:

- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

Vite generates the production site in `dist/`. For a manual deployment, build the project and deploy that directory. For Vercel deployments, configure the project with the settings above, or allow Vercel to detect the Vite defaults.

## Deploying Changes

1. Push the latest project changes to the connected Git repository, if automatic deployments are enabled in Vercel.
2. Otherwise, trigger a deployment from the Vercel project dashboard.
3. Confirm the deployment completes successfully and the custom domain is active in Vercel's domain settings.

## Domain Troubleshooting

If the custom domain does not load, compare the DNS records in Hostinger with the records Vercel displays for the domain. DNS changes can take time to propagate. Do not change records based on generic examples; use the current values shown by Vercel for this project.
