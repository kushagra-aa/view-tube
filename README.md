# View Tube

Enjoy a seamless video streaming experience with View Tube, a feature-rich (YouTube) clone.

Built with 🤍 For You!

## Features

- Explore a diverse collection of videos through intuitive search and category browsing.
- Dive into your favorite channels and discover new content creators.
- Keep track of your watch history to revisit videos you've enjoyed.
- Immerse yourself in a personalized viewing experience with recommended videos tailored to your interests.

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS, PostCSS, TypeScript
- **Libraries:** [moment.js](https://momentjs.com/), [ReactPlayer](https://www.npmjs.com/package/react-player)
- **API:** [YouTube v3 (via RapidAPI)](https://rapidapi.com/ytdlfree/api/youtube-v31)

## Screenshots

### Home Page

![image](https://github.com/kushagra-aa/view-tube/assets/68841296/743eaf39-57a9-45d3-a72d-68f3f5dbdd10)

### Search Results Page

![image](https://github.com/kushagra-aa/view-tube/assets/68841296/caee7d62-703f-4cfe-b7ca-dae20aac010a)

### Channel Page

![image](https://github.com/kushagra-aa/view-tube/assets/68841296/bf5a409d-b2ad-4410-9646-f34af988d4c7)

### Watch Video Page

![image](https://github.com/kushagra-aa/view-tube/assets/68841296/a27114db-95e4-43ae-a0aa-d59abfc050e6)

### User Watch History Page

![image](https://github.com/kushagra-aa/view-tube/assets/68841296/0e604be9-e1ec-4f63-bb46-47e49a029ccb)

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kushagra-aa/view-tube.git
   ```

2. Navigate to the project directory:

   ```bash
   cd view-tube 
   ```

3. Install dependencies:

   ```bash3.
   npm install
   ```

4. Add Environment Variables:

   - Go to [Youtube v3](https://rapidapi.com/ytdlfree/api/youtube-v31)
   - Subscribe to the API
   - Copy the Values and paste them into the `.env` file.

   ```properties
   NEXT_PUBLIC_RAPID_API_KET = <Your from API KET rapid API>
   NEXT_PUBLIC_RAPID_API_HOST = <Your from API HOST rapid API>
   NEXT_PUBLIC_RAPID_API_BASE_URL = <Your from API BASE URL rapid API>
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the application in your browser:

   ```text
   http://localhost:3000
   ```
