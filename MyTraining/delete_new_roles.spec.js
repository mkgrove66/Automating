import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(120000)
    await page.goto('https://mytraining-keycloak.test.cce.af.mil/auth/realms/sso/protocol/openid-connect/auth?client_id=tftr_test&redirect_uri=https%3A%2F%2Ftftr.test.josce.mil%2F&state=b197a13f-e0c5-4f40-a68f-d412ca4b9041&response_mode=fragment&response_type=code&scope=openid&nonce=cef7939d-8992-44b8-84a2-40c93beb8448&code_challenge=L0WAXr2Qqx1BhWsX4wWLRMpUnYAlc_o0ZWPJdSbNDfE&code_challenge_method=S256');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('mytraining.test');
    await page.waitForTimeout(1500);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Seymour2024$!$!');
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.goto('https://tftr.test.josce.mil/#/Training/Profile');
    await page.waitForTimeout(1500);
    await page.getByTitle('Edit Roles').click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Supervisor cancel', exact: true }).getByRole('button').click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Workcenter Supervisor cancel' }).getByRole('button').click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'MyTraining Test' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(1500);
});