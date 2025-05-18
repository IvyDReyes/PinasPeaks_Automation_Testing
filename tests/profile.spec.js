import { expect, test } from "@playwright/test";

test("Verify if the Profile page of Ivey is loading successfully", async ({
  page,
}) => {
  await test.step("Navigate to URL", async () => {
    await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");
    await expect(page.getByRole('link', { name: 'PinasPeaks Logo' })).toBeVisible();
    await expect(page).toHaveTitle("PinasPeaks");
    await page.waitForLoadState("networkidle");
  });
});

test("Verify the profile picture and the username", async ({ page }) => {
  await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");

  await test.step("Check if profile image is visible and clickable", async () => {
    const iveyImage = page.getByRole("img", { name: "Ivey" });
    await expect(iveyImage).toBeVisible();
    await iveyImage.click();
    await page.getByRole("button", { name: "Close" }).click();
  });

  await test.step("Check if the username is visible and correct", async () => {
    await expect(page.getByText("@Ivey")).toBeVisible();
  });
});

test("Verify the Location, Last Climb and Favorite mountain", async ({
  page,
}) => {
  await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");

  await test.step("Check if the Location is visible and correct", async () => {
    await expect(page.getByText("Location:")).toBeVisible();
    await expect(
      page.getByRole("paragraph").filter({ hasText: /^Metro Manila$/ })
    ).toBeVisible();
  });

  await test.step("Check if the Last Climb is visible and correct", async () => {
    await expect(page.getByText("Last Climb:")).toBeVisible();
    await expect(
      page.getByRole("paragraph").filter({ hasText: /^October 1, 2024$/ })
    ).toBeVisible();
  });

  await test.step("Check if the Favorite Mountain is visible and correct", async () => {
    await expect(page.getByText("Favorite Mountain:")).toBeVisible();
    await expect(
      page.getByRole("paragraph").filter({ hasText: "Mt. Pulag" })
    ).toBeVisible();
  });
});

test("Verify the number of Climbs and Peaks", async ({ page }) => {
  await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");

  await test.step("Check if the number of Climbs is visible and correct", async () => {
    await expect(page.getByText("Climbs:")).toBeVisible();
    await expect(page.getByText("13", { exact: true })).toBeVisible();
  });

  await test.step("Check if the number of Peaks is visible and correct", async () => {
    await expect(page.getByText("Peaks:")).toBeVisible();
    await expect(page.getByText("12", { exact: true })).toBeVisible();
  });
});

test("Verify the Achievements and Connect", async ({ page }) => {
  await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");

  await test.step("Check if the Achievements section is visible and correct", async () => {
    await expect(page.getByText("Achievements:")).toBeVisible();
    await expect(page.getByText("1st of many")).toBeVisible();
  });
  await test.step("Check if the Connect label is visible", async () => {
    await expect(page.getByText("Connect:")).toBeVisible();
  });
});

test("Verify if Order by dropdown is working", async ({ page }) => {
  await page.goto("https://pinaspeaks.com/mountaineer/@Ivey");

  await test.step('Check the Order by: dropdown', async () => {
    const orderBy = page.getByText('Order by:');
    await expect(orderBy).toBeVisible();
    await expect(orderBy).toHaveText('Order by:');
    await expect(page.getByRole('combobox')).toBeVisible(); 

  });

  await test.step('Check the Order by Elevation (masl)', async () => {
    await page.getByRole('combobox').selectOption({ value: 'masl' });
  });

  await test.step('Check the Order by Name', async () => {
    await page.getByRole('combobox').selectOption({ value: 'name' });
  });

  await test.step('Check the Order by Date climbed', async () => {
    await page.getByRole('combobox').selectOption({ value: 'date' });
  });
});

test('Verify the Search textbox', async ({ page }) => {
  await page.goto('https://pinaspeaks.com/mountaineer/@Ivey');

  await test.step('Search with valid input', async () => {
    const searchBox = page.getByRole('textbox', { name: 'Search...' });
    await expect(searchBox).toBeVisible();
    await searchBox.fill('Pulag');
    
  });
});