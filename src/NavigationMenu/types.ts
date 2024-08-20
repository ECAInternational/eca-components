export interface MenuItemDetails {
  id: string;
  label: string;
  link?: string;
  icon?: string;
  enabled: boolean;
  subItems?: MenuItemDetails[];
}
