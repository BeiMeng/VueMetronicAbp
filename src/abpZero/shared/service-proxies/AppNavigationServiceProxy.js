let AppNavigationServiceProxy = class AppNavigationServiceProxy {
    constructor() {
    }
    getMenu() {
        return httpClient.get("/auth/menus")        
    }
};
export { AppNavigationServiceProxy };