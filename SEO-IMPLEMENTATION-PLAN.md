# EpochWeave SEO Implementation Plan
**Goal: Get epochweave.com indexed in Google and start ranking for AI automation keywords within 3-6 months**

---

## Phase 1: Technical SEO Setup (Days 1-3)
**Timeline: Complete within 3 days | Priority: CRITICAL**

### Step 1.1: Google Search Console Setup
**What You Need to Do:**
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add epochweave.com as a property
- Choose "DNS TXT record" verification method
- Access your Cloudflare dashboard (where your domain DNS is managed)
- Add the TXT record Google provides to your DNS settings

**What I Will Do:**
- Verify the sitemap is accessible at `https://epochweave.com/sitemap.xml`
- Check sitemap includes all pages (index, about, terms, privacy, refund)
- Submit sitemap to Search Console once you verify the domain

**Resources Needed:**
- Cloudflare account access
- Google account for Search Console

**Time Estimate:** 15 minutes for you, 5 minutes for me

---

### Step 1.2: Request Indexing
**What You Need to Do:**
- After domain verification in Search Console, go to "URL Inspection"
- Enter `https://epochweave.com`
- Click "Request Indexing"
- Do the same for `/about` page

**What I Will Do:**
- Monitor indexing status in subsequent days
- Fix any crawl errors if they appear

**Time Estimate:** 5 minutes

---

