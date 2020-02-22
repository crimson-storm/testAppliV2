const express = require('express'),
    app = express(),
    puppeteer = require('puppeteer');

app.get("/", async (request, response) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('http://ocag.teletalk.com.bd/apply.php');
    await page.waitFor(3000);
    await page.click('input[id="110"][type="radio"]');
    await page.waitFor(500);
    await page.click('input[name="next"]');
    await page.waitFor(5000);

  //  await page.select('select#optional_subject', '413');
    
    await page.type('#name', 'CHATAN CHANDRA DAS');
    await page.type('#fathername', 'CHANDRA MOHAN DAS');
    await page.type('#mothername', 'SHEFALI RANI DAS');
    
    await page.select('select#b_day', '01');
    
    await page.select('select#b_month', '02');
    
    await page.select('select#b_year', '1991');
    
    await page.click('input[id="sex_01"][value="1"]'); //Sex: Male
    
    //await page.click('input[id="pc_02"][value="2"]'); //Physically Challenged = No
    
    await page.select('select#religion', 'Hinduism');
     
    await page.click('input[id="nid_01"][value="1"]'); //Nid No
    await page.waitFor(1000);
    await page.type('input[name="nid_no"]', '19917513638000276');
    await page.click('input[name="passport"][value="1"]'); //Passport No
    await page.waitFor(1000);
    await page.type('input[name="passport_no"]', 'BN  029162');
    await page.click('input[name="breg"][value="1"]'); //birth Reg No
    await page.waitFor(1000);
    await page.type('input[name="breg_no"]', '19917513638021739');

    await page.select('select#ffq', '8'); //Quota
    await page.click('input[id="mstatus_02"][value="2"]'); //Marital Status = Single
    

    await page.type('input[id="present_care"]', 'CHANDRA MOHAN DAS');
    
    await page.type('textarea[name="present_vill"]', 'HOROLAL BAISNAB ER BARI, SOUTH CHAR ISWAR ROY');
    
    await page.select('select#menu_one', '58'); //District: Chattogram = 60
    await page.waitFor(1000);
    await page.select('select#menu_one_list', 'Hatiya'); //Upazilla/Thana: Chokbazar = 6015
    
    await page.type('input[id="present_post"]', 'Dhanu Miyar Hat'); //post office
    
    await page.type('input[id="present_pcode"]', '3891'); //postal code
    
    
    await page.type('input[id="permanent_care"]', 'CHANDRA MOHAN DAS');
    
    await page.type('textarea[name="permanent_vill"]', 'HOROLAL BAISNAB ER BARI, SOUTH CHAR ISWAR ROY');
    
    await page.select('select#menu_two', '58'); //District: Chattogram = 60
    await page.waitFor(1000);
    await page.select('select#menu_two_list', 'Hatiya'); //Upazilla/Thana: Chokbazar = 6015
    
    await page.type('input[id="permanent_post"]', 'Dhanu Miyar Hat'); //post office
    
    await page.type('input[id="permanent_pcode"]', '3891'); //postal code
    

    
    await page.type('input[id="mobileno"]', '01736308098');
    
    await page.type('input[id="confirmmobile"]', '01736308098');
    
    await page.type('input[id="Email"]', 'chatandas09@gmail.com');
    
    
    await page.select('select#exam1', '1'); //ssc
    
    await page.select('select#institute1', '2'); //Board
    
    await page.type('input[id="roll1"]', '152746');
    
    await page.select('select#result1', '5'); //Result type: Gpa 5
    await page.waitFor(1000);
    await page.type('input[id="result_gpa1"]', '5.00');
    
    await page.select('select#subject1', '1'); //Group: 1=science
    
    await page.select('select#year1', '2006');
    

    await page.select('select#exam2', '1'); //Hsc
    
    await page.select('select#institute2', '2'); //Board
    
    await page.type('input[id="roll2"]', '151074');
    
    await page.select('select#result2', '5'); //Result type: Gpa 5
    await page.waitFor(1000);
    await page.type('input[id="result_gpa2"]', '4.50');
    
    await page.select('select#subject2', '1'); //Group: 1=science
    
    await page.select('select#year2', '2008');
    

    await page.select('select#exam3', '4'); //Honours: value=4
    await page.waitFor(1000);
    await page.select('select#subject3', '113'); //Subject
    await page.waitFor(1000);
    await page.select('select#institute3', '131'); //Versity
    await page.waitFor(1000);
    await page.select('select#result3', '4'); //Result type: Cgpa 4
    await page.waitFor(1000);
    await page.type('input[id="result_gpa3"]', '2.68');
    
    await page.select('select#year3', '2014');
    
    await page.select('select#duration3', '04');
    

    await page.click('input[id="masters"][value="1"]');
    
    await page.select('select#exam4', '3'); //Masters
    await page.waitFor(1000);
    await page.select('select#subject4', '113'); //Subject
    await page.waitFor(1000);
    await page.select('select#institute4', '131'); //Versity
    await page.waitFor(1000);
    await page.select('select#result4', '4'); //Result type: Cgpa 4
    await page.waitFor(1000);
    await page.type('input[id="result_gpa4"]', '2.81');
    
    await page.select('select#year4', '2016');
    
    await page.select('select#duration4', '01'); 
    
   // await page.click('input[id="one_expvalue_220_01"][type="radio"]'); //Computer Test
    await page.select('select#ds', '5'); 
    //await page.select('select#exam_centre', '13:Chattogram');
    
    const values = await page.evaluate(
      () => [...document.querySelectorAll('iframe[name="t_img"]')]
            .map(element => element.getAttribute('src'))
    );

    const code = values[0].split("="); 
     
    await page.type('input[id="validation"]', code[1]);

    await page.click('input[id="info_yes"][type="checkbox"]');
    await page.waitFor(1000);
    
    await page.click('input[id="button"][type="submit"]');
    await page.waitFor(5000);

    const [Photo] = await Promise.all([
      page.waitForFileChooser(),
      page.click('#photo'), 
    ]);
    await Photo.accept(['./assets/photoChatan.jpg']);

    const [Sig] = await Promise.all([
      page.waitForFileChooser(),
      page.click('#signature'), 
    ]);
    await Sig.accept(['./assets/sigChatan.jpg']);


    await page.click('input[id="info_yes"][type="checkbox"]');
    await page.waitFor(1000);
    await page.click('input[id="button"][type="submit"]');
    await page.waitFor(5000);
    
    await page.click('a[href="pdfdw.php"][class="mainlink"]');
    await page.waitFor(3000);



    response.type('png').send(await page.screenshot());
    await browser.close();
  } catch (error) {
    response.status(503).end(error.message);
  }
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});