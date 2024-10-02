'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpIcon, EyeIcon, LockIcon } from "lucide-react"

export function ResetPassword() {
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
              <div className="text-2xl font-bold mb-2">$42.5k</div>
              <div className="text-sm text-green-500 mb-4">+42% Overview</div>
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-green-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <div className="text-2xl font-bold">28. XAF</div>
                <ArrowUpIcon className="w-4 h-4 text-green-500 ml-2" />
                <span className="text-sm text-green-500 ml-1">18.2%</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Total Profit</div>
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
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            Reset Password <LockIcon className="ml-2 w-6 h-6" />
          </h1>
          <p className="text-gray-500 mb-8">
            Your new password must be different from previously used passwords
          </p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative">
                <Input id="new-password" type="password" placeholder="New Password" />
                <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input id="confirm-password" type="password" placeholder="Confirm Password" />
                <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <Button className="w-full">LOGIN</Button>
          </form>
          <div className="mt-6">
            <Link href="/login" className="text-blue-500 hover:underline flex items-center">
              <ArrowUpIcon className="w-4 h-4 mr-2 transform rotate-180" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}