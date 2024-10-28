import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(180000)
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('mytraining.test');
    await page.waitForTimeout(1500);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Seymour2024$!$!');
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(1500);
    await page.getByTitle('Edit Roles').click();
    await page.waitForTimeout(1500);
    await page.getByPlaceholder('Select a Role').click();
    await page.waitForTimeout(1500);
    await page.getByRole('option', { name: 'Supervisor', exact: true }).click();
    await page.waitForTimeout(1500);
    await page.getByPlaceholder('Select a Role').click();
    await page.waitForTimeout(1500);
    await page.getByText('Workcenter Supervisor').click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'MyTraining Test' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(1500);
    await page.goto('https://mytraining-keycloak.test.cce.af.mil/auth/realms/sso/protocol/openid-connect/auth?client_id=tftr_test&redirect_uri=https%3A%2F%2Ftftr.test.josce.mil%2F%23%2F&state=b016493b-8957-49ff-9005-4f381a3eef0b&response_mode=fragment&response_type=code&scope=openid&nonce=8ecd5b49-552d-4b13-9eea-3b6232e5e864&code_challenge=CNsryVCvmBh1eSY6EcfZ1FpzBEvCGnxTVsgesn36_50&code_challenge_method=S256');
});