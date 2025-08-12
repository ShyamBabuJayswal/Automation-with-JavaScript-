import {test,expect} from "@playwright/test"

test('frames',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total frames
   const all_frames=await page.frames()
   console.log(all_frames.lenth)

  const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

  await frame1.fill('[name="mytext1"]',"hello");

  await page.waitForTimeout(5000);








})