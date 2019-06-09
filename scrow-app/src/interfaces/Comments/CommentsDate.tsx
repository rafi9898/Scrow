export interface StateValue {
  comments?: {
    id: number;
    rate: number;
    nick: string;
    initials: string;
    description: string;
  }[];
  isLoaded?: boolean;
  currentPage?: number;
  loadItems?: number;
  pageSize?: number;
}
