package com.nativestarterkit;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
=======
import com.remobile.splashscreen.RCTSplashScreenPackage;
import com.microsoft.codepush.react.CodePush;
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
import com.oblador.vectoricons.VectorIconsPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new VectorIconsPackage(),
            new CodePush(null, this, BuildConfig.DEBUG)
=======
            new RCTSplashScreenPackage(),
            new CodePush(null, MainApplication.this, BuildConfig.DEBUG),
            new VectorIconsPackage()
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
