import { expect } from '@playwright/test';

export class IveyProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.iveyImage = page.getByRole('img', { name: /Ivey/i });
    this.climbsText = page.getByText('Climbs'); // Use getByText for clearer intent
  }

  async goto() {
    await this.page.goto('https://pinaspeaks.com/mountaineer/@Ivey');
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveTitle('PinasPeaks');
    await expect(this.iveyImage).toBeVisible();
    await expect(this.climbsText).toBeVisible();
  }

  async clickIveyImage() {
    await this.iveyImage.click();
  }
}
