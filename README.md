# Stackify - A StackOverflow Lookalike

Stackify is a web application built with Next.js, TypeScript, MongoDB, and Mongoose, designed to resemble StackOverflow. 
It allows users to ask questions, provide answers, and engage in a community-driven Q&A platform.

![stackify1](https://github.com/n2n0n00/stackify/assets/40828429/28c76c4f-514e-4c35-a94c-09b22bc75d2a)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation And Usage](#installation)

## Features

- User authentication
- Ask and answer questions
- Upvote and downvote answers
- Comment on questions and answers
- User profiles with activity history

![stackify2](https://github.com/n2n0n00/stackify/assets/40828429/92360eb4-91ad-46e5-80a4-dc74b65bdf40)


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
- [Zod](https://zod.dev/)

  ![Screenshot 2024-01-23 194956](https://github.com/n2n0n00/stackify/assets/40828429/7af1b9ed-bb0f-49f9-9015-f52b23d9afb6)


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/n2n0n00/stackify.git
   cd stackify
   
2. Install Dependecies:
    ```bash
   npm install

3. Environment Variables:
    ```bash
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
 ```bash
   npm run dev



