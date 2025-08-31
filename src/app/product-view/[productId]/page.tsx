import { ProductView } from "@/features";

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductViewPage({ params }: PageProps) {
  const { productId } = await params;
  console.log(productId, 'slug');
  return <ProductView />;
}

export async function generateStaticParams() {
  return [
    { productId: "1" },
    { productId: "2" },
  ];
}
