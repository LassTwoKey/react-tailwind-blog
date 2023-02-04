export interface HeaderMenuType {
  id: string
  to?: string
  name: string
  submenu?: HeaderMenuType[]
}
