import {Person} from './Person.model';

describe('Test for model', () =>{
    describe('Test for person.getFullName',()=>{
        it('should return a string name + lastname', ()=>{
            const person = new Person('Sebastian','Sanchez',25);
            expect(person.getFullName()).toEqual('Sebastian Sanchez');
        });
    });
    describe('Test for person.getAgeInYears', ()=>{
        it('Should return Number (age + years)', () =>{
            const person = new Person('Sebastian','Sanchez',25);
            expect(person.getAgeInYears(5)).toEqual(30);
        });
    });
    describe('Test for person.getAgeInYears', ()=>{
        it('Should return Number (age - years)', () =>{
            const person = new Person('Sebastian','Sanchez',25);
            expect(person.getAgeInYears(-5)).toEqual(25);
        });
    });
});