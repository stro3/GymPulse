import { Separator } from "@/components/ui/separator"

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <Separator />
       <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-muted-foreground">Customize your notification preferences.</p>
        </div>
    </div>
  )
}
