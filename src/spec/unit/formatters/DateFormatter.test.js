import { shortDate } from '../../../lib/formatters/DateFormatters';

desceribe('Date formatter functions', () => {
    context('when working with graphs', () => {
        it('returns the short date version of a month', () => {
            const date = '1/1/2020';
            const shortDate = shortDate(date);
            expect(shortDate).toEqual('Jan');
        });
    })
})