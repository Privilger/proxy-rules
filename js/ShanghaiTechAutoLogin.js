// event network-changed script-path=ShanghaiTechAutoLogin.js
enableNotification = true
url = {
	url: "https://controller.shanghaitech.edu.cn:8445/PortalServer/Webauth/webAuthAction!login.action",
	body: {userName: "yourName",
		password: "yourPassWd",
		hasValidateCode: false}
}

if ($network["wifi"]["ssid"] == "ShanghaiTech") {
	$httpClient.post(url, (error, response, body) => {
		if (enableNotification) {
			if (response["status"] == 200) {
				$notification.post("ShanghaiTech connect success",
					"ip: " + $network["v4"]["primaryAddress"],
					"User: " + url["body"]["userName"])
			} else {
				$notification.post("ShanghaiTech", "connect", "fail")
			}
		}
	})
}

$done()
