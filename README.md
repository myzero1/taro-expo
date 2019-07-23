# taro-expo

```
install
    npm install -g @tarojs/cli@1.2.26
    npm install -g expo-cli
    install Exponent-2.11.4.apk

usage
	copy the taro-expo to project root folder

	adjust package.json of project
        add "dev:rn:expo":"concurrently \"sleep 6 && npm run build:rn -- --watch > .rn_temp/bin/tmp\" \"node taro-expo/taro-expo && cd .rn_temp && yarn && expo start\"" to scripts section.

        add "fs-extra": "*" and "concurrently": "*" to dependencies section

	yarn

	run the commond "yarn dev:rn:expo"

```


### erros

```
1、在编译RN时PostCSS和stylelint版本冲突

Unknown error from PostCSS plugin. Your current PostCSS version is 6.0.23, but stylelint uses 7.0.14. Perhaps this is the              source of the error below.

Fixed Bug：方案安装了3个库 stylelint, stylelint-config-taro-rn, stylelint-taro-rn

    "stylelint": "9.3.0",
    "stylelint-config-taro-rn": "1.3.10",
    "stylelint-taro-rn": "1.3.10"

```
