export interface ProductProfile {
    type: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    sku: string;
    cost: number;
    profile: ProductProfile;
  }