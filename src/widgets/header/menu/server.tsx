import { MenuClient } from './client';
import { getCategoriesList } from './api';

export async function MenuServer() {
  const categoriesData = await getCategoriesList();
  return (
    <MenuClient
      initialCategories={categoriesData?.data?.Categories || []}
    />
  );
}