import { Platform } from "react-native";
import { observable } from "mobx";

class AppStore {
  @observable
  public welcome: string = 'Welcome to React Native!';

  @observable
  public start: string = 'To get started, edit App.tsx';

  @observable
  public instructions: string = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
  })
}

export default new AppStore();
