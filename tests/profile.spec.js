import { test } from '@playwright/test';
import { IveyProfilePage } from '../pages/IveyProfilePage.js';

test('PinasPeaks: Ivey Profile Page Loads Correctly', async ({ page }) => {
  const iveyPage = new IveyProfilePage(page);

  await iveyPage.goto();
  await iveyPage.verifyPageLoaded();
  await iveyPage.clickIveyImage(); // Optional interaction
});
