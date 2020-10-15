describe("Pages", () =>{

    beforeEach(() =>{
        cy.visit('/');
    });

    it('Home page', function () {
        cy.get('h1').contains('Publications');
    });

    it('Home page and navigate to login page', function () {
        cy.get('header [data-test-id="link-Login"]').click();
        cy.get('h1').contains('Login');
    });

    it('Login page', function () {
        cy.visit('/login');
        const username = "demo1234";
        const password = "demo1234";

        cy.get('#username').type(username);
        cy.get('#password').type(password);

        cy.get('button').contains("Login").click();
        cy.get('header [data-test-id="link-Profile"]').contains('Profile');
    });

    it('Profile page and logout', function () {
        cy.visit('/profile/id');
        cy.get('button').contains('Logout').click();
        cy.get('h1').contains('Login');
    });

    it('Home page and navigate to register page', function () {
        cy.get('aside [data-test-id="link-Register"]').click();
        cy.get('h1').contains("Register");
    });

    it('Share Thoughts page and textarea', function () {
        cy.visit('/share-thoughts');
        const value = 'Some dummy text here';
        cy.get('textarea').type(value).should('have.value', value);
    });
});