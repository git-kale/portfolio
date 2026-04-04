# Deployment Guide - Vercel & GitHub Pages

This project supports deployment to both **Vercel** (production-ready with full features) and **GitHub Pages** (static export with alternative contact methods).

---

## Option 1: Vercel (Recommended) ⭐

### Prerequisites
- GitHub account with your repository
- Vercel account (free tier available)
- Resend API key for contact form (free at https://resend.com)

### Step 1: Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. After signing in, click **"New Project"**
5. Select your portfolio repository from GitHub
6. Click **"Import"**

### Step 2: Configure Environment Variables

On the "Configure Project" screen in Vercel:

1. **Environment Variables** section
2. Add two variables:
   
   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key (get free at https://resend.com)
   
   **Variable 2:**
   - Name: `CONTACT_EMAIL_TO`
   - Value: Your email address where you receive submissions

3. Click **"Deploy"**

### Step 3: Wait for Deployment

Vercel will:
1. Clone your repository
2. Install dependencies
3. Build your project with optimizations
4. Deploy automatically

**Deployment takes 2-3 minutes.**

### Step 4: Access Your Site

Once deployed, you'll see:
- ✅ **Production** (green checkmark)
- Your site URL: `https://portfolio-[hash].vercel.app`

### Features on Vercel ✅
- ✅ **Contact Form** - Full email functionality via Resend
- ✅ **Blog Pages** - All routes work perfectly
- ✅ **API Routes** - Full Node.js support
- ✅ **Image Optimization** - Automatic format selection
- ✅ **Security Headers** - Production-ready
- ✅ **Caching** - Lightning fast performance
- ✅ **Database Support** - Available for future features

### How to Update Your Site

Updates are automatic:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
3. Vercel automatically rebuilds and deploys

---

## Option 2: GitHub Pages (Static Export)

GitHub Pages deployment is automatically configured when you push to main. It uses static HTML export.

### Prerequisites
- GitHub account with your repository
- GitHub Pages enabled in repository settings

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages**
5. Folder: **root** `/`
6. Click **"Save"**

### Step 2: Allow Workflow Permissions

1. Go to Settings → Actions → General
2. Workflow permissions: Select **"Read and write permissions"**
3. Click **"Save"**

### Step 3: Trigger Deployment

The deployment happens automatically when you push to main:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Build the project with static export enabled
2. Generate static HTML for all pages
3. Deploy to GitHub Pages automatically

### Features on GitHub Pages ⚠️
- ✅ **Blog Pages** - All routes work perfectly (static HTML)
- ✅ **Fast Static Delivery** - Via CDN
- ✅ **Free Hosting** - No cost
- ⚠️ **Contact Form** - Alternative contact methods shown (no API)
- ⚠️ **No Server Functions** - API routes unavailable

### Contact Form Behavior

**On GitHub Pages:** The contact form is disabled because GitHub Pages doesn't support server functions. Instead, users see:
- Email address (with mailto link)
- GitHub profile link
- LinkedIn profile link
- Instructions to contact via these methods

**On Vercel:** Full contact form works with Resend integration.

---

## Custom Domain Setup

### With Vercel (Easiest)
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS instructions
4. Done! 🎉

### With GitHub Pages
1. In GitHub Settings → Pages → Custom domain
2. Enter your custom domain
3. Update DNS records with GitHub's instructions
4. Enable HTTPS (automatic)

---

## Troubleshooting

### Vercel Build Fails
**Solution:**
- Check Environment Variables are set correctly
- Ensure `RESEND_API_KEY` is not empty
- Verify `CONTACT_EMAIL_TO` has correct email format
- Check build logs in Vercel dashboard

### GitHub Pages Returns 404
**Solution:**
- Check if workflow ran successfully in Actions
- Verify Pages settings point to `gh-pages` branch
- Wait 1-2 minutes for deployment to complete
- Check that `.nojekyll` file exists in deployment

### Contact Form Not Working
**On Vercel:**
- Verify Resend API key is correct
- Test with Resend dashboard
- Check email in spam folder

**On GitHub Pages:**
- Contact form is intentionally disabled (static export)
- Use provided contact methods instead

### Custom Domain Not Working
**Solution:**
- Wait 24-48 hours for DNS to propagate
- Check DNS records are correctly configured
- Clear browser cache
- Try from incognito/private window

---

## Monitoring

### Vercel Analytics
1. Dashboard → Project → Analytics
2. Track deployments, builds, and errors
3. Monitor Core Web Vitals

### GitHub Actions
1. Repository → Actions
2. View deployment status
3. Check build logs

---

## Comparison Table

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| **Cost** | Free (5GB/month) | Free (unlimited) |
| **Contact Form** | ✅ Full featured | ❌ Alternative methods |
| **Blog Pages** | ✅ Dynamic routing | ✅ Static HTML |
| **API Routes** | ✅ Node.js support | ❌ Static only |
| **Database** | ✅ Available | ❌ Not available |
| **Custom Domain** | ✅ Easy setup | ✅ Easy setup |
| **SSL/HTTPS** | ✅ Automatic | ✅ Automatic |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## Recommendation

**Use Vercel for:**
- Production site with contact form
- Best performance and features
- Future database/API integration

**Use GitHub Pages for:**
- Static portfolio backup
- Free unlimited hosting
- Simple websites without server functions

---

## Next Steps

1. **Choose your deployment method** (Vercel recommended)
2. **Follow the setup instructions** for your chosen platform
3. **Test your site** after deployment
4. **Set up custom domain** if desired
5. **Configure analytics** to monitor traffic

---

**Questions?** Check:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
