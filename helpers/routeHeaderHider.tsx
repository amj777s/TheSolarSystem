import { ParamListBase, RouteProp, getFocusedRouteNameFromRoute } from "@react-navigation/native"

const planetRoutes = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus'];

/**
 * Used to determine if the PLANETS tab header should be displayed
 * @param route - current route of page
 * @returns a boolean value indicating whether the route is included in planetRoutes array
 */
export const planetHeaderHider = (route: RouteProp<ParamListBase, string>)=> {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "PLANETS";
    
    if(planetRoutes.includes(routeName)){
        return false
    }

    return true

};