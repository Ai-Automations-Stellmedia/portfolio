import pkg from '@/package.json'

export const APP_VERSION: string = pkg.version

/** Read the installation_id from app_settings */
export async function getInstallationId(
  supabase: { from: (table: string) => any }
): Promise<string | null> {
  const { data } = await supabase
    .from('app_settings')
    .select('installation_id')
    .limit(1)
    .single()
  return data?.installation_id ?? null
}
