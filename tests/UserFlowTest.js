import { test, expect } from '@playwright/test';
import { UserFlowPage } from '../main/pages/UserFlowPage';

test('API Task For Finac Plus', async ({ request }) => {
    const userFlow = new UserFlowPage(request);
    const createResponse = await userFlow.createUser("Monkey D Garp", "Hero of Navy");
    expect(createResponse.status()).toBe(201);
    const createBody = await createResponse.json();
    const userId = createBody.id;
    console.log(`Created User: ${createBody.name}, Created Job Details: ${createBody.job}`);
    const updateResponse = await userFlow.updateUser(userId, "Gol D Roger", "King of Pirates");
    expect(updateResponse.status()).toBe(200);
    const updateBody = await updateResponse.json();
    console.log(`Updated User: ${updateBody.name}, Updated Job Details: ${updateBody.job}`);
    console.log("All Details Updated Successfully");
});