export interface Post {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: any[];
  description: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
  favorited: boolean;
  favoritesCount: number;
}
