const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3);
    expect(total).toBe(13);
});

test('Should caclculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5);
})

test('Should convert 32 F to 0 C', () => {
    const c = fahrenheitToCelsius(32);
    expect(c).toBe(0);
})

test('Should convert 0 C to 32 F', () => {
    const f = celsiusToFahrenheit(0);
    expect(f).toBe(32);
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     }, 2000);

// })

test('Should add two number', (done) => {
    add(2, 3).then((sum => {
        expect(sum).toBe(5);
        done();
    }))
})

test('Should add two numbers async/await', async () => {
    const sum = await add(2, 8);
    expect(sum).toBe(10);
})