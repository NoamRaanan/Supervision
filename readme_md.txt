# Space Trivia Challenge PWA

A Progressive Web App (PWA) that tests your knowledge about space with a fun trivia quiz.

## Features

- Multiple-choice space trivia questions
- Score tracking
- Visual feedback for correct/incorrect answers
- Responsive design for all devices
- Works offline once installed
- Installable on mobile devices

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/space-trivia-app.git
cd space-trivia-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

To deploy the app and make it available on your phone:

### Building for Production

```
npm run build
```

This creates a `build` directory with optimized production files.

### Deploying to GitHub Pages

1. Add homepage to package.json:
```json
"homepage": "https://yourusername.github.io/space-trivia-app"
```

2. Install gh-pages:
```
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json:
```json
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```
npm run deploy
```

### Deploying to Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`

## Installing the PWA on Your Phone

### iOS
1. Open Safari and navigate to your deployed app URL
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android
1. Open Chrome and navigate to your deployed app URL
2. Tap the three dots menu
3. Tap "Install app" or "Add to Home Screen"
4. Tap "Install"

## Customizing the App

- Add more questions in the `questions` array in `App.js`
- Modify the styling in `App.css`
- Replace logo files in the `public` folder with your own designs

## License

This project is licensed under the MIT License - see the LICENSE file for details.