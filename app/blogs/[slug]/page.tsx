import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 flex flex-col">
      <div className="flex justify-center divide-y bg-slate-100 divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="container bg-white w-[50%] divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="mt-10">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              {data.title}
            </h1>
          </div>
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
