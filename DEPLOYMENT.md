# Deployment Guide - Vercel

## Prerequisites
- GitHub account with your repository
- Resend API key (get free at https://resend.com)

## Step 1: Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. After signing in, click **"New Project"**
5. Select **`git-kale/portfolio`** from your repositories
6. Click **"Import"**

## Step 2: Configure Environment Variables

On the "Configure Project" screen:

1. **Environment Variables** section
2. Add two variables:
   
   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key (paste from resend.com)
   
   **Variable 2:**
   - Name: `CONTACT_EMAIL_TO`
   - Value: Your email address where you receive submissions

3. Click **"Deploy"**

## Step 3: Wait for Deployment

Vercel will:
1. Clone your repository
2. Install dependencies
3. Build your project
4. Deploy automatically

**Deployment takes 2-3 minutes.** You'll see a progress screen.

## Step 4: Access Your Site

Once deployed, you'll see:
- ✅ **Production** (green checkmark)
- Your site URL: `https://portfolio-[project-name].vercel.app`

**Congratulations! Your portfolio is live! 🚀**

## How to Update Your Site

From now on, updates are automatic:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
3. Vercel automatically rebuilds and deploys

## Features Now Working

✅ **Email on Contact Form** - Works at scale  
✅ **Blog Pages** - Regenerate every hour (ISR)  
✅ **Image Optimization** - Automatic format selection  
✅ **Security Headers** - Production-ready  
✅ **Caching** - Lightning fast performance  
✅ **API Routes** - Full Node.js support  

## Troubleshooting

### Build fails?
- Check Environment Variables are set
- Make sure `RESEND_API_KEY` and `CONTACT_EMAIL_TO` are not empty

### Contact form not sending emails?
- Verify `RESEND_API_KEY` is correct in Vercel dashboard
- Check your email address in `CONTACT_EMAIL_TO`
- Test with a real Resend account (free tier works)

### Need custom domain?
In Vercel Dashboard → Settings → Domains → Add custom domain

### Want to use your GitHub Pages domain?
External domain setup is available in Vercel paid plans, or use Vercel's free domain.

---

**Need help?** Check [Vercel Docs](https://vercel.com/docs) or [Next.js Deployment](https://nextjs.org/docs/deployment/vercel)
