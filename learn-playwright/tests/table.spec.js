import {test, page} from '@playwright/test';


// test('dropdown', async({page}) => {
// await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

// await page.getByPlaceholder("Type to Select Countries").fill("chi");
// const dropdowns=await page.locator('autocomplete').all();
// const options=[];
// for(const dropdown in dropdowns)
//     options.push(dropdown.textcontext());

// console.log(options)

// })


test('dropdown', async({page}) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


const rows1=await page.locator('.tableFixHead tbody tr').count();


// const rows=await tableName.locator('tr').all();

 console.log("rows ", rows1);
let sum=0;

for (let i=1;i<=rows1;i++) {
  const cells = await page.locator('tr').nth(i).locator('td').nth(2).innerText();
  sum=sum+parseInt(cells);

  
}
console.log("sum ", sum);
});
