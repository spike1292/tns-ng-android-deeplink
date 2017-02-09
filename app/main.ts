// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as application from "application";
import * as appSettings from 'application-settings';


application.android.on(application.AndroidApplication.activityResumedEvent, (args: any) => {
    if (args.activity.getIntent().getAction() === android.content.Intent.ACTION_VIEW) {
        try {

            const intentData = args.activity.getIntent().getData();
            let path = intentData.getPath();
            console.log('deeplink: ' + path);

            // check deeplink path
            if (path && path !== '/' && path !== '') {
                // remove prefix slash and save to settings
                path = path.slice(1);
                appSettings.setString('deeplink', path);
            }
        } catch (e) {
            console.error(e);
        }
    }
});


platformNativeScriptDynamic().bootstrapModule(AppModule);
