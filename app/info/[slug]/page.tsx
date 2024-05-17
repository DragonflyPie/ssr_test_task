import Dialog from "@/app/info/[slug]/Dialog";
import Results from "./Results";
import getData from "@/utils/getData";

const Info = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams);
  const address = searchParams.address;

  const data = await getData(params.slug);

  const noData = !data.suggestions.length;

  if (noData) {
    return (
      <div className="flex h-[16rem] w-full flex-col items-center justify-center rounded bg-gray-100">
        Не найдено организаций по данному ИНН
      </div>
    );
  }

  return (
    <>
      <Results data={data} />
      <Dialog />
    </>
  );
};

export default Info;
