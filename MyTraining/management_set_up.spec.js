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
  await page.waitForTimeout(1000);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Seymour2024$!$!');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
  await page.waitForTimeout(1000);
  await page.locator('a').filter({ hasText: /^Organization$/ }).click();
  await page.waitForTimeout(1000);
  await page.goto('https://tftr.test.josce.mil/#/Manage/Organization');
  await page.getByPlaceholder('Search for an organization').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Search for an organization').fill('09');
  await page.waitForTimeout(1000);
  await page.getByText('AF PERSONNEL CTR FO - PENTAGON:ADM | HH09F7CD').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter the name of a new').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter the name of a new').fill('MKGWC');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('a').filter({ hasText: 'My Training' }).click();
  await page.waitForTimeout(1000);
  await page.getByTitle('Edit Organization').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Search for a work center').click();
  await page.waitForTimeout(1000);
  await page.getByText('Unassigned').click();
  await page.waitForTimeout(1000);
  await page.getByText('Cancel Save').click();
  await page.waitForTimeout(1000);
  await page.locator('a').filter({ hasText: 'MyTraining Test' }).click();
  await page.waitForTimeout(1000);
  await page.locator('a').filter({ hasText: 'Logout' }).click();
  await page.waitForTimeout(5000);
});
