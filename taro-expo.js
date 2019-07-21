const fs = require('fs-extra')
const path = require('path')
const appPath = process.cwd()
const flagDir = path.join(appPath, '/.rn_temp/bin')
const flagPath = path.join(appPath, '/.rn_temp/bin/falg')
const tmpPath = path.join(appPath, '/.rn_temp/bin/tmp')
const tmpFlag = '初始化完毕，监听文件修改中'
const flagFlag = 'first build is finished.'

fs.mkdir(flagDir, {recursive: true}, (err) => {
    if (err) throw err;
});

const mySetTimeout = setTimeout(() => {
	fs.writeFileSync(flagPath, '')
	fs.writeFileSync(tmpPath, '')
	clearTimeout(mySetTimeout)
	
}, 3000)

const interval = setInterval(() => {
	let flag = fs.readFileSync(flagPath, 'utf-8')

	console.log('listening...')

	fs.exists(tmpPath, function(exists){
	  	if(exists){
			let tmp = fs.readFileSync(tmpPath, 'utf-8')

			if (tmp.indexOf(tmpFlag) != -1 && flag=='') {
				fs.writeFileSync(flagPath, flagFlag)
				clearInterval(interval)

				fs.copySync(path.join(appPath, '/taro-expo/expo-crna-entry.js'), path.join(appPath, '/.rn_temp/bin/expo-crna-entry.js'))
				fs.copySync(path.join(appPath, '/taro-expo/package.json'), path.join(appPath, '/.rn_temp/package.json'))
				fs.copySync(path.join(appPath, '/taro-expo/app.json'), path.join(appPath, '/.rn_temp/app.json'))
			}
	  	}
	})

}, 3000)