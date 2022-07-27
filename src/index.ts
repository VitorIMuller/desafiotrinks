let currentPosition: number[];

export default async function changePosition(initialPosition: number[], vector: [string, number]) {
    let finalPosition: number[];
    currentPosition = initialPosition;

    const acceptedDirection = {
        N(): number[] {
            return currentPosition = [currentPosition[0], currentPosition[1] + vector[1]];
        },
        S(): number[] {
            return currentPosition = [currentPosition[0], currentPosition[1] - vector[1]];
        },
        L(): number[] {
            return currentPosition = [currentPosition[0] + vector[1], currentPosition[1]];
        },
        O(): number[] {
            return currentPosition = [currentPosition[0] - vector[1], currentPosition[1]];
        }
    }
    let direction: string = vector[0].toUpperCase();

    if (direction !== 'N' && direction !== 'S' && direction !== 'L' && direction !== 'O') return null;
    if (initialPosition == []) return null;

    const applyCordinates = acceptedDirection[direction];
    applyCordinates();
    finalPosition = currentPosition;

    return finalPosition;
}