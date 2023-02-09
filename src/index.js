var fs = require("fs");

fs.readdirSync(__dirname + "/Singletons").forEach(file => {
	var module = require(`./Singletons/${file}`);
	try {
		fs.writeFileSync(
			`./data/${file.split(".")[0]}.json`,
			JSON.stringify(
				module[`${file.split(".")[0]}Singleton`].getInstance()[
					`${file.split(".")[0]}s`.charAt(0).toLowerCase() +
						`${file.split(".")[0]}s`.slice(1)
				],
				null,
				4
			)
		);
	} catch (error) {
		fs.writeFileSync(
			`../data/${file.split(".")[0]}.json`,
			JSON.stringify(
				module[`${file.split(".")[0]}Singleton`].getInstance()[
					`${file.split(".")[0]}s`.charAt(0).toLowerCase() +
						`${file.split(".")[0]}s`.slice(1)
				],
				null,
				4
			)
		);
	}
});
