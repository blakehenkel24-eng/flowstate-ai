# Flowstate AI Website

A modern, high-converting website for Flowstate AI — AI automation consultancy for Chicago small businesses.

## Features

- **Modern Design**: Premium aesthetic with smooth animations
- **Custom Branding**: SVG logo and favicon included
- **Blog System**: Markdown-based blog that's easy to update
- **Lead Capture**: Working contact form (Formspree integration)
- **Pricing Tiers**: Clear packages with ranges for custom work
- **Mobile Responsive**: Looks great on all devices
- **Fast Performance**: Static export for speed

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for auto-deployments.

## Blog Management

To add a new blog post:

1. Create a new `.md` file in `/content/blog/`
2. Use this frontmatter format:

```markdown
---
title: "Your Post Title"
date: "2026-02-12"
author: "Blake Henkel"
excerpt: "Brief description for the blog listing"
tags: ["AI", "Small Business", "Automation"]
---

Your content here in Markdown...
```

3. The post will automatically appear on the blog page

## Contact Form Setup

The contact form uses Formspree (free tier). To set up:

1. Go to https://formspree.io and create a free account
2. Create a new form and get your endpoint URL
3. Replace `YOUR_FORMSPREE_ENDPOINT` in `/src/app/contact/page.tsx`

## Customization

- **Colors**: Edit CSS variables in `/src/app/globals.css`
- **Pricing**: Update `/src/app/page.tsx` in the pricing section
- **Logo**: Edit `/public/logo.svg` (or replace with your own)

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- Markdown processing with gray-matter + remark
