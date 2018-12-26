import appconfig from './appconfig'

import { AppAuthService } from '@/abpZero/app/shared/common/auth/app-auth.service';


import { UrlHelper } from '@/abpZero/shared/helpers/UrlHelper';

import { AppPreBootstrap } from './AppPreBootstrap';
(function () {

    abp.ui.setBusy();

    AppPreBootstrap.run(appconfig, () => {
        handleLogoutRequest(new AppAuthService());        
        abp.ui.clearBusy();
    });

})();


function handleLogoutRequest(authService) {
    let currentUrl = UrlHelper.initialUrl;
    let returnUrl = UrlHelper.getReturnUrl();
    if (currentUrl.indexOf(('account/logout')) >= 0 && returnUrl) {
        authService.logout(true, returnUrl);
    }
}

