module.exports=function (config){
  config.set({
    basepath:'',
    frameworks:['jasmine','@angular-devkit/buid-angular'],
    plugins:[
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
     ],
     client: {
      clearContext: false //leave jasmine spec Runner output visible in browser
     },
     coverageIstanbulReporter:{
      dir: require('path').join(_dirname,'./coverage'),
      reports:['html','lcovonly','text-summary'],
      fixWebpackSourcePaths:true
     },
     reporters:['progress','kjhtml'],
     port:9876,
     colors:true,
     logLevel:config.LOG_INFO,
     autowatch: true,
     customLaunchers:{
      ChromeHeadless:{
        base:'Chrome',
          flags:[
            '--headless',
            '--disabled-gpu',
            '--no-sandbox',
            '--remote-debugging'
          ]
        }
      },
      browsers:['PhantomJS'],
      singleRun:true,
      restartOnFileChange: false
    });
  };
}
