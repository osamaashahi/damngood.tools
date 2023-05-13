import { PageHeader } from "@/components/page-header"

import { SummarizeAnyURL } from "./SummarizeAnyURL"

export default async function SummarizeAnyURLPage() {
    return (
        <>
            <PageHeader
                heading="Get summary for any URL"
                subheading="Quickly summarize any website or URL."
            />
            <SummarizeAnyURL />
        </>
    )
}
