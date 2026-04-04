# Quick Start Deployment

## Choose Your Platform

### 🚀 Vercel (Recommended)
- Full features including contact form
- Automatic deployments from GitHub
- Free tier: 5GB bandwidth/month
- Best performance

**Quick Setup:**
1. Go to https://vercel.com/import
2. Import your GitHub repository
3. Add environment variables:
   - `RESEND_API_KEY` (get free at https://resend.com)
   - `CONTACT_EMAIL_TO` (your email)
4. Click Deploy → Done!

---

### 📄 GitHub Pages
- Free unlimited hosting
- Static export (no contact form API)
- Auto-deploys when you push to main
- Contact form shows alternative methods

**Quick Setup:**
1. Repository → Settings → Pages
2. Source: Deploy from branch → `gh-pages` / root
3. Settings → Actions → Workflow permissions → Read and write
4. Push to main → Auto-deploys!

---

## Environment Variables (Vercel Only)

Add in Vercel Dashboard → Project → Settings → Environment Variables:

```
RESEND_API_KEY=your_key_here
CONTACT_EMAIL_TO=your_email@example.com
```

Get free Resend API key at: https://resend.com

---

## For More Details

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for comprehensive instructions, troubleshooting, and comparison.

---

## After Deployment

1. **Test your site** - Visit the deployment URL
2. **Check blog pages** - Make sure `/blog` and `/blog/[slug]` work
3. **Test contact form** - Try submitting a message
4. **Set custom domain** - Optional, both platforms support it

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages Help](https://docs.github.com/en/pages)
