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
