# InterviewPrep

**InterviewPrep** is a web-based application designed to help user prepare for technical interviews by offering and AI based mock interview platform.

## Features

**Authentication**: Sign Up and Sign In using password/email authentication handled by Firebase.

**Create Interviews**: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

**Get feedback from AI**: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

**Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

**Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

**Dashboard**: Manage and track all your interviews with easy navigation.

**Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Firebase, Vapi
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yxsh-uwu/InterviewPrep.git

# Navigate to the project directory
cd InterviewPrep

# Install dependencies
npm install
# or
yarn install

```
#### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
```
# Start the development server
npm run dev
# or
yarn dev
```
## Contributing
Contributions are welcome! Please fork this repo and open a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
