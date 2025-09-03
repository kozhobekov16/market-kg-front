import {$api} from "@/shared";
import {CategoriesResponseModel} from "@/models";
import {EndPath} from "@/shared/api/endpoints";
import {cache} from 'react';

export const getCategoriesList = cache(async () => {
  try {
    const response = await $api.get<ResponseModel<CategoriesResponseModel>>(
      EndPath.Categories.GetCategoriesList
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw new Error('Unable to load categories');
  }
});