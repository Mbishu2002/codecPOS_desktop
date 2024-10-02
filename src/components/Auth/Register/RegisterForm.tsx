'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpIcon, EyeIcon } from "lucide-react"
import Link from 'next/link'

export function Register() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 relative overflow-hidden p-8">
        <Image
          src="/placeholder.svg"
          alt="SalesBox Logo"
          width={150}
          height={40}
          className="mb-8"
        />
        <div className="grid grid-cols-2 gap-8">
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-2">24.6k</div>
              <div className="text-sm text-green-500 mb-4">+38% Total Growth</div>
              <div className="w-24 h-24 rounded-full border-8 border-blue-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">12%</span>
                </div>
                <div
                  className="absolute top-0 left-0 w-12 h-24 overflow-hidden"
                  style={{
                    transform: "rotate(45deg)",
                    transformOrigin: "100% 50%",
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full border-8 border-green-500"
                    style={{
                      transform: "rotate(-45deg)",
                      transformOrigin: "50% 50%",
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08-.402 2.599-1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">$89.34k</div>
                  <div className="text-sm text-red-500">-18% Total Profit</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Last One Year</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-2xl font-bold">$48.2k</div>
                <ArrowUpIcon className="w-4 h-4 text-green-500 ml-2" />
                <span className="text-sm text-green-500 ml-1">22.5%</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Total Revenue</div>
            </CardContent>
          </Card>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=300"
          alt="3D Character"
          width={300}
          height={400}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Adventure starts here 🚀</h1>
          <p className="text-gray-500 mb-8">Make your app management easy and fun!</p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
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
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-500">
                I Agree to privacy policy & terms
              </label>
            </div>
            <Button className="w-full">REGISTER</Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-500 hover:underline">
                Sign in instead
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">or</div>
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