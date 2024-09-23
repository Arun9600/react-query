export interface Users {
  id: number;
  name: string;
  email: string;
  address?: {
    street: any;
    suite: any;
    city: string;
    zipcode: number;
    geo?: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: any;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Products {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface PostProduct {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
