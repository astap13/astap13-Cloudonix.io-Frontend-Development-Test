export interface ProductProfile {
  type: string;
  available?: boolean | string;
  backlog: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  cost: number;
  profile: ProductProfile;
}
