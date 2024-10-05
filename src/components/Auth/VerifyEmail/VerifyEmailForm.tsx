'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, MailIcon } from "lucide-react"

export function VerifyEmail() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
      <div className="absolute top-4 left-4">
        <Image src="/assets/images/salesbox-logo.svg" alt="SalesBox Logo" width={120} height={40} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="w-[168px] h-[201px]" style={{position: 'absolute', left: '157px', top: '247px'}}>
            <CardHeader className="flex flex-column items-start justify-between space-y-0 pb-2">
              <div className="flex justify-between items-center w-full">
                <CardTitle className="text-sm font-medium">42.5k XAF</CardTitle>
                <span className="text-xs text-red-500">-22%</span>
              </div>
              <div className="text-s text-gray-500">Total Revenue</div>
            </CardHeader>
            <CardContent>
              <svg width="122" height="93" viewBox="0 0 122 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 55.5078C8.75 53.2987 10.5409 51.5078 12.75 51.5078C14.9591 51.5078 16.75 53.2987 16.75 55.5078V93.0001H8.75V55.5078Z" fill="#FDB528"/>
<path d="M0.916504 43C0.916504 40.7909 2.70736 39 4.9165 39C7.12564 39 8.9165 40.7909 8.9165 43V93H0.916504V43Z" fill="#1A7DC0"/>
<path d="M43.75 42.6309C43.75 40.4217 45.5409 38.6309 47.75 38.6309C49.9591 38.6309 51.75 40.4217 51.75 42.6309V93.0001H43.75V42.6309Z" fill="#FDB528"/>
<path d="M35.75 4C35.75 1.79086 37.5409 0 39.75 0C41.9591 0 43.75 1.79086 43.75 4V93H35.75V4Z" fill="#1A7DC0"/>
<path d="M78.75 75.5381C78.75 73.3289 80.5409 71.5381 82.75 71.5381C84.9591 71.5381 86.75 73.3289 86.75 75.5381V92.9996H78.75V75.5381Z" fill="#FDB528"/>
<path d="M70.75 28.3227C70.75 26.1136 72.5409 24.3228 74.75 24.3228C76.9591 24.3228 78.75 26.1136 78.75 28.3228V92.9996H70.75V28.3227Z" fill="#1A7DC0"/>
<path d="M113.75 65.5234C113.75 63.3143 115.541 61.5234 117.75 61.5234C119.959 61.5234 121.75 63.3143 121.75 65.5234V93.0003H113.75V65.5234Z" fill="#FDB528"/>
<path d="M105.75 42.6309C105.75 40.4217 107.541 38.6309 109.75 38.6309C111.959 38.6309 113.75 40.4217 113.75 42.6309V93.0001H105.75V42.6309Z" fill="#1A7DC0"/>
</svg>

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
        <Image
          src="/assets/images/verify-image.svg"
          alt="3D Character"
          width={869}
          height={659}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-10 my-10"
          style={{ left: '174px', top: '286px'}}
        />
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