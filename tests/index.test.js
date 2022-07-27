import changePosition from "../src/index";

describe('Receive initial position and return final position', () => {
    it(`should receive a initial position (8, 12) and a new vector 5 times and return 
    final position (34, 10)`, async () => {
        const initialPosition = [8, 12];

        let currentPosition = await changePosition(initialPosition, ['N', 23]);
        currentPosition = await changePosition(currentPosition, ['O', 7]);
        currentPosition = await changePosition(currentPosition, ['S', 40]);
        currentPosition = await changePosition(currentPosition, ['L', 33]);
        currentPosition = await changePosition(currentPosition, ['N', 15]);

        expect(currentPosition).toEqual([34, 10]);
    });

    it(`should receive a initial position (-10, 0) and a new vector 5 times and return 
    final position (-14, 7)`, async () => {
        const initialPosition = [-10, 0];

        let currentPosition = await changePosition(initialPosition, ['L', 14]);
        currentPosition = await changePosition(currentPosition, ['N', 27]);
        currentPosition = await changePosition(currentPosition, ['O', 33]);
        currentPosition = await changePosition(currentPosition, ['S', 20]);
        currentPosition = await changePosition(currentPosition, ['L', 15]);

        expect(currentPosition).toEqual([-14, 7]);
    });
}) 