import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactHemoChainAdmin() {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Contact HemoChain Admin</CardTitle>
      </CardHeader>
      <CardContent>
        <p>For any queries or support, please contact the HemoChain Admin:</p>
        <p className="mt-2"><strong>Email:</strong> admin@hemochain.com</p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Working Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM EST</p>
      </CardContent>
    </Card>
  )
}

