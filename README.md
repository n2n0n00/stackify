# Stackify - A StackOverflow Lookalike

Stackify is a web application built with Next.js, TypeScript, MongoDB, and Mongoose, designed to resemble StackOverflow. 
It allows users to ask questions, provide answers, and engage in a community-driven Q&A platform.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication
- Ask and answer questions
- Upvote and downvote answers
- Comment on questions and answers
- User profiles with activity history

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prism.js](https://prismjs.com/)
- [TinyMCE](https://www.tiny.cloud/)
- [Clerk](https://clerk.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation And Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/n2n0n00/stackify.git
   cd stackify
   
2. Install Dependecies:
   
   npm install

3. Environment Variables:
   
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=''
  CLERK_SECRET_KEY=''
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=''
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=''
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL='/'
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL='/'
  NEXT_PUBLIC_TINY_EDITOR_API_KEY=''
  NEXT_CLERK_WEBHOOK_SECRET = ''
  MONGODB_URL = ''

5. Start the development server:

   npm run dev

### License

This project is licensed under the MIT License.
Feel free to customize the content according to your project's specifics, and don't forget to update the placeholders with actual information. 


