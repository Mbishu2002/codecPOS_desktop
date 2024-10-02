'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpIcon, EyeIcon } from "lucide-react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'  

export function Login() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    // For now, we'll just navigate to the dashboard
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute top-4 left-4">
          <Image src="/assets/images/salesbox-logo.svg" alt="SalesBox Logo" width={120} height={40} />
        </div>
        <div className="absolute top-20 left-10">
          <Card className="w-64">
            <CardContent className="p-4">
              <div className="text-sm text-gray-500">Total Revenue</div>
              <div className="text-2xl font-bold flex items-center">
                100,000 XAF
                <ArrowUpIcon className="w-4 h-4 text-green-500 ml-2" />
              </div>
              <div className="text-3xl text-blue-500 mt-2">$</div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute top-20 right-10">
          <Card className="w-64">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">8,458</div>
                  <div className="text-sm text-red-500">▼ 3.10%</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">New Customers</div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute bottom-20 right-10">
          <Card className="w-64">
            <CardContent className="p-4">
              <div className="text-2xl font-bold flex items-center">
                42.5k XAF
                <span className="text-sm text-green-500 ml-2">+62%</span>
              </div>
              <div className="text-sm text-gray-500">Sessions</div>
              <div className="mt-4">
                <svg className="w-full" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 40 L10 30 L20 35 L30 25 L40 30 L50 20 L60 25 L70 15 L80 20 L90 10 L100 5" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
        <Image
          src="/assets/images/login-image.svg"
          alt="3D Character"
          width={2000}
          height={2000}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-96">
          <h1 className="text-3xl font-bold mb-2">Welcome to SaleBox! 👋</h1>
          <p className="text-gray-500 mb-8">Please sign-in to your account and start the adventure</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type="password" placeholder="Password" />
                <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-500">Remember Me</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <Button className="w-full" type="submit">LOGIN</Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              New on our platform? <Link href="/register" className="text-blue-500 hover:underline">Create an account</Link>
            </p>
          </div>
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  )
}