# Checklist: Purnama Auto Service

Niche: industrial. Started 2026-11-21.

How this works: do the Setup once, then build **Free** first. When a tier is closed, Claude asks whether to continue to the next one. Tick items as they're done (`[x]`). If something doesn't apply, write why next to it rather than deleting it. Overview and ready prompts: `01WORK/workflow/process/PROCESS.html`. Selling this client is a separate track: `01WORK/business/marketing/`.

## Setup

**Create the project** (You)

- [ ] Ran the new-project command, which made the client folder, CLIENT.md and this checklist

**Collect the facts** (Codex), prompt: "research" on the Process page

- [ ] Codex filled the Facts table in CLIENT.md, with a source and date for each
- [ ] Logo, real photos and the printed menu (or product list) saved in source/

**Check the facts** (You)

- [ ] Every price and fact checked; anything not confirmed is marked Unconfirmed
- [ ] The area is written in CLIENT.md, so we can check who else nearby uses a look
- [ ] The feel is written in CLIENT.md: calm, fun, luxury, technical and so on

## Free: folder `purnama-auto/free/`

**Goal:** One clean page that makes the business look real and easy to visit or contact.
**Built with:** Static one-pager, started from coffee-factory/free. No server.
**Look:** One template from the Free slot of design/TEMPLATES.html. No signature motion.

### 1. Choose the look (You + Claude)

- [ ] Opened Templates and picked one for this tier, or picked a reference to work from
- [ ] If nothing fits: found a new reference, and Claude added it to the References page
- [ ] Checked "Used by" on the template: nobody in the same area has it
- [ ] Choice written in CLIENT.md under this tier

### 2. Make the mockups (Codex)

- [ ] Codex made 2 or 3 clearly different versions, desktop and phone, in mockups/free/
- [ ] Every price and fact in them matches CLIENT.md

### 3. Pick one (You)

- [ ] Picked one version, or asked Codex for another round with notes
- [ ] Notes written in CLIENT.md: what to keep, what to change

### 4. Make the images (Codex)

- [ ] Real photos used wherever they are good enough; generated images only fill the gaps
- [ ] Codex made the missing images to the mockup's shot list, saved in free/assets/
- [ ] Phone hero has its own tall image, not a crop of the desktop one

### 5. Build it (Claude)

- [ ] Built in free/ to the tier standard and the stack
- [ ] Static one-pager, started from coffee-factory/free
- [ ] Unconfirmed facts marked "Perlu konfirmasi" on the page and listed in CLIENT.md

### 6. Review and tweak (You + Claude)

- [ ] You opened it on desktop and on your phone
- [ ] Tweaks done in rounds: you list changes, Claude applies them
- [ ] Any motion added came from the Showroom, and the picks are copied into CLIENT.md

### 7. Check and close the tier (You + Claude)

- [ ] Standards check passes: node 01WORK/workflow/qa/standards-check.cjs --dir free (every fail fixed by Claude, re-run until PASS, before Lintar sees it)
- [ ] Works at 1440, 1024, 768, 390 and 320 wide, with no overflow, broken images or errors
- [ ] Tried on your cheap Android, and it feels smooth
- [ ] Reduced motion respected, and the content shows without JavaScript
- [ ] Screenshots saved in free/screenshots/ (desktop and phone)
- [ ] Claude reported what was tested, what wasn't, and what is still unconfirmed

### Offer promises: Free (You + Claude)

The tier is not closed until each one is really there. Includes the earlier tiers. Standard: `01WORK/workflow/offer/OFFER-CHECKLIST.md`.

- [ ] Free web address (.netlify.app) (check: The site opens on its netlify.app address)
- [ ] Works well on phones (check: Checked at 390 and 320 wide and on a cheap Android)
- [ ] Business information: address, opening hours, contact (check: All three are on the page, matching CLIENT.md)
- [ ] Works as a company profile for clients, instead of a PDF (check: A prospect can understand the company from this one link)
- [ ] Services displayed and explained (check: Each main service has a short, real explanation)
- [ ] Branches are shown (if there is more than one) (check: Every branch has its address and map link)
- [ ] FAQ answered (check: A visible FAQ with real answers)
- [ ] Google can find it (brand name + city) (check: Title, description, headings and business data are set; no noindex)
- [ ] Easy to share as a link (check: The link shows a proper preview in WhatsApp (title, image))

**→ Continue to the next tier?** Continue to Medium, or stop here and go to "When you stop".

