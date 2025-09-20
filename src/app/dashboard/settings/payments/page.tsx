import { Separator } from "@/components/ui/separator";

export default function SettingsPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Payments</h3>
        <p className="text-sm text-muted-foreground">
          Manage your billing information and view your payment history.
        </p>
      </div>
      <Separator />
      <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-muted-foreground">Manage your payments and subscriptions here.</p>
        </div>
    </div>
  )
}
