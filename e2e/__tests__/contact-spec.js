const simulator = require("miniprogram-automator");
(async () => {

    
    let prg = `${__dirname}/../../test_app`
    const miniApp = await simulator.launch({
        projectPath: `${__dirname}/../../test_app/`
    });

    let page = await miniApp.currentPage();
    page = await miniApp.navigateTo('../contact/contact');
    await page.waitFor(1000);   


    // Get Paga Data
    let data = await page.data();
    console.log(data);

    // SetData
    data.name = "Naren chejara";
    data.phone = "12345678910";
    await page.setData(data);
    console.log(await page.data());

    // Clear page data by calling 'tapOnClear' method
    await page.callMethod("tapOnClear");
    console.log(await page.data());

    // Find and element
    const titleElement = await page.$('[id="title"]');
    
    // Get size of the element
    console.log("Size of the element: %j", await titleElement.size())

    // Get offset of the element
    console.log("Offset of the element: %j", await titleElement.offset());

    //Get text of the element
    let title = await titleElement.text(); 
    console.log(`Title of the contact page: ${title}`);
    
    //Get the value of the attribute
    let attr = await titleElement.attribute("id"); 
    console.log(`The value of the 'id' attribute: ${attr}`);

    //Get wxml (weixin markup language)
    let wxml = await titleElement.wxml(); 
    console.log(`Weixin markup language: ${wxml}`);

     //Get wxml (weixin markup language)
     let outerWxml = await titleElement.outerWxml(); 
     console.log(`Outer wiexin markup language: ${outerWxml}`);

     // Type in Name element
    let name = await page.$('[id="name"]');
    await name.trigger('input', {value: "Naren Chejara"});

    // Get the vsalue of the Input element
    await page.waitFor(500);
    let value = await name.value();
    console.log(`Value of the input box is: ${value}`); 
    
    
    //close the mini app 
    await miniApp.close();

}
)();