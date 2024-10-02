'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, MailIcon } from "lucide-react"

export function Verify() {
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
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <span className="text-xs text-red-500">-22%</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.5k XAF</div>
              <div className="h-[80px]">
                {/* Replace with actual chart component */}
                <div className="flex h-full items-end space-x-2">
                  <div className="w-1/4 h-1/3 bg-blue-500"></div>
                  <div className="w-1/4 h-2/3 bg-blue-500"></div>
                  <div className="w-1/4 h-1/2 bg-blue-500"></div>
                  <div className="w-1/4 h-1/4 bg-blue-500"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28,450 XAF</div>
              <div className="text-xs text-muted-foreground">Total Sales This Month</div>
              <div className="h-[80px] mt-4">
                {/* Replace with actual chart component */}
                <div className="h-full bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full bg-blue-500" style={{ height: '60%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.5k XAF</div>
              <div className="text-xs text-green-500">+18.2%</div>
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
                Verify your email <MailIcon className="ml-2 h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Account activation link sent to your email address: john.doe@email.com
                Please follow the link inside to continue.
              </p>
              <Button className="w-full mb-4">SKIP FOR NOW</Button>
              <div className="text-center">
                <span className="text-sm text-gray-500">Didn't get the mail? </span>
                <a href="#" className="text-sm text-blue-500 hover:underline">Resend</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}