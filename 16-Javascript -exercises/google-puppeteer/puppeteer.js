"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
(() => __awaiter(this, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch(
    // {
    // headless: false, // The browser is visible
    // ignoreHTTPSErrors: true,
    // args: [`--window-size=1,1`] // new option
    // }
    );
    const page = yield browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });
    yield page.goto('https://www.digi24.ro/');
    const textArray = yield page.evaluate(() => {
        return Array.from(document.querySelectorAll("h2"));
        // .map(text => text.textContent!.trim()) // !! - Non-null assertion operator
        // .filter(text => text.startsWith('Borcea'));
    });
    // await page.screenshot({path: 'example.png'});
    yield browser.close();
}))();