### Step 1.3: Analytics Setup
**What You Need to Do:**
- Choose between:
  - **Google Analytics 4** (free, comprehensive): [analytics.google.com](https://analytics.google.com)
  - **Plausible** (privacy-friendly, paid): [plausible.io](https://plausible.io)
  - **Fathom** (privacy-friendly, paid): [usefathom.com](https://usefathom.com)
- Create an account and property for epochweave.com
- Get the tracking code/script

**What I Will Do:**
- Install the analytics tracking script in your Nuxt app
- Configure it to track page views, sessions, and user behavior
- Set up event tracking for CTA clicks (booking calls)

**Resources Needed:**
- Analytics account (your choice)
- Tracking code from the platform

**Time Estimate:** 20 minutes for you, 15 minutes for me

**Recommended:** Start with Google Analytics 4 (free) since you're just starting

---

### Step 1.4: Robots.txt Verification
**What You Need to Do:**
- Nothing - I'll handle this

**What I Will Do:**
- Verify `public/robots.txt` exists and allows crawling
- Ensure it points to the sitemap
- Update if needed

**Time Estimate:** 5 minutes

---

## Phase 2: On-Page SEO Fixes (Days 4-7)
**Timeline: Complete within 1 week | Priority: HIGH**

### Step 2.1: Optimize Title Tags
**What You Need to Do:**
- Review and approve the new title tags I propose
- Provide feedback if you want different wording

**What I Will Do:**
- Update homepage title from "EpochWeave | Premium AI Automation Agency" to:
  - "AI Automation Agency for Service Businesses | EpochWeave"
- Update about page title to:
  - "About EpochWeave | AI Workflow Automation Experts"
- Add title tags to legal pages (terms, privacy, refund)

**Time Estimate:** 10 minutes for review, 5 minutes for implementation

---

### Step 2.2: Add Meta Descriptions
**What You Need to Do:**
- Review and approve the meta descriptions I write
- Provide feedback on wording

**What I Will Do:**
- Add meta description to homepage (150-160 characters):
  - "We build workflow automation and AI systems for service businesses. Fixed pricing, free discovery call, results in weeks not months."
- Add meta descriptions to all pages
- Implement in Nuxt using `useHead()` in each page component

**Time Estimate:** 15 minutes for review, 10 minutes for implementation

---

### Step 2.3: Add Image Alt Text
**What You Need to Do:**
- Provide descriptive text for key images if my descriptions aren't accurate
- Review the alt text I add

**What I Will Do:**
- Add descriptive alt text to all images in components:
  - Hero image: "AI automation agency team working on workflow automation"
  - Service images: descriptive text based on service type
  - Bento section images: context-aware descriptions
- Update all `<img>` tags and NuxtImage components

**Time Estimate:** 20 minutes for implementation

---

### Step 2.4: Add Open Graph Tags
**What You Need to Do:**
- Provide a high-quality logo/image for social sharing (1200x630px recommended)
- Review the OG tags I implement

**What I Will Do:**
- Add Open Graph tags for better social media sharing
- Include og:title, og:description, og:image, og:url
- Add Twitter Card tags
- Configure in `nuxt.config.ts` or use `useHead()` in app.vue

**Resources Needed:**
- Social sharing image (1200x630px)

**Time Estimate:** 15 minutes for implementation

---

### Step 2.5: Add Structured Data (Schema.org)
**What You Need to Do:**
- Review the structured data I implement
- Provide business details (address if applicable, phone, business hours)

**What I Will Do:**
- Add LocalBusiness schema markup
- Add Organization schema
- Add Service schema for your three main services
- Implement using JSON-LD format in app.vue or nuxt.config.ts

**Resources Needed:**
- Business contact information
- Service descriptions and pricing details

**Time Estimate:** 30 minutes for implementation

---

## Phase 3: Content Strategy Implementation (Weeks 2-4)
**Timeline: 4 blog posts over 2-3 weeks | Priority: MEDIUM**

### Step 3.1: Set Up Blog Structure
**What You Need to Do:**
- Approve the blog structure I propose
- Decide on URL structure: `/blog/[slug]` or `/articles/[slug]`

**What I Will Do:**
- Create blog route structure in Nuxt
- Create blog listing page at `/blog`
- Create individual blog post pages at `/blog/[slug]`
- Add blog navigation to the site
- Style blog pages to match existing design

**Time Estimate:** 2-3 hours for implementation

---

### Step 3.2: Write and Publish Blog Posts
**What You Need to Do:**
- Review each blog post I write
- Provide feedback and approve before publishing
- Add any personal insights or case study details
- Publish the posts (I can help automate this)

**What I Will Do:**
- Write 4 blog posts targeting these keywords:
  1. "How to Automate Lead Follow Up" (600-900 words)
  2. "Reduce Manual Data Entry for Small Business" (600-900 words)
  3. "Custom CRM vs Off-the-Shelf Software" (600-900 words)
  4. "AI Tools for Agencies" (600-900 words)
- Each post will:
  - Answer the question genuinely with actionable advice
  - Mention your automation services as examples
  - Include internal links to your services
  - End with a soft CTA to book a call
  - Include proper meta tags and structured data

**Time Estimate:** 2-3 hours for writing all posts, 30 minutes for your review each

---

### Step 3.3: Add Internal Linking
**What You Need to Do:**
- Review the internal linking structure
- Suggest any additional links

**What I Will Do:**
- Add links from blog posts to relevant service pages
- Add links from homepage to blog section
- Add related posts section to blog pages
- Ensure all pages are accessible within 3 clicks from homepage

**Time Estimate:** 1 hour for implementation

---

## Phase 4: Backlink and Directory Submissions (Weeks 3-6)
**Timeline: Ongoing over 3-4 weeks | Priority: MEDIUM**

### Step 4.1: Directory Listings
**What You Need to Do:**
- Create accounts on these directories:
  - [Clutch.co](https://clutch.co) - Free agency directory
  - [GoodFirms](https://goodfirms.co) - Free agency directory
  - [Crunchbase](https://crunchbase.com) - Free company profile
  - [Capterra](https://capterra.com) - Software directory (if applicable)
- Complete your profiles with:
  - Company description
  - Services offered
  - Website URL (epochweave.com)
  - Logo and images
  - Contact information

**What I Will Do:**
- Provide optimized descriptions for each directory
- Help you gather the information needed for profiles
- Create a tracking spreadsheet to monitor submissions

**Resources Needed:**
- High-quality logo (various sizes)
- Company description (I can write this)
- Service descriptions

**Time Estimate:** 2-3 hours for you to complete all submissions

---

### Step 4.2: Social Profile Linking
**What You Need to Do:**
- Update your Facebook page (https://web.facebook.com/profile.php?id=61592023613388):
  - Add epochweave.com to the website field
  - Add link in about section
  - Pin a post with the website link
- Update LinkedIn profile:
  - Add epochweave.com to your profile
  - Add to featured section
- Update Fiverr profile:
  - Add epochweave.com to your gig descriptions
  - Add to profile

**What I Will Do:**
- Review your profiles and suggest improvements
- Help write optimized descriptions

**Time Estimate:** 30 minutes for you

---

### Step 4.3: Case Study Creation
**What You Need to Do:**
- Document a successful automation project
- Provide:
  - Client problem
  - Solution implemented
  - Results (metrics if possible)
  - Client testimonial (if available)

**What I Will Do:**
- Format the case study for the website
- Add case study section to the site
- Create a downloadable PDF version
- Submit to "best automation agencies" roundup lists

**Resources Needed:**
- Case study details from a real project

**Time Estimate:** 2 hours for implementation (when you have case study ready)

---

## Phase 5: Ongoing Monitoring and Optimization (Months 2-6)
**Timeline: Continuous | Priority: LOW but IMPORTANT**

### Step 5.1: Weekly Monitoring
**What You Need to Do:**
- Check Google Search Console weekly for:
  - Indexing status
  - Crawl errors
  - Search performance (clicks, impressions, position)
  - Manual actions
- Check Analytics for:
  - Organic traffic trends
  - Top performing pages
  - User behavior metrics

**What I Will Do:**
- Help you interpret the data
- Suggest optimizations based on performance
- Fix any technical issues that arise

**Time Estimate:** 15 minutes per week for you

---

### Step 5.2: Monthly Content Updates
**What You Need to Do:**
- Review top-performing content
- Suggest new topics based on:
  - Questions you see in Facebook groups
  - Search Console queries
  - Client questions

**What I Will Do:**
- Write 1-2 new blog posts per month
- Update existing content with new information
- Add internal links to new content

**Time Estimate:** 1-2 hours per month for me

---

### Step 5.3: Quarterly Strategy Review
**What You Need to Do:**
- Review overall SEO performance
- Adjust strategy based on results
- Decide on new content priorities

**What I Will Do:**
- Provide performance report
- Suggest strategy adjustments
- Identify new keyword opportunities

**Time Estimate:** 1 hour per quarter

---

## What I Need From You Right Now

### Immediate (Phase 1):
1. **Cloudflare access** - to add DNS TXT record for Search Console verification
2. **Google account** - for Search Console and Analytics setup
3. **Analytics platform choice** - Google Analytics 4 (free) or paid alternative
4. **Business contact info** - for structured data (phone, email, address if applicable)

### For Phase 2:
1. **Social sharing image** - 1200x630px for Open Graph tags
2. **Service descriptions** - detailed descriptions of your 3 main services
3. **Pricing information** - for structured data

### For Phase 3:
1. **Blog URL structure preference** - `/blog/[slug]` or `/articles/[slug]`
2. **Case study details** - when you have a project to showcase

### For Phase 4:
1. **Logo in various sizes** - for directory submissions
2. **Company description** - I can write this if you provide key points
3. **LinkedIn/Fiverr profile access** - to add website links

---

## Expected Timeline Summary

- **Week 1:** Phase 1 (Technical setup) + Phase 2 (On-page fixes)
- **Weeks 2-3:** Phase 3 (Content - first 2 blog posts)
- **Weeks 3-4:** Phase 3 (Content - remaining 2 blog posts) + Phase 4 (Directory submissions)
- **Weeks 5-6:** Phase 4 (Backlink building) + Phase 5 (Monitoring begins)
- **Months 2-6:** Phase 5 (Ongoing optimization and content creation)

---

## Realistic Expectations

**Month 1-2:**
- Site gets indexed in Google
- Zero to minimal organic traffic
- Foundation is built for future ranking

**Month 3-4:**
- Start appearing for long-tail keywords (less competitive)
- Some organic traffic to blog posts
- First few organic inquiries possible

**Month 5-6:**
- Ranking for some targeted keywords
- Consistent organic traffic
- Regular organic inquiries if content strategy is working

**Important:** SEO is a long-term play. Continue your Facebook group outreach and other acquisition channels. SEO will supplement, not replace, your current client acquisition methods.

---

## Next Actions

**For You (Today):**
1. Set up Google Search Console and verify domain
2. Choose analytics platform and create account
3. Gather business contact information for structured data

**For Me (After you complete above):**
1. Implement analytics tracking
2. Update title tags and meta descriptions
3. Add image alt text
4. Implement Open Graph tags
5. Add structured data
6. Set up blog structure

**Ready to start?** Let me know when you've completed the Search Console setup and chosen your analytics platform, and I'll begin the technical implementation.