- [ ] Decided: continue / stop

## Medium (Rp 15M): folder `purnama-auto/15m/`

_Only if you decided to continue after Free._

**Goal:** The proper website of a good business, which the owner can update from their phone.
**Built with:** The Engine (Node + SQLite + owner panel), started from coffee-factory/10m until the clean starter exists.
**Look:** A template from the Paid slot, or a direction from a reference. One or two light supporting moves from the showroom.

### 1. Choose the look (You + Claude)

- [ ] Opened Templates and picked one for this tier, or picked a reference to work from
- [ ] If nothing fits: found a new reference, and Claude added it to the References page
- [ ] Checked "Used by" on the template: nobody in the same area has it
- [ ] Picked 1 or 2 light moves in the Showroom (optional)
- [ ] Choice written in CLIENT.md under this tier

### 2. Make the mockups (Codex)

- [ ] Codex made 2 or 3 clearly different versions, desktop and phone, in mockups/medium/
- [ ] Every price and fact in them matches CLIENT.md

### 3. Pick one (You)

- [ ] Picked one version, or asked Codex for another round with notes
- [ ] Notes written in CLIENT.md: what to keep, what to change

### 4. Make the images (Codex)

- [ ] Real photos used wherever they are good enough; generated images only fill the gaps
- [ ] Codex made the missing images to the mockup's shot list, saved in 15m/assets/
- [ ] Phone hero has its own tall image, not a crop of the desktop one

### 5. Build it (Claude)

- [ ] Built in 15m/ to the tier standard and the stack
- [ ] Runs on The Engine with the owner panel, menu and info editable
- [ ] Unconfirmed facts marked "Perlu konfirmasi" on the page and listed in CLIENT.md

### 6. Review and tweak (You + Claude)

- [ ] You opened it on desktop and on your phone
- [ ] Tweaks done in rounds: you list changes, Claude applies them
- [ ] Any motion added came from the Showroom, and the picks are copied into CLIENT.md

### 7. Check and close the tier (You + Claude)

- [ ] Standards check passes: node 01WORK/workflow/qa/standards-check.cjs --dir 15m (every fail fixed by Claude, re-run until PASS, before Lintar sees it)
- [ ] Works at 1440, 1024, 768, 390 and 320 wide, with no overflow, broken images or errors
- [ ] Tried on your cheap Android, and it feels smooth
- [ ] Reduced motion respected, and the content shows without JavaScript
- [ ] The Engine check script passes
- [ ] Screenshots saved in 15m/screenshots/ (desktop and phone)
- [ ] Claude reported what was tested, what wasn't, and what is still unconfirmed

### Offer promises: Rp 15M (You + Claude)

The tier is not closed until each one is really there. Includes the earlier tiers. Standard: `01WORK/workflow/offer/OFFER-CHECKLIST.md`.

