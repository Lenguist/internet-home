# Maksym Bondarenko Portfolio

A Flask-based portfolio website with a terminal/hacker aesthetic, ready for deployment on Railway.

## Structure

The portfolio consists of 4 main pages:
- **About me** (`/`) - Main landing page with bio and updates
- **Research** (`/research`) - Academic research and publications
- **Explorations** (`/explorations`) - Deep dives into interesting topics
- **Random** (`/thoughts`) - Personal thoughts and writing

## Design

- Terminal/hacker aesthetic with green color scheme
- Monospace fonts (Courier New, Goldman, Audiowide)
- Black background with bright green accents
- Responsive design that works on mobile and desktop

## Tech Stack

- **Backend**: Flask 2.3.3
- **Frontend**: Pure HTML/CSS with Jinja2 templating
- **Deployment**: Railway-ready with Procfile and requirements.txt

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

3. Visit `http://localhost:5000`

## Railway Deployment

### Option 1: Connect GitHub Repository

1. Push this code to a GitHub repository
2. Go to [Railway](https://railway.app)
3. Click "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect the Flask app and deploy it

### Option 2: Railway CLI

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize and deploy:
```bash
railway init
railway up
```

## File Structure

```
/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile              # Railway deployment config
├── templates/            # Jinja2 templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # About me page
│   ├── research.html     # Research page
│   ├── explorations.html # Explorations listing
│   ├── thoughts.html     # Random thoughts page
│   └── explorations/     # Individual exploration pages
│       ├── robo-doggo.html
│       ├── nlp-research.html
│       └── bits-weights-meaning.html
└── static/               # Static assets
    ├── css/
    │   └── styles.css    # Main stylesheet
    ├── images/           # Images and graphics
    └── projects/         # Project-related assets
```

## Environment Variables

No environment variables are required for basic deployment. The app will run on the port specified by Railway's `PORT` environment variable.

## Features

- Responsive design
- Clean URL structure
- Fast loading times
- SEO-friendly structure
- Easy to maintain and extend

## Customization

- Update content in the template files
- Modify styling in `static/css/styles.css`
- Add new routes in `app.py` for additional pages
- Replace images in `static/images/`

The design maintains the exact aesthetic of your original portfolio while being properly structured for a modern web application deployment.
