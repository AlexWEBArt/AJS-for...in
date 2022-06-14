import { sortingFunc } from '../for...in';

test('test sorting object', () => {
    const sorted = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ]
    const result = sortingFunc({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"])
    expect(result).toEqual(sorted)
})