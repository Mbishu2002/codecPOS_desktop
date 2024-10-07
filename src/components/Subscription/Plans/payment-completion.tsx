'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function PaymentCompletion({ selectedMethod, onBack }) {
  return (
    <>
      <Button variant="ghost" onClick={onBack} className="mb-4">
        ← Back
      </Button>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{selectedMethod} LOGO</CardTitle> {/* Use selectedMethod here */}
          <CardDescription className="text-center">
            {selectedMethod} Payment
            <span className="text-blue-500 cursor-pointer" onClick={onBack}> Change Payment method</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="momo-number" className="block text-sm font-medium text-gray-700">
                Enter MOMO Number
              </label>
              <Input id="momo-number" placeholder="e.g., 670526654" />
            </div>
            <Button className="w-full">PAY</Button>
            <p className="text-center text-sm text-gray-500">
              🔒 Secured By CodecPay
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}