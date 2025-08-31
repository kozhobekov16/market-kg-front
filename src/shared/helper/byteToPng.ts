import { useQuery } from "@tanstack/react-query";
import { $api, EndPath } from "@/shared";

export const byteToPng = (imagePath: string) => {
  return useQuery({
    queryKey: ['byteToPng', imagePath],
    queryFn: async () => {
      const response = await $api.get(EndPath.FilesStore.GetFile, {
        params: { photoFilePath: imagePath }
      });
      return response.data;
    },
    enabled: !!imagePath,
  });
};