import PageBuilder from "@/components/PageBuilder";
import Data from "@/data/data.json";
import { PageBlock } from "@/types/content";

export default function Home() {
  return (
    <div >
        <PageBuilder blocks={Data.blocks as PageBlock[]} />
    </div>
  );
}
