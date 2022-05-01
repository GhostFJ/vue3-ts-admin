export interface IMenu {
  path: string
  title: string
  icon: string
  header?: string
  is_header?: number
  children?: IMenu[]
}
