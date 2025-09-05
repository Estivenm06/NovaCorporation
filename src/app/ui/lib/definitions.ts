export type SliderProps = {
  greeting?: string;
  nameUser?: string;
};

export interface Plan {
  id: number;
  name: string;
  value: number;
  advantages: string[];
}

export interface Review {
  reviewStar: number;
  review: string;
  photo: string;
  name: string;
}

export interface PlansPageProps {
  plansArray: Plan[];
  reviewsArray: Review[];
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
}
