import { createElement } from 'lwc';
import B2b_productDetailsDisplay from 'c/b2b_productDetailsDisplay';

describe('c-b-2-b-product-details-display', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-b-2-b-product-details-display', {
            is: B2b_productDetailsDisplay
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});