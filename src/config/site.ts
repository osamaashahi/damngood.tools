export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "DamnGood.Tools",
    description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    mainNav: [
        {
            title: "All tools",
            href: "/",
        },
    ],
    links: {
        signIn: "/sign-in",
        twitter: "https://twitter.com/DmytroKrasun",
        github: "https://github.com/krasun/damngood.tools",
    },
}
