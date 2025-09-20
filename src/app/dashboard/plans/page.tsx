import { DashboardHeader } from "@/components/dashboard/header";

export default function PlansPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <DashboardHeader title="My Plans" />
       <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-muted-foreground">A place to view and manage all your generated plans.</p>
        </div>
      </main>
    </div>
  )
}
