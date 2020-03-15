import {articleTitle, footer, headerMessage, dataFrom} from "../support/app.po";

describe("world-bank", () => {
  beforeEach(() => cy.visit("/"));

  it("should display differents messages", () => {
    headerMessage().contains("World Bank API");
    footer().contains("Made by Iván de Paz Delgado");
    articleTitle().contains("Continental Regions");
    dataFrom().contains("Data from: 'http://api.worldbank.org/v2/region/?format=json'");
  });
});
