# Nova Corporation

A modern corporate website built with Next.js, React, and Tailwind CSS. This project features a responsive design with user authentication, pricing plans, and a clean corporate interface.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with Tailwind CSS
- **User Authentication**: Login and registration system with local storage
- **Responsive Design**: Optimized for desktop and mobile devices
- **Pricing Plans**: Interactive pricing cards with feature listings
- **Review System**: Customer review display with star ratings
- **Dynamic Content**: Personalized greetings and user-specific content
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) with App Router
- **Frontend**: [React 19.1.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Font**: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) from Google Fonts
- **Build Tool**: Turbopack for faster development

## 📁 Project Structure

```
src/
├── app/
│   ├── ui/
│   │   ├── common/          # Shared components (Header, Footer)
│   │   ├── components/      # Page-specific components
│   │   ├── helpers/         # Utility functions
│   │   └── lib/            # Type definitions and constants
│   ├── login/              # Login page
│   ├── register/           # Registration page
│   ├── plans/              # Pricing plans page
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
public/
├── img/                    # Static images and assets
└── ...
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NovaCorporationRemake
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Components

The application includes several reusable React components:

- **Header**: Navigation with logo and menu links
- **Footer**: Company information and social media links
- **Layout**: Main layout wrapper component
- **ReviewBlock**: Customer review cards with star ratings
- **CardBlock**: Pricing plan cards with feature lists
- **SliderBlock**: Hero section with greeting text
- **MainContent**: Main page content component

## 💾 Data Storage

The application uses browser localStorage for:
- User authentication state
- User registration data
- Session management

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section and main content
- **Login** (`/login`) - User authentication page
- **Register** (`/register`) - User registration page
- **Plans** (`/plans`) - Pricing plans and subscription options

## 🎯 Features in Detail

### User Authentication
- Local storage-based authentication system
- Persistent user sessions
- Dynamic greeting based on login status

### Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- Optimized for various screen sizes

### Performance
- Next.js App Router for optimal performance
- Turbopack for faster development builds
- Optimized images and fonts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team.

---

Built with ❤️ using Next.js and React
