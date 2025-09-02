import {ProductView} from "@/features";

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductViewPage({params}: PageProps) {
  const {productId} = await params;
  return <ProductView productId={productId}/>;
}