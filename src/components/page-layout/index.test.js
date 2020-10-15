import React from "react";
import renderer from "react-test-renderer";
import TestingEnvironment from "../../test-utils/router";
import PageLayout from "./index";
jest.mock('../header/', () => 'Header');
jest.mock('../aside/', () => 'Aside');
jest.mock('../footer/', () => 'Footer');

describe('Page Layout Component', function () {

    it('should render page layout component', function () {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    id: 123
                },
                isLoggedIn: true
            }}>
                <PageLayout/>
            </TestingEnvironment>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});