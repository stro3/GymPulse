import { DashboardHeader } from "@/components/dashboard/header";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/sidebar-nav";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardHeader title="Settings" />
        <main className="flex-1 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="space-y-6">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                  <aside className="-mx-4 lg:w-1/5">
                    <SidebarNav />
                  </aside>
                  <div className="flex-1">
                     <h2 className="text-2xl font-bold">Coming Soon</h2>
                     <p className="text-muted-foreground">We're working hard to bring you settings. Stay tuned!</p>
                  </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
