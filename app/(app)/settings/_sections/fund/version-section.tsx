import { Lock } from 'lucide-react'

export function VersionSection({ appVersion }: { appVersion: string }) {
  return (
    <div className="rounded-card border border-warning/30 bg-card p-5">
      <h2 className="text-base font-medium mb-1 flex items-center gap-1.5">
        <Lock className="h-3 w-3 text-warning" />
        Version
      </h2>
      <p className="text-xs text-muted-foreground">
        Installed version: <span className="font-mono font-medium text-foreground">v{appVersion}</span>.
      </p>
    </div>
  )
}
