import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon } from "lucide-react"

export function VerifyEmail() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex">
        <div className="w-3/5 bg-[#f7f7f9] relative p-8">
          <Image
            src="/assets/images/salesbox-logo.svg"
            alt="SalesBox Logo"
            width={120}
            height={40}
            className="mb-8"
          />
          
          <div className="relative">
            <Image
              src="/assets/images/verify-image.svg"
              alt="3D Character"
              width={600}
              height={600}
              className="mx-auto mt-16"
            />
            
            <Card className="absolute top-0 left-37 w-48 shadow-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-bold flex items-center justify-between">
                  42.5k XAF <span className="text-red-500 text-sm">-22%</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Revenue</p>
                <div className="mt-2 flex space-x-1">
                  <div className="bg-blue-500 w-4 h-8"></div>
                  <div className="bg-blue-500 w-4 h-12"></div>
                  <div className="bg-yellow-500 w-4 h-16"></div>
                  <div className="bg-blue-500 w-4 h-10"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute top-0 right-20 w-48 shadow-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-bold">Sales This Months</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Sales This Month</p>
                <p className="text-xl font-bold mt-1">28,450 XAF</p>
                <div className="mt-2 h-12 flex items-end space-x-1">
                  <div className="bg-blue-500 w-2 h-4"></div>
                  <div className="bg-blue-500 w-2 h-8"></div>
                  <div className="bg-blue-500 w-2 h-6"></div>
                  <div className="bg-blue-500 w-2 h-10"></div>
                  <div className="bg-blue-500 w-2 h-8"></div>
                  <div className="bg-blue-500 w-2 h-4"></div>
                  <div className="bg-blue-500 w-2 h-12"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute bottom-10 right-0 w-48 shadow-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-bold flex items-center justify-between">
                  28.5k XAF <ArrowUpIcon className="h-4 w-4 text-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Profit</p>
                <p className="text-sm text-green-500 mt-1">+18.2%</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="w-2/5 flex items-center justify-center">
          <div className="max-w-sm">
            <h1 className="text-3xl font-bold mb-4">
              Verify your email
            </h1>
            <p className="text-gray-600 mb-6">
              Account activation link sent to your email address: john.doe@email.com
              Please follow the link inside to continue.
            </p>
            <Button className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white uppercase">Skip for now</Button>
            <p className="text-sm text-center">
              Didn&apos;t get the mail? <a href="#" className="text-blue-500 hover:underline">Resend</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}