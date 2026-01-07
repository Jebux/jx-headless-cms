import  { ElementType } from 'react'; // Importamos ElementType
import { PageBlock } from "@/types/content";

import Hero from "@/components/blocks/Hero";
import About from "@/components/blocks/About";
import Services from "@/components/blocks/Services";
import Pricing from "@/components/blocks/Pricing";
import Contact from "@/components/blocks/Contact";
import UnknownComponent from "@/components/blocks/UnknownComponent";

const COMPONENTS_MAP: Record<string, ElementType> = {
    hero: Hero,
    about: About,
    services: Services,
    pricing: Pricing,
    contact: Contact,
};

interface PageBuilderProps {
    blocks: PageBlock[];
}

export default function PageBuilder({ blocks }: PageBuilderProps) {
    return (
        <>
            {blocks.map((block, index) => {
                const SelectedComponent = COMPONENTS_MAP[block.type];

                if (!SelectedComponent) {
                    return (
                        <UnknownComponent
                            key={`unknown-${index}`}
                            type={block.type}
                        />
                    );
                }

                return (
                    <SelectedComponent
                        key={`${block.type}-${index}`}
                        {...block.props}
                    />
                );
            })}
        </>
    );
}