interface INavigationLink {
    id: number;
    title: string;
    href: string;
}

export const navigationLinks: INavigationLink[] = [
    {
        id: 1,
        title: "Shop",
        href: "/shop",
    },
    {
        id: 2,
        title: "On Sale",
        href: "/sales",
    },
    {
        id: 3,
        title: "New Arrivals",
        href: "/arrivals",
    },
];
