## react-native-ts-mobx

Blank app base on react-native, typescript, mobx.

### Build with

- [x] react 16.6.3
- [x] react-native 0.57.7
- [x] typescript 3.2.1
- [x] mobx 4.3.1
- [ ] react-navigation 2.18.2
- [ ] ts-jest 23.6.0

### ScreenShots

![](https://ws3.sinaimg.cn/bmiddle/006tNbRwly1fxto38lwc2j30u01szdid.jpg)
![](https://ws3.sinaimg.cn/bmiddle/006tNbRwly1fxto3wbre5j30my18mwgp.jpg)

### Try it yourself

1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/donghuazh/react-native-ts-mobx.git && cd $_

# Install dependencies
yarn install
```

2. Run it on iOS or Android

```bash
# Run on iOS
yarn ios

# Run on Android
yarn android
```

### Notes

1. RN在Xcode 10上无法编译问题，请谨慎升级；

在Xcode10中使用老版本的编译系统，具体选项在File -> Project/Workspace settings，将Build System改为Legacy Build System，当然目前最好的方案仍然是使用Xcode9.4编译。
