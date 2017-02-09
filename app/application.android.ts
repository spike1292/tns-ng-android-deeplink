import * as application from 'application';

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
declare const com: any;

@JavaProxy('com.tns.CustomApplication')
class CustomApplication extends android.app.Application {
    public onCreate(): void {
        super.onCreate();
        console.log('custom application');
    }
}
