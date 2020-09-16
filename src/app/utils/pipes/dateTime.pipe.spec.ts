import { DateTimePipe } from './dateTime.pipe';

describe('DateTime', () => {
    it('create an instance', () => {
        const pipe = new DateTimePipe();
        expect(pipe).toBeTruthy();
    });
});
