'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpIcon, DollarSignIcon, LockIcon, TrendingUpIcon } from "lucide-react"

export function ForgotPassword() {
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
              <div className="flex items-center mb-2">
                <DollarSignIcon className="w-6 h-6 text-green-500 mr-2" />
                <div className="text-2xl font-bold">$13.4k</div>
              </div>
              <div className="text-sm text-green-500 mb-1">+38%</div>
              <div className="text-sm text-gray-500">Total Sales</div>
              <div className="text-xs text-gray-400 mt-2">Last Six Month</div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <TrendingUpIcon className="w-6 h-6 text-blue-500 mr-2" />
                <div className="text-2xl font-bold">2,450k</div>
              </div>
              <div className="text-sm text-red-500 mb-1">-24.6%</div>
              <div className="text-sm text-gray-500">New Transactions</div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-2">
              <DollarSignIcon className="w-6 h-6 text-yellow-500 mr-2" />
              <div className="text-2xl font-bold">$42.5k</div>
              <span className="text-sm text-green-500 ml-2">+38%</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">Total Sales</div>
            <div className="w-full h-12 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400"
                style={{
                  width: "38%",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent 100%)",
                  backgroundSize: "30px 30px",
                  animation: "move 2s linear infinite",
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
        <Image
          src="/placeholder.svg?height=400&width=300"
          alt="3D Character"
          width={300}
          height={400}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 bg-blue-500 rounded-lg transform rotate-45"></div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            Forgot Password <LockIcon className="ml-2 w-6 h-6" />
          </h1>
          <p className="text-gray-500 mb-8">
            Enter your email and we'll send you instructions to reset your password
          </p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
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