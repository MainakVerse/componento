import React from "react";
import { redirect } from "next/navigation";
import CmpUrl from "@/utils/cmp-url";
import ComponentDataArray from "../../../../../public/component-data-array";
import { generateFileLocally, getPreviewCode, getUsageCode } from "@/app/actions";
import dynamic from "next/dynamic";
import ComponentInfoLdr from "@/components/ui/loaders/componentInfoLdr";
const ComponentInfo=dynamic(()=>import('@/components/components-cmp/component-info'),{ssr:false, loading: () => <ComponentInfoLdr/>})

export const generateMetadata = ({ params }: { params: { cmp: string } }) => {
  const data = ComponentDataArray.find(
    (item) => CmpUrl(item.name) === params.cmp
  );
  return {
    title: data?.name,
    description: data?.description,
    openGraph: {
      title: data?.name,
      description: data?.description,
    },
  };
};

const page = async ({ params }: { params: { cmp: string } }) => {
  const searchCmp = params.cmp;
  const resCmp = ComponentDataArray.find(
    (item) => CmpUrl(item.name) === searchCmp
  );

  if (!resCmp) {
    redirect("/components");
  }
  return (
    <>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold ">{resCmp && resCmp?.name}</h1>
        <p className="opacity-80">{resCmp && resCmp?.description}</p>
      </div>

      <div className="space-y-10">
        {resCmp &&
          resCmp.componentData.map(async (elem: any, index: number) => {
            const usageCode = await getUsageCode(
              CmpUrl(elem.title),
              CmpUrl(resCmp.name)
            );
            const previewCode = await getPreviewCode(
              CmpUrl(elem.title),
              CmpUrl(resCmp.name),
              elem.variants
            );
            if (process.env.NODE_ENV === "development") {
              await generateFileLocally(
                CmpUrl(elem.title),
                CmpUrl(resCmp.name),
                elem.variants
              );
            }
            return (
              <ComponentInfo
                key={index}
                component_code={previewCode.message}
                component_name={elem.title}
                component_preview={<elem.component />}
                component_details={elem.details}
                component_usage_code={usageCode.message}
              />
            );
          })}
      </div>
    </>
  );
};

export default page;
