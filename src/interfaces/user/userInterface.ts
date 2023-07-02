export interface UserInterface {
  avatar: null | string;
  bikes: Bike[];
  email: string;
  firstname: string;
  lastname: string;
  pictures: any[];
  posts: Post[];
  pseudo: string;
  rider_trips: Trip[];
  trips: Trip[];
}

interface Bike {
  id: number;
  img_bike: string;
  name: string;
  power: number;
}

interface Post {
  content: string;
  pictures: any[];
}

interface Trip {
  description: string;
  end_date: string;
  id: number;
  start_date: string;
  title: string;
  type: string;
}
