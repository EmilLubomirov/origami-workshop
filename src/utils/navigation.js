const getNavigation = (isAuthenticated, userId) =>{

    const authNav = [
        {
            title: "Share Thoughts",
            path: "/share-thoughts"
        },

        {
            title: "Profile",
            path: `/profile/${userId}`
        }
    ];

    const guestNav = [
        {
            title: "Publications",
            path: "/"
        },
        {
            title: "Register",
            path: "/register"
        },
        {
            title: "Login",
            path: "/login"
        }
    ];

    return isAuthenticated ? authNav : guestNav;
};

export default getNavigation;