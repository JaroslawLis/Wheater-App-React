import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";
import FormAddCity from "./components/formAddCity";
import Settings from "./components/settings";
import SettingsPage from "./components/settingsPage";
import MainTable from "./components/mainTable";
import ShowCity from "./components/showCity";

// it("renders without crashing", () => {
//   shallow(<App />);
// });
describe("<App />", () => {
  let appWrapper;
  let appInstance;
  const app = (disableLifecycleMethods = false) =>
    shallow(<App />, {
      disableLifecycleMethods
    });

  beforeEach(() => {
    appWrapper = app();
    appInstance = appWrapper.instance();
  });

  afterEach(() => {
    appWrapper = undefined;
    appInstance = undefined;
  });

  it("renders without crashing", () => {
    expect(app().exists()).toBe(true);
  });

  it("renders <Setting/>", () => {
    // Metoda find zwraca listę odnalezionych komponentów.
    // Najłatwiej sprawdzić czy komponent został wyrenderowany
    // poprzez prostą asercję jej długości.
    expect(appWrapper.find(Settings).length).toBe(1);
  });

  describe("the rendered <Settings />", () => {
    const settings = () => appWrapper.find(Settings);

    it('receives handleSettingsButton as a "click" prop', () => {
      expect(settings().prop("click")).toEqual(
        appInstance.handleSettingsButton
      );
    });
  });
});
