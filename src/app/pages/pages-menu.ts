export type Menu = {
    title: string
    , icon: string
    , router: string
    , notification?: string
    , submenu: Menu[]
}
export const MENU_ITEMS: Menu[] = [
    {
        title: "Dashboard"
        , icon: "nav-icon fas fa-tachometer-alt"
        , router: "#"
        , notification: "new"
        , submenu: [
            { title: "Dashboard v1", icon: "far fa-circle", router: "./index.html", submenu: [], notification: "100" }
            , { title: "Dashboard v2", icon: "far fa-circle", router: "./index.html", submenu: [] }
            , { title: "Dashboard v3", icon: "far fa-circle", router: "./index.html", submenu: [] }
        ]
    }
    , {
        title: "Widgets"
        , icon: "nav-icon fas fa-th"
        , router: "pages/widgets.html"
        , submenu: []
    }
    , {
        title: "Layout Options"
        , icon: "nav-icon fas fa-copy"
        , router: "#"
        , submenu: [
            { title: "Top Navigation", icon: "far fa-circle", router: "pages/layout/top-nav.html", submenu: [] }
            , { title: "Boxed", icon: "far fa-circle", router: "pages/layout/boxed.html", submenu: [] }
            , { title: "Fixed Sidebar", icon: "far fa-circle", router: "pages/layout/fixed-sidebar.html", submenu: [] }
            , { title: "Fixed Navbar", icon: "far fa-circle", router: "pages/layout/fixed-topnav.html", submenu: [] }
        ]
    }
]