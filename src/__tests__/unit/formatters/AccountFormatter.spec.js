import { formatDollars } from '../../../formatters/AccountFormatters';

describe('AccountFormatter functions', () => {
    describe('when given a positive number as a string: ', () => {
        it(' - Adds a decimal to the number if none exist.', () => {
            const sumOfMoney = 1000;
            const formattedSumOfMoney = formatDollars.format(sumOfMoney);
            expect(formattedSumOfMoney).toEqual("$1,000.00");
        });
        it(' - Does not add a decimal if a decimal exists.', () => {
            const sumOfMoney = 1000.12;
            const formattedSumOfMoney =  formatDollars.format(sumOfMoney);
            expect(formattedSumOfMoney).toEqual("$1,000.12");
        });
        it (' - Adds a comma if the amount is > 999.', () => {
            const sumOfMoney = 1000.12;
            const formattedSumOfMoney = formatDollars.format(sumOfMoney);
            expect(formattedSumOfMoney).toEqual("$1,000.12");
        });
        it(' - Adds a dollar sign if none is provided.', () => {
            const sumOfMoney = 1000.12;
            const formattedSumOfMoney = formatDollars.format(sumOfMoney);
            expect(formattedSumOfMoney).toEqual("$1,000.12");
        });
    });
});