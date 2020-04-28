const { stringcalc } = require("./string-calc")

test('StringCalc', () => {
    [
        { input: '', output: 0 },
        { input: '1', output: 1 },
        { input: '1,2', output: 3 },
        { input: '1\n2,\n3', output: 6},
        { input: '//;\n;1;3', output: 4},
    ].forEach(({ input, output }) => {

        expect(stringcalc(input)).toEqual(output)

    })
}); 