import { PageHeader } from "@/components/page-header"

import { ScrollingScreenshots } from "./ScrollingScreenshots"

export default async function ScrollingScreenshotsPage() {
    return (
        <>
            <PageHeader
                heading="Scrolling screenshots"
                subheading="Render a scrolling animated screenshot of any website."
            />
            <ScrollingScreenshots />
        </>
    )
}
