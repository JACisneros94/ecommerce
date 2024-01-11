import Link from "next/link";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
      <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/products/new'}>Nuevo producto</Link>
    </Layout>
  );
}