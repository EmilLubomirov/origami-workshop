import React from "react";
import renderer from "react-test-renderer"
import getNavigation from "../../utils/navigation";
import TestingEnvironment from "../../test-utils/router";
import Header from "./index";

describe("Header Component", () =>{

    it('should return authLinks by getNavigation()', function () {

        const nav = getNavigation(true, 1234);

        const authNav = [
            {
                title: "Publications",
                path: "/"
            },
            {
                title: "Share Thoughts",
                path: "/share-thoughts"
            },

            {
                title: "Profile",
                path: `/profile/1234`
            }
        ];

        expect(nav).toStrictEqual(authNav);
    });

    it('should render authenticated routes', function () {

        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    id: 1234
                },
                isLoggedIn: true
            }
            }>
                <Header/>
            </TestingEnvironment>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render guest routes', function () {

        const tree = renderer.create(
            <TestingEnvironment value={{
                user: null,
                isLoggedIn: false
            }}>
              <Header/>
            </TestingEnvironment>
        ).toJSON();

        expect(tree).toMatchSnapshot();

    });
});