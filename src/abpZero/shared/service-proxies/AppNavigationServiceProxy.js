let AppNavigationServiceProxy = class AppNavigationServiceProxy {
    constructor() {
    }
    getMenu() {
        return httpClient.get("/api/services/app/Menu/GetMenuTree")        
    }
};
export { AppNavigationServiceProxy };