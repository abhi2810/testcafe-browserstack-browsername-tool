# Testcafe Browserstack BrowserName Tool

Tool to filter through BrowserStack browser names for TestCafe

Usage:

```
 -b  Get list of Browsers
     options:  "OS Name" "Browser Name"
               "Device Name"
```

Examples:

$`node index.js -b "windows 7" chrome`

```
browserstack:chrome@14.0:Windows 7
browserstack:chrome@15.0:Windows 7
browserstack:chrome@16.0:Windows 7
browserstack:chrome@17.0:Windows 7
browserstack:chrome@18.0:Windows 7
...
```

$`node index.js -b "S22"`

```
browserstack:Samsung Galaxy S22 Ultra@12.0
browserstack:Samsung Galaxy S22 Ultra@12.0
browserstack:Samsung Galaxy S22 Plus@12.0
browserstack:Samsung Galaxy S22 Plus@12.0
browserstack:Samsung Galaxy S22@12.0
browserstack:Samsung Galaxy S22@12.0
```

$`node index.js -b "Pixel 6"`

```
browserstack:Google Pixel 6 Pro@13.0
browserstack:Google Pixel 6 Pro@12.0
browserstack:Google Pixel 6@12.0
```
