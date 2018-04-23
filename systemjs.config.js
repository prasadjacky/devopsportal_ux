(function(global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'app',
            '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-charts': 'npm:ng2-charts',
            'clarity-angular': 'npm:clarity-angular',
            'ng2-pagination': 'npm:ng2-pagination',
            'ng2-scroll-to': 'npm:ng2-scroll-to',
            "chart.js": "npm:chart.js/dist/chart.js"
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'ng2-charts': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-pagination': { //add configuration to load
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng2-scroll-to': { //add configuration to load
        main: './index.js',
        defaultExtension: 'js'
      }
            
        }
    });
})(this);


