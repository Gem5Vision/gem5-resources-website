import Link from "next/link";
import x86 from "/public/x86.png";
import risc_v from "/public/risc_v.png";
import Image from "next/image";
import arm from "/public/arm.png";
import sparc from "/public/sparc.png";
import mips from "/public/mips.png";
import power from "/public/power.png";
import { useEffect, useState } from "react";

/**
 * @component
 * @description A component that renders a search result which includes 
 * the resource's name, description, architecture, category and license.
 *  @param {Object} resource The resource to be rendered.
 * @returns {JSX.Element} The JSX element to be rendered.
*/
export default function SearchResult({ resource }) {
    const [id, setId] = useState(resource.id);
    const [description, setDescription] = useState(resource.description);
    useEffect(() => {
        let id = resource.id;
        let description = resource.description;
        for (let highlight in resource.highlights) {
            for (let text in resource.highlights[highlight].texts) {
                if (resource.highlights[highlight].texts[text].type === "hit") {
                    if (resource.highlights[highlight].path === "description") {
                        description = description.replace(resource.highlights[highlight].texts[text].value, `<mark>${resource.highlights[highlight].texts[text].value}</mark>`);
                        console.log("hit", resource.highlights[highlight].texts[text].value);
                        console.log("description", description);
                    }
                    if (resource.highlights[highlight].path === "id") {
                        id = id.replace(resource.highlights[highlight].texts[text].value, `<mark>${resource.highlights[highlight].texts[text].value}</mark>`);
                    }
                }
            }
        }
        setId(id);
        setDescription(description);
    }, []);

    function getIcon(architecture) {
        switch (architecture) {
            case "X86":
                return x86;
            case "RISCV":
                return risc_v;
            case "ARM":
                return arm;
            case "SPARC":
                return sparc;
            case "MIPS":
                return mips;
            case "POWER":
                return power;
            default:
                return x86;
        }
    }

    return (
        <div className="search-result">
            <Link href={'/resources/' + resource.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="search-result__title">
                    <h4 dangerouslySetInnerHTML={{ __html: id }}></h4>
                </div>
                <div className="search-result__description">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="d-flex gap-1 align-items-center">
                        <Image
                            src={getIcon(resource.architecture)}
                            alt={resource.architecture ?? "Unknown"}
                            width={20}
                            className="mb-3"
                        />
                        <p>
                            {resource.architecture ?? "Unknown"}
                        </p>
                    </div>
                    <p className="text-capitalize fw-light">
                        {resource.category}
                    </p>
                    <p className="fw-light">
                        {resource.license ?? "Unknown"}
                    </p>
                </div>
            </Link>
        </div>
    )
}