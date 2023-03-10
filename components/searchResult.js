import Link from "next/link";
import x86 from "/public/x86.png";
import risc_v from "/public/risc_v.png";
import Image from "next/image";
import arm from "/public/arm.png";
import sparc from "/public/sparc.png";
import mips from "/public/mips.png";
import power from "/public/power.png";
import { Badge } from "react-bootstrap";

/**
 * @component
 * @description A component that renders a search result which includes 
 * the resource's name, description, architecture, category and license.
 *  @param {Object} resource The resource to be rendered.
 * @returns {JSX.Element} The JSX element to be rendered.
*/
export default function SearchResult({ resource }) {
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
                    <h4>{resource.id}</h4>
                </div>
                <div className="search-result__description">
                    <p>{resource.description}</p>
                </div>
                <div className='d-flex gap-3'>
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
                    <div className='d-flex flex-row gap-1'>
                        <p className="text-capitalize font-weight-light ">
                            {resource.category}
                        </p>
                    </div>
                    <div className='d-flex flex-row gap-1'>
                        <h6 style={{ lineHeight: 'inherit', margin: '0' }}>
                            v
                        </h6>
                        {
                            resource.versions.length > 1 ? resource.versions[1].version : resource.versions[0].version
                        }
                    </div>
                    <div className='d-flex flex-row gap-1'>
                        {
                            resource.tags ? resource.tags.map((tag, index) => {
                                return (
                                    <div key={index}>
                                        <Badge pill bg='primary' >
                                            {tag}
                                        </Badge>
                                    </div>
                                )
                            }) : ""
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}