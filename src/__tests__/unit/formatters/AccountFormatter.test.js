import { formatMoney } from '../../../formatters/AccountFormatters';

describe('AccountFormatter functions', () => {
    describe('when given a positive number as a string', () => {
        it('Adds a decimal to the number if none exist.', () => {
            const sumOfMoney = 1000;
            const formattedSumOfMoney = formatMoney(sumOfMoney);
            expect(formattedSumOfMoney).toEqual(1000.00);
        });
    })
})