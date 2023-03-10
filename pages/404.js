import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getResource } from "./api/getresource";
import Resource from "./resources/[id]/[[...page]]";

/**
 * @component
 * @description The 404 page of the website. This is also reused to
 * do dynamic routing for resources.
 * @returns {JSX.Element} The JSX element to be rendered.
*/
export default function Custom404() {
    const router = useRouter()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchResource(id) {
            setLoading(true)
            getResource(id).then((resource) => {
                if (resource.error) {
                    setError(true)
                    // change url to 404 without reloading the page
                    router.push(`/404`)
                }
                else
                    setError(false)
                setLoading(false)
            })
        }
        console.log(router.query)
        // check if path 
        if (router.isReady && router.query !== undefined) {
            setLoading(true)
            setError(false)
            const url = router.asPath.split("/")
            if (url.length < 3 || url[1] !== "resources") {
                setError(true)
                setLoading(false)
                return
            }
            const id = url[2]
            fetchResource(id);
        }
    }, [router.isReady])

    function getPage() {
        if (loading)
            return <div>Loading...</div>
        if (error)
            return <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
                <h1 className="primary" style={{ fontSize: "10rem" }}>
                    404
                </h1>
                <p>The page you are looking for does not seem to exist.</p>
                <Link href="/" passHref>
                    <Button variant="outline-primary" as="Link">Go back to home</Button>
                </Link>
            </Container>
        return <Resource />
    }

    return (
        getPage()
    );
}