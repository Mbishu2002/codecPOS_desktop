'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// Removed unused import
// import { Label } from "@/components/ui/label"
import { ArrowDownIcon, UserIcon, WalletIcon } from "lucide-react"

export function TwoStepVerificationComponent() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/placeholder.svg"
            alt="SalesBox Logo"
            width={150}
            height={40}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              <UserIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,458</div>
              <div className="text-xs text-red-500">
                <ArrowDownIcon className="h-4 w-4 inline mr-1" />
                8.10%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <WalletIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.16k XAF</div>
              <div className="text-xs text-red-500">
                <ArrowDownIcon className="h-4 w-4 inline mr-1" />
                16%
              </div>
              <div className="text-xs text-muted-foreground mt-1">Last One Month</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="3D Character"
            width={300}
            height={400}
          />
        </div>
        <div className="mt-8 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                Two Step Verification
                <span className="ml-2 text-muted-foreground">💬</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
                ******1234
              </p>
              <div className="grid grid-cols-6 gap-2 mb-4">
                {[...Array(6)].map((_, i) => (
                  <Input key={i} className="text-center" maxLength={1} />
                ))}
              </div>
              <Button className="w-full mb-4">SKIP FOR NOW</Button>
              <div className="text-center">
                <span className="text-sm text-gray-500">Didn&apos;t get the mail? </span>
                <a href="#" className="text-sm text-blue-500 hover:underline">Resend</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}