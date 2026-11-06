import { redirect } from 'next/navigation'
import { getUser } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { resolvePageAccess, canViewPage } from '@/lib/access/page-gate'
import { APP_VERSION, getInstallationId } from '@/lib/version'

export const metadata = { title: 'Updates' }

export default async function UpdatesPage() {
  const user = await getUser()
  if (!user) redirect('/auth')

  // Deployment info — the `admin` domain, which is adminOnly, so this resolves to the same answer
  // as the role check it replaces.
  const page = await resolvePageAccess(user.id)
  if (!page || !canViewPage(page, 'admin')) redirect('/dashboard')

  const admin = createAdminClient()
  const installationId = await getInstallationId(admin)

  return (
    <div className="p-6 md:p-10 max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Updates</h1>
        <p className="text-muted-foreground text-sm mt-1">Installed version: v{APP_VERSION}</p>
      </div>
      <p className="text-sm text-muted-foreground">
        Rebuild and redeploy from your deployment source to update this installation.
        Apply any new database migrations before starting the updated app.
      </p>
      {installationId && (
        <p className="text-xs text-muted-foreground/60 font-mono">
          Installation ID: {installationId}
        </p>
      )}
    </div>
  )
}
