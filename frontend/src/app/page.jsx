import { useStrapiData } from "@/7_shared/api";

const PAGE_ID = 1
const HomePage = async () => {
  const { getPageData } = useStrapiData()
  const { contentSections } = getPageData(PAGE_ID)

  console.log(contentSections)

  return (
    <> 
      {(contentSections ?? []).map((section, index) => (
        <section>{index}</section>
      ))}
    </>
  );
}

export default HomePage