import { BasePage } from "./basePage";
import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";

export class HealthcareService extends BasePage {

    makeApptBtn: By = By.xpath('//a[@id="btn-make-appointment"]');
    loginUsrNm: By = By.xpath('//input[@name="username"]');
    loginPword: By = By.xpath('//input[@name="password"]');
    loginBtn: By = By.xpath('//button[@type="submit"]');
    facilitySlct: By = By.xpath('//select[@name="facility"]');
    tokyoOPt: By = By.xpath('//option[@value="Tokyo CURA Healthcare Center"]');
    hongkongOpt: By = By.xpath('//option[@value="Hongkong CURA Healthcare Center"]');
    SeoulOpt: By = By.xpath('//option[@value="Seoul CURA Healthcare Center"]');
    hsptlRdmsnIpt: By = By.xpath('//input[@name="hospital_readmission"]');
    medicareIpt: By = By.xpath('//input[@value="Medicare"]');
    medicaidIpt: By = By.xpath('//input[@value="Medicaid"]');
    noneIpt: By = By.xpath('//input[@value="None"]');
    visitDate: By = By.xpath('//input[@name="visit_date"]');
    commentBx: By = By.xpath('//textarea[@name="comment"]');
    bookBtn: By = By.xpath('//button[@type="submit"]');
    goToHmPgBtn: By = By.xpath('//a[@class="btn btn-default"]');
    menuToggle: By = By.xpath('//a[@id="menu-toggle"]');
    historyBtn: By = By.xpath('//a[@href="history.php#history"]');
    logoutBtn: By = By.xpath('//a[@href="authenticate.php?logout"]');
    fbLink: By = By.xpath('//i[@class="fa fa-facebook fa-fw fa-3x"]');
    twLink: By = By.xpath('//i[@class="fa fa-twitter fa-fw fa-3x"]');
    dribbleLink: By = By.xpath('//i[@class="fa fa-dribbble fa-fw fa-3x"]');

    constructor() {
        super({url: "https://katalon-demo-cura.herokuapp.com/"});
    }


}

