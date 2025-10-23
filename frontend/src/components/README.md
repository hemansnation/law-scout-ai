# AI Enterprise Knowledge Assistant (EKA) Components

This folder contains all React components needed to build the login, register, and main pages for your EKA application.

## Components Structure

```
src/components/
├── auth/                    # Authentication components
│   ├── LoginForm.tsx       # Sign in form
│   ├── RegisterForm.tsx    # Registration form
│   └── index.ts           # Exports
├── layout/                 # Layout components
│   ├── Header.tsx         # Application header
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── MainLayout.tsx     # Main layout
│   └── index.ts          # Exports
├── dashboard/             # Dashboard components
│   ├── Dashboard.tsx      # Main dashboard page
│   └── index.ts          # Exports
├── ui/                    # Base UI components (shadcn/ui)
│   ├── button.tsx        # Buttons
│   ├── input.tsx         # Input fields
│   ├── card.tsx          # Cards
│   ├── form.tsx          # Forms
│   └── ...               # Other UI components
└── index.ts              # Main exports
```

## Main Components

### 1. Authentication Components

#### LoginForm
```tsx
import { LoginForm } from "@/components/auth"

<LoginForm
  onLogin={(email, password) => {
    // Authentication logic
  }}
  onRegisterClick={() => {
    // Switch to register view
  }}
  isLoading={false}
  error=""
/>
```

#### RegisterForm
```tsx
import { RegisterForm } from "@/components/auth"

<RegisterForm
  onRegister={(userData) => {
    // Registration logic
  }}
  onLoginClick={() => {
    // Switch to login view
  }}
  isLoading={false}
  error=""
/>
```

### 2. Layout Components

#### MainLayout
```tsx
import { MainLayout } from "@/components/layout"

<MainLayout
  user={{
    name: "John Doe",
    email: "john@company.com",
    avatar: "/avatar.jpg"
  }}
  onLogout={() => {
    // Logout logic
  }}
>
  {/* Page content */}
</MainLayout>
```

#### Header
```tsx
import { Header } from "@/components/layout"

<Header
  user={user}
  onMenuClick={() => {}}
  onLogout={() => {}}
  onProfileClick={() => {}}
  onSettingsClick={() => {}}
/>
```

#### Sidebar
```tsx
import { Sidebar } from "@/components/layout"

<Sidebar
  activeItem="dashboard"
  onItemClick={(item) => {
    // Navigation
  }}
/>
```

### 3. Dashboard

#### Dashboard
```tsx
import { Dashboard } from "@/components/dashboard"

<Dashboard
  user={{
    name: "John Doe",
    email: "john@company.com"
  }}
/>
```

## Example Pages

### Authentication Page (`/auth`)
```tsx
"use client"

import { useState } from "react"
import { LoginForm, RegisterForm } from "@/components/auth"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {isLogin ? (
        <LoginForm onRegisterClick={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onLoginClick={() => setIsLogin(true)} />
      )}
    </div>
  )
}
```

### Main Page (`/dashboard`)
```tsx
"use client"

import { MainLayout, Dashboard } from "@/components"

export default function DashboardPage() {
  const user = {
    name: "John Doe",
    email: "john@company.com"
  }

  return (
    <MainLayout user={user}>
      <Dashboard user={user} />
    </MainLayout>
  )
}
```

## Implemented Features

### 🔐 Authentication
- ✅ Login form with validation
- ✅ Registration form with validation
- ✅ Show/hide password functionality
- ✅ Loading and error states
- ✅ Email and password validation

### 🎨 UI/UX
- ✅ Consistent design system with shadcn/ui
- ✅ Responsive design (mobile and desktop)
- ✅ Icons with Lucide React
- ✅ Customizable themes and colors
- ✅ Smooth animations

### 📱 Layout
- ✅ Responsive header with mobile menu
- ✅ Collapsible sidebar
- ✅ Section navigation
- ✅ User menu with dropdown
- ✅ Global search

### 📊 Dashboard
- ✅ Key statistics
- ✅ Recent activity
- ✅ Popular queries
- ✅ Quick actions
- ✅ Information cards

## Next Steps

To fully integrate these components into your application:

1. **Configure routes**: Update your router to use these pages
2. **Global state**: Implement state management (Context, Zustand, etc.)
3. **API integration**: Connect with your backend
4. **Real authentication**: Implement JWT or your auth system
5. **Customization**: Adjust colors, styles, and content

## Useful Commands

```bash
# Add more shadcn/ui components
pnpm dlx shadcn@latest add [component-name]

# View all available components
pnpm dlx shadcn@latest view @shadcn

# Example: add more components
pnpm dlx shadcn@latest add dialog select textarea checkbox
```

## Main Dependencies

- **React 18+**
- **Next.js 14+**
- **shadcn/ui** - Component system
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety