"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { APIList } from "@/components/ui/api-list";

interface SizesClientProps {
  data: SizeColumn[];
}
export const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API Calls for Sizes" />
      <Separator />
      <APIList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
