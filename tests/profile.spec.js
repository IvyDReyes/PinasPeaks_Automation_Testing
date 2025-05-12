import { test, expect } from '@playwright/test';

test('Pinas Peaks Profile in Web', async ({ page }) => {

  await test.step('Navigate to URL', async ({}) => {
    await page.goto('https://pinaspeaks.com/mountaineer/@Ivey');
    await expect(page.getByRole('img', { name: 'Ivey' })).toBeVisible();
    await page.getByRole('img', { name: 'Ivey' }).click();
  });
});