const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      // arrange and act
      var result = mathOperations.sum(1,2)
    
      // assert
      expect(result).toBe(3);
    });
    test('adding 5 + 5 should return 5', () => {
      // arrange and act
      var result = mathOperations.sum(5,5)
    
      // assert
      expect(result).toBe(10);
    });
    test('adding 1 + 1 should return 2', () => {
      // arrange and act
      var result = mathOperations.sum(1,1)
    
      // assert
      expect(result).toBe(2);
    });
    test('adding 100 + 2 should return 102', () => {
      // arrange and act
      var result = mathOperations.sum(100,2)
    
      // assert
      expect(result).not.toBe(5);
    });
    test('diff 100 + 2 should return 102', () => {
      // arrange and act
      var result = mathOperations.diff(100,2)
    
      // assert
      expect(result).not.toBe(980);
    });
    test('diff 100 + 2 should return 102', () => {
      // arrange and act
      var result = mathOperations.product(100,2)
    
      // assert
      expect(result).toBe(200);
    });
    test("string matchers",() => {
        var string1 = "software testing help - a great resource for testers"
      
        // test for success match
        expect(string1).toMatch(/test/);
      
        // test for failure match
        expect(string1).not.toMatch(/abc/)
      })
    
     
   })
   