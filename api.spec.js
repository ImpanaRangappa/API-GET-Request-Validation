const { test, expect, request } = require('@playwright/test');

test('API GET request should return 200 status code', async ({}) => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://reqres.in/api/users?page=2');
    
    // Validate that the status code is 200
    expect(response.status()).toBe(200);
});
