
// Example of test below complete with import statement.
/*
import Blank from './../src/rectangle.js';

describe("Blank", () => {
    let blank; 
    
    beforeEach(() => {
        blank = new Blank(x,y);
    })

    test("blah blah blah blah blah", () => {
        expect(Blank.x).toEqual(xx);
        expect(Blank.y).toEqual(yy);
    });
})
*/

import planetYears from './../src/index';

describe("planetYears", () => {


    test("Should take the value of age and multiply it for each planet to return the age of a person on said planet", () => {
        const totalAge = new planetYears(10);
        expect(totalAge.age).toEqual(10);
    });
});
