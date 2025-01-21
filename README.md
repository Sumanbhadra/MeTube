# MeTube - A YouTube Clone

## Overview
MeTube is a YouTube-inspired web application that replicates the core features of YouTube. It allows users to explore a video feed, search for videos, watch videos with an integrated player, and view recommendations in a sidebar. The app is powered by the Google YouTube Data API.

## Features
- **Trending Video Feed:** Browse the most popular and trending videos fetched from the YouTube API.
- **Search Functionality:** Search for videos by entering keywords.
- **Video Player:** Watch videos with details like title, description, and views.
- **Recommendations:** View related videos while watching a video.
- **Responsive Design:** Ensures compatibility with various devices.

## Technologies Used
- **Frontend:** React.js
- **Backend/API:** Google YouTube Data API v3
- **Styling:** CSS, Tailwind CSS (optional)
- **Package Manager:** npm/yarn

## Prerequisites
Before running the application, ensure you have the following:
- Node.js (v14 or later)
- npm or yarn
- A valid YouTube Data API key from Google Cloud Platform

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sumanbhadra/MeTube.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd MeTube
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the project root directory.
   - Add your YouTube API key:
     ```env
     REACT_APP_YOUTUBE_API_KEY=your_api_key_here
     ```

5. **Run the Application:**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Access the App:**
   Open your browser and visit `http://localhost:3000`.

## Project Structure
```
MeTube/
|-- public/
|-- src/
    |-- components/
        |-- VideoFeed.js
        |-- VideoPlayer.js
        |-- SearchBar.js
        |-- Sidebar.js
    |-- utils/
        |-- api.js
    |-- App.js
    |-- index.js
|-- .env
|-- package.json
|-- README.md
```

## API Integration
MeTube fetches data from the YouTube Data API v3. Ensure the following:
- You have enabled the YouTube Data API in the Google Cloud Console.
- Your API key has sufficient quota.

### Key API Endpoints Used:
- **Trending Videos:**
  ```
  https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&key=API_KEY
  ```
- **Search Videos:**
  ```
  https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=SEARCH_QUERY&key=API_KEY
  ```
- **Video Details:**
  ```
  https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=VIDEO_ID&key=API_KEY
  ```

## Deployment
You can deploy MeTube to platforms like Netlify, Vercel, or GitHub Pages.

### Deployment Steps:
1. Build the application for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the contents of the `build` folder to your hosting platform.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Describe your feature or fix"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Google YouTube Data API](https://developers.google.com/youtube/registering_an_application)
- Inspired by the YouTube platform.

