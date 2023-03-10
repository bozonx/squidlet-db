export interface SquidletDbDocument {
  // directory path like: /root/some/dir
  path: string
  // document id. Looks like hash
  id: string
  created: string
  updated: string
  data: Record<string, any>
}
