import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import  Dashboard  from "./pages/Dashboard";
import LoanListPage from "./pages/LoanList/loanListPage"


export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                <ContentRoute path="/dashboard" component={LoanListPage}/>
                <ContentRoute path="/loanList" component={Dashboard}/>
                <Redirect to="error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
