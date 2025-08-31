export type CategoriesResponseModel = {
  Categories: Category[];
};

export type Category = {
  Id: number;
  Name: string;
  PhotoBase64: string
  IconPhotoURL: string;
  Code: string;
  SubCategories: Category[];
};