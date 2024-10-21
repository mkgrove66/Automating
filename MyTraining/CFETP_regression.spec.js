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
    await page.waitForTimeout(2500);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Seymour2024$!$!');
    await page.waitForTimeout(2500);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(2500);
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.waitForTimeout(2500);
    await page.locator('a').filter({ hasText: /^Product$/ }).click();
    await page.waitForTimeout(2500);
    await page.goto('https://tftr.test.josce.mil/#/Manage/Product');
    await page.waitForTimeout(2500);
    await page.locator('a').filter({ hasText: 'MyTraining Test' }).click();
    await page.waitForTimeout(2500);
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(5000);
});