- [ ] Works well on phones (check: Checked at 390 and 320 wide and on a cheap Android)
- [ ] Business information: address, opening hours, contact (check: All three are on the page, matching CLIENT.md)
- [ ] Works as a company profile for clients, instead of a PDF (check: A prospect can understand the company from this one link)
- [ ] Services displayed and explained (check: Each main service has a short, real explanation)
- [ ] Branches are shown (if there is more than one) (check: Every branch has its address and map link)
- [ ] FAQ answered (check: A visible FAQ with real answers)
- [ ] Google can find it (brand name + city) (check: Title, description, headings and business data are set; no noindex)
- [ ] Easy to share as a link (check: The link shows a proper preview in WhatsApp (title, image))
- [ ] Premium, expensive-looking custom design (check: Built to its own direction, not the Free template)
- [ ] Own domain (check: Opens on the company's domain with HTTPS, with and without www)
- [ ] Product pages and a product or service catalogue (check: Every main product or service has its own page)
- [ ] Connected to social media and Google Maps (check: Social links and a Maps link or embed)
- [ ] Clients contact you on WhatsApp directly (check: WhatsApp buttons on every page, with a prefilled message, link opened)
- [ ] Company history, location, service areas and operating details (check: All four are on the site, confirmed by the owner)
- [ ] Real project examples and work photos (check: Real photos of real jobs, with permission)
- [ ] A link the sales staff can send to prospects (check: Pages share with a proper preview; the owner knows which link to send)
- [ ] Admin panel: change products, services, prices, promos (check: Owner changes a product and a price from a phone; the site updates)
- [ ] Promos and announcements on the site (check: A promo added in the panel shows on the site)
- [ ] The business introduced properly: owner, team (check: An about page with the real owner and team)
- [ ] Good, real reviews displayed (check: Only real reviews with their source; nothing invented)
- [ ] First year of hosting included (check: Written in the agreement; renewal date in the client record)
- [ ] First month of care free (check: Start and end date of the free month written in the client record)
- [ ] The client sees the finished site before paying the rest (check: Payment terms in the agreement follow this)
- [ ] No invented reviews, numbers or claims (check: Every claim on the site is in CLIENT.md with a source)
- [ ] Google review rules followed: no rewards for reviews, every guest gets the same request (check: No review gating anywhere on the site or the QR page)

**→ Continue to the next tier?** Continue to High, or stop here and go to "When you stop".

- [ ] Decided: continue / stop

## High (Rp 50M): folder `purnama-auto/50m/`

_Only if you decided to continue after Medium._

**Goal:** A site people talk about, built around one big idea that no competitor in the area has.
**Built with:** The Engine, plus a custom front end with the signature moment.
**Look:** No fixed template: one signature moment and two supporting moves from the showroom, plus a reference for layout and type.

### 1. Choose the look (You + Claude)

- [ ] Opened Templates and picked one for this tier, or picked a reference to work from
- [ ] If nothing fits: found a new reference, and Claude added it to the References page
- [ ] Checked "Used by" on the template: nobody in the same area has it
- [ ] Picked one signature moment and two supporting moves in the Showroom, none used by a competitor in this area
- [ ] Choice written in CLIENT.md under this tier

### 2. Make the mockups (Codex)

- [ ] Codex made 2 or 3 clearly different versions, desktop and phone, in mockups/high/
- [ ] Every price and fact in them matches CLIENT.md

### 3. Pick one (You)

- [ ] Picked one version, or asked Codex for another round with notes
- [ ] Notes written in CLIENT.md: what to keep, what to change

### 4. Make the images (Codex)

- [ ] Real photos used wherever they are good enough; generated images only fill the gaps
- [ ] Codex made the missing images to the mockup's shot list, saved in 50m/assets/
- [ ] Phone hero has its own tall image, not a crop of the desktop one

### 5. Build it (Claude)

- [ ] Built in 50m/ to the tier standard and the stack
- [ ] Runs on The Engine with the owner panel, menu and info editable
- [ ] Signature moment and supporting moves built, with a lite version for weak phones
- [ ] Unconfirmed facts marked "Perlu konfirmasi" on the page and listed in CLIENT.md

### 6. Review and tweak (You + Claude)

- [ ] You opened it on desktop and on your phone
- [ ] Tweaks done in rounds: you list changes, Claude applies them
- [ ] Any motion added came from the Showroom, and the picks are copied into CLIENT.md

### 7. Check and close the tier (You + Claude)

- [ ] Standards check passes: node 01WORK/workflow/qa/standards-check.cjs --dir 50m (every fail fixed by Claude, re-run until PASS, before Lintar sees it)
- [ ] Works at 1440, 1024, 768, 390 and 320 wide, with no overflow, broken images or errors
- [ ] Tried on your cheap Android, and it feels smooth
- [ ] Reduced motion respected, and the content shows without JavaScript
- [ ] The Engine check script passes
- [ ] Screenshots saved in 50m/screenshots/ (desktop and phone)
- [ ] Claude reported what was tested, what wasn't, and what is still unconfirmed

### Offer promises: Rp 50M (Dominasi Area) (You + Claude)

The tier is not closed until each one is really there. Includes the earlier tiers. Standard: `01WORK/workflow/offer/OFFER-CHECKLIST.md`.

- [ ] Works well on phones (check: Checked at 390 and 320 wide and on a cheap Android)
- [ ] Business information: address, opening hours, contact (check: All three are on the page, matching CLIENT.md)
- [ ] Works as a company profile for clients, instead of a PDF (check: A prospect can understand the company from this one link)
- [ ] Services displayed and explained (check: Each main service has a short, real explanation)
- [ ] Branches are shown (if there is more than one) (check: Every branch has its address and map link)
- [ ] FAQ answered (check: A visible FAQ with real answers)
- [ ] Google can find it (brand name + city) (check: Title, description, headings and business data are set; no noindex)
- [ ] Easy to share as a link (check: The link shows a proper preview in WhatsApp (title, image))
- [ ] Premium, expensive-looking custom design (check: Built to its own direction, not the Free template)
- [ ] Own domain (check: Opens on the company's domain with HTTPS, with and without www)
- [ ] Product pages and a product or service catalogue (check: Every main product or service has its own page)
- [ ] Connected to social media and Google Maps (check: Social links and a Maps link or embed)
- [ ] Clients contact you on WhatsApp directly (check: WhatsApp buttons on every page, with a prefilled message, link opened)
- [ ] Company history, location, service areas and operating details (check: All four are on the site, confirmed by the owner)
- [ ] Real project examples and work photos (check: Real photos of real jobs, with permission)
- [ ] A link the sales staff can send to prospects (check: Pages share with a proper preview; the owner knows which link to send)
- [ ] Admin panel: change products, services, prices, promos (check: Owner changes a product and a price from a phone; the site updates)
- [ ] Promos and announcements on the site (check: A promo added in the panel shows on the site)
- [ ] The business introduced properly: owner, team (check: An about page with the real owner and team)
- [ ] Good, real reviews displayed (check: Only real reviews with their source; nothing invented)
- [ ] First year of hosting included (check: Written in the agreement; renewal date in the client record)
- [ ] First month of care free (check: Start and end date of the free month written in the client record)
- [ ] A very cool, expensive-looking site (check: The signature moment is built, with a lite version for weak phones)
- [ ] 10 articles written for ranking in the local area (check: Ten published articles, each from real work, to the writing standard)
- [ ] Full search engine optimisation (check: Keyword research, one keyword per page, structured data, Search Console, link audit)
- [ ] Aimed at ranking in your city (check: A page for each service and city served; Google Business Profile set up)
- [ ] First year of hosting included (check: Written in the agreement; renewal date in the client record)
- [ ] 6 months of Growth included (12 months for the first 10 clients) (check: Growth start date in the client record; ad budget agreed with the client)
- [ ] The client sees the finished site before paying the rest (check: Payment terms in the agreement follow this)
- [ ] No invented reviews, numbers or claims (check: Every claim on the site is in CLIENT.md with a source)
- [ ] Google review rules followed: no rewards for reviews, every guest gets the same request (check: No review gating anywhere on the site or the QR page)

## Monthly plan

Tick only the plan the client chose. Each plan includes the one before it. Standard: `01WORK/workflow/offer/OFFER-CHECKLIST.md`.

- [ ] Plan chosen: none / Rp 250k a month (Hosting) / Rp 1M a month (Care) / Rp 3M a month (Care Plus) / Rp 5M a month (Growth)

**Rp 250k a month (Hosting)**

- [ ] Hosting + HTTPS on the client's domain (check: Site online with HTTPS)
- [ ] Domain renewal (check: Renewal date in the client record)

**Rp 1M a month (Care)**

- [ ] Uptime check (check: An uptime monitor watches the site (/api/health on Engine sites))
- [ ] Up to 2 changes or updates a month (check: OPEN: write down what counts as one change. Changes logged per month)

**Rp 3M a month (Care Plus)**

- [ ] Backups (check: Backups copied off the hosting account, and one restore tested)
- [ ] Up to 4 updates a month (instead of 2) (check: Changes logged per month)
- [ ] Technical care (check: Updates and fixes done; nothing broken left open)
- [ ] Site health check (check: Broken links, errors and forms checked every month)
- [ ] Page speed check (check: Speed measured on phone every month)
- [ ] Google Search Console watched (check: Search Console verified; problems fixed or reported)
- [ ] Monthly report from me (check: A report sent every month)

**Rp 5M a month (Growth)**

- [ ] Google Ads managed (check: Campaigns running; workshops start with Google Search ads)
- [ ] Meta (Instagram and Facebook) ads managed (check: Campaigns running; cafes start with Instagram)
- [ ] The ad budget is paid by the client directly to Google and Meta, agreed with each client (check: The agreed budget is written in the agreement)
- [ ] Ads in the monthly report: spend, clicks, messages, cost per message (check: Included in every monthly report)

## When you stop

- [ ] The tiers you built are listed in CLIENT.md, each with its folder and screenshots
- [ ] A short list of questions for the owner: every unconfirmed fact
- [ ] The client record moves to the next sales step in 01WORK/business/marketing/SALES-STEPS.md
- [ ] Lessons written in CLIENT.md, and anything reusable suggested for the arsenal or showroom

