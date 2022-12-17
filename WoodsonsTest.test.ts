import { setServers } from "node:dns";
import { after } from "node:test";
import { until } from "selenium-webdriver";
import { HealthcareService } from "./pageObjects";

const fs = require('fs')


const service = new HealthcareService();

describe ("Test for CURA Healthcare service.", () => {
    beforeEach(async () => {
        await service.navigate();
    });
    afterAll(async () => {
        await service.driver.quit();
    });
    test("Booking appointment test 1", async () => {
        await service.click(service.makeApptBtn);
        await service.setInput(service.loginUsrNm, "John Doe");
        await service.setInput(service.loginPword, "ThisIsNotAPassword");
        await service.click(service.loginBtn);
        await service.click(service.facilitySlct);
        await service.click(service.tokyoOPt);
        await service.click(service.hsptlRdmsnIpt);
        await service.click(service.medicareIpt);
        await service.setInput(service.visitDate, "1/1/2023");
        await service.setInput(service.commentBx, "Eye check up.");
        await service.click(service.bookBtn);
        await service.click(service.goToHmPgBtn);
    });
    test("Booking appointment test 2", async () => {
        await service.click(service.facilitySlct);
        await service.click(service.hongkongOpt);
        await service.click(service.hsptlRdmsnIpt);
        await service.click(service.medicaidIpt);
        await service.setInput(service.visitDate, "10/1/2023");
        await service.setInput(service.commentBx, "Prostate exam.");
        await service.click(service.bookBtn);
        await service.click(service.goToHmPgBtn);
    });
    test("Booking appointment test 3", async () => {
        await service.click(service.facilitySlct);
        await service.click(service.SeoulOpt);
        await service.click(service.hsptlRdmsnIpt);
        await service.click(service.noneIpt);
        await service.setInput(service.visitDate, "10/1/2023");
        await service.setInput(service.commentBx, "Prostate exam.");
        await service.click(service.bookBtn);
        await service.click(service.goToHmPgBtn);
    });
    test("Menu tab test", async () => {
        await service.click(service.menuToggle);
        await service.click(service.historyBtn);
        await fs.writeFile(`${__dirname}/historyCards.png`,
        await service.driver.takeScreenshot(), "base64",
         (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
     }),
        await service.click(service.menuToggle);
        await service.click(service.logoutBtn);
    });
    test("Social media links test", async () => {
        await service.click(service.fbLink);
        await service.click(service.twLink);
        await service.click(service.dribbleLink);  
    });
});