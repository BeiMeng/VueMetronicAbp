
import { UtilsService } from '@/abpZero/abp-vue-module/utils/utils.service';
import { AppAuthService } from '@/abpZero/app/shared/common/auth/app-auth.service';
import { AppConsts } from '@/abpZero/shared/AppConsts';
import { SubdomainTenancyNameFinder } from '@/abpZero/shared/helpers/SubdomainTenancyNameFinder';
import * as moment from 'moment';
import * as _ from 'lodash';
import { UrlHelper } from '@/abpZero/shared/helpers/UrlHelper';
import { XmlHttpRequestHelper } from '@/abpZero/shared/helpers/XmlHttpRequestHelper';
export class AppPreBootstrap {
    static run(appconfig, callback, resolve, reject) {
        AppPreBootstrap.getApplicationConfig(appconfig, () => {
            if (UrlHelper.isInstallUrl(location.href)) {
                callback();
                return;
            }
            const queryStringObj = UrlHelper.getQueryParameters();
            if (queryStringObj.redirect && queryStringObj.redirect === 'TenantRegistration') {
                if (queryStringObj.forceNewRegistration) {
                    new AppAuthService().logout();
                }
                location.href = AppConsts.appBaseUrl + '/account/select-edition';
            }
            else if (queryStringObj.impersonationToken) {
                AppPreBootstrap.impersonatedAuthenticate(queryStringObj.impersonationToken, queryStringObj.tenantId, () => { AppPreBootstrap.getUserConfiguration(callback); });
            }
            else if (queryStringObj.switchAccountToken) {
                AppPreBootstrap.linkedAccountAuthenticate(queryStringObj.switchAccountToken, queryStringObj.tenantId, () => { AppPreBootstrap.getUserConfiguration(callback); });
            }
            else {
                AppPreBootstrap.getUserConfiguration(callback);
            }
        });
    }

    static getApplicationConfig(appconfig, callback) {
        let result=appconfig;
        const subdomainTenancyNameFinder = new SubdomainTenancyNameFinder();
        const tenancyName = subdomainTenancyNameFinder.getCurrentTenancyNameOrNull(result.appBaseUrl);
      
        AppConsts.appBaseUrlFormat = result.appBaseUrl;
        AppConsts.remoteServiceBaseUrlFormat = result.remoteServiceBaseUrl;
        AppConsts.localeMappings = result.localeMappings;
      
        if (tenancyName == null) {
            AppConsts.appBaseUrl = result.appBaseUrl.replace(AppConsts.tenancyNamePlaceHolderInUrl + '.', '');
            AppConsts.remoteServiceBaseUrl = result.remoteServiceBaseUrl.replace(AppConsts.tenancyNamePlaceHolderInUrl + '.', '');
        } else {
            AppConsts.appBaseUrl = result.appBaseUrl.replace(AppConsts.tenancyNamePlaceHolderInUrl, tenancyName);
            AppConsts.remoteServiceBaseUrl = result.remoteServiceBaseUrl.replace(AppConsts.tenancyNamePlaceHolderInUrl, tenancyName);
        }
        callback();
    }
    static getCurrentClockProvider(currentProviderName) {
        if (currentProviderName === 'unspecifiedClockProvider') {
            return abp.timing.unspecifiedClockProvider;
        }
        if (currentProviderName === 'utcClockProvider') {
            return abp.timing.utcClockProvider;
        }
        return abp.timing.localClockProvider;
    }
    static impersonatedAuthenticate(impersonationToken, tenantId, callback) {
        abp.multiTenancy.setTenantIdCookie(tenantId);
        const cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
        let requestHeaders = {
            '.AspNetCore.Culture': ('c=' + cookieLangValue + '|uic=' + cookieLangValue),
            'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
        };
        XmlHttpRequestHelper.ajax('POST', AppConsts.remoteServiceBaseUrl + '/api/TokenAuth/ImpersonatedAuthenticate?impersonationToken=' + impersonationToken, requestHeaders, null, (response) => {
            let result = response.result;
            abp.auth.setToken(result.accessToken);
            AppPreBootstrap.setEncryptedTokenCookie(result.encryptedAccessToken);
            location.search = '';
            callback();
        });
    }
    static linkedAccountAuthenticate(switchAccountToken, tenantId, callback) {
        abp.multiTenancy.setTenantIdCookie(tenantId);
        const cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
        let requestHeaders = {
            '.AspNetCore.Culture': ('c=' + cookieLangValue + '|uic=' + cookieLangValue),
            'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
        };
        XmlHttpRequestHelper.ajax('POST', AppConsts.remoteServiceBaseUrl + '/api/TokenAuth/LinkedAccountAuthenticate?switchAccountToken=' + switchAccountToken, requestHeaders, null, (response) => {
            let result = response.result;
            abp.auth.setToken(result.accessToken);
            AppPreBootstrap.setEncryptedTokenCookie(result.encryptedAccessToken);
            location.search = '';
            callback();
        });
    }
    static getUserConfiguration(callback) {
        const cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
        const token = abp.auth.getToken();
        let requestHeaders = {
            '.AspNetCore.Culture': ('c=' + cookieLangValue + '|uic=' + cookieLangValue),
            'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
        };
        if (token) {
            requestHeaders['Authorization'] = 'Bearer ' + token;
        }
        return XmlHttpRequestHelper.ajax('GET', AppConsts.remoteServiceBaseUrl + '/AbpUserConfiguration/GetAll', requestHeaders, null, (response) => {
            let result = response.result;
            _.merge(abp, result);
            abp.clock.provider = this.getCurrentClockProvider(result.clock.provider);
            moment.locale(abp.localization.currentLanguage.name);
            //window.moment.locale(abp.localization.currentLanguage.name);
            if (abp.clock.provider.supportsMultipleTimezone) {
                moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
                //window.moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }
            abp.event.trigger('abp.dynamicScriptsInitialized');
            AppConsts.recaptchaSiteKey = abp.setting.get('Recaptcha.SiteKey');
            AppConsts.subscriptionExpireNootifyDayCount = parseInt(abp.setting.get('App.TenantManagement.SubscriptionExpireNotifyDayCount'));
            callback();
            //DynamicResourcesHelper.loadResources(callback);
        });
    }
    static setEncryptedTokenCookie(encryptedToken) {
        new UtilsService().setCookieValue(AppConsts.authorization.encrptedAuthTokenName, encryptedToken, new Date(new Date().getTime() + 365 * 86400000), //1 year
        abp.appPath);
    }
}