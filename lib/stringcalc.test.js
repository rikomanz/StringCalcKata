const { stringcalc } = require("./string-calc")

test('StringCalc', () => {
    [
        { input: '', output: 0 },
        { input: '1', output: 1 },
        { input: '1,2', output: 3 },
    ].forEach(({ input, output }) => {

        expect(stringcalc(input)).toEqual(output)

    })
}); 