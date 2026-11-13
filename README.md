# Kalifabina | Personal Portfolio Website

A four-page personal portfolio built with **HTML, CSS and JavaScript only** for my Computer Science
practical assignment. It introduces me, shows my education and skills, my projects, and a few
animated concepts.

**Live website:** `https://YOUR-USERNAME.github.io/personal-portfolio/`  (replace after publishing)
**Repository:** `https://github.com/YOUR-USERNAME/personal-portfolio`  (replace after publishing)

---

## Purpose of the website
My digital professional identity. It can be shared with employers, internship providers and clients,
and it shows my skills as a Computer Science student and the practical work I have done.

## Pages
| File | What it contains |
|------|------------------|
| `index.html` | **Home**: name, welcome message, photo, programme, interests, typing animation, call-to-action buttons, social links |
| `about.html` | **About Me**: introduction, education table, skills list, interests, goals (ordered list), contact info |
| `projects.html` | **Projects**: 3 projects, each with description, problem solved, technologies, image and GitHub link |
| `animations.html` | **Animated Concepts**: typing text, hover effects and animated skill bars |

## Technologies used
- **HTML5**: page structure (`header`, `nav`, `main`, `section`, `article`, `footer`), headings, lists, a table, images, links
- **CSS3** (`css/style.css`): variables, Flexbox, Grid, transitions, keyframe animations, hover effects, responsive media queries
- **JavaScript** (`js/script.js`): typing effect, scroll reveal and skill bars (using `IntersectionObserver`)
- **Google Fonts**: DM Sans

## Folder structure
```
PersonalPortfolio/
├── index.html          Home page (must be called index.html)
├── about.html          About page
├── projects.html       Projects page
├── animations.html     Animated concepts page
├── css/
│   └── style.css       All the styling for every page
├── js/
│   └── script.js       All the JavaScript for every page
├── images/
│   ├── profile.jpg     My photo
│   ├── background.jpg  Home hero background
│   ├── project1.jpg    Project screenshots
│   ├── project2.jpg
│   └── project3.jpg
└── README.md           This file
```
File names are lowercase with no spaces, and related files are kept in folders, following the assignment rules.

## Requirements checklist (from the assignment)
- [x] Four sections with working navigation
- [x] Home: name, welcome, photo, programme, interests, CTA button, animation
- [x] About: intro, education **table**, 5+ skills, interests, aspirations, clickable `mailto:` email
- [x] Projects: 3 projects with title, description, problem, technologies, image, GitHub link
- [x] Animated concepts: 3 (typing text, hover effects, skill bars)
- [x] Text formatting: h1 to h6, p, strong, em, u, br, hr
- [x] Both ordered and unordered lists
- [x] Images: profile photo, background image, project images, `alt` text, clickable images
- [x] Internal, section, external, GitHub and `mailto:` links
- [x] External stylesheet with Flexbox, Grid, hover, transitions, keyframes and responsive layout

## Before you submit (things only YOU can fill in)
- [ ] Replace `images/profile.jpg` with **your own photo**
- [ ] Replace `images/background.jpg` with a background image
- [ ] Replace `images/project1.jpg` to `project3.jpg` with **real screenshots**
- [ ] In every file, search (Ctrl + F) for `YOUR-`, `[YOUR`, `YOUR_` and `you@example.com`, and put your real details
- [ ] Make sure each project's GitHub link opens a **real repository of your own work** (no fake links)
- [ ] Fill in your real university, school and dates in the education table (`about.html`)
- [ ] Optional: add your CV as `kalifabina-cv.pdf` in the main folder (or delete the Download CV button)
- [ ] Test every link, image and animation on the published site, on a phone too

## Run it on your computer
Open the folder in **VS Code**, right-click `index.html` and choose **Open with Live Server**
(install the "Live Server" extension), or just double-click `index.html` to open it in a browser.

## Publish on GitHub Pages
1. Create a repository on GitHub named `personal-portfolio` (public).
2. Upload all files and folders so `index.html` is in the **main** folder of the repo.
3. Go to **Settings > Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*,
   choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1 to 2 minutes, then open `https://YOUR-USERNAME.github.io/personal-portfolio/`.
5. Test all pages, images, links and animations.

## Academic integrity note
This is an individual assignment. I understand the HTML, CSS and JavaScript in this project and can
explain how each part works.
