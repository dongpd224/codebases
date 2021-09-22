import * as React from "react";
import { PureComponent } from "react";
import autobind from "autobind-decorator";
import { Injector } from "../../../scripts/common/ioc/Injector";
import SWReactRootComponent from "../../decorators/SWReactRootComponent";
import * as _ from "lodash";
import { connect } from "react-redux";
import {
    SideNavList,
    SideNavListScrollSpace,
} from "../../components/React/SideNavComponents/SideNavList";
import {
    hasAppTooltip,
    isBeta,
    isLocked,
    isNew,
    navItemAppTooltip,
    trackSideNavItemClick,
} from "../../components/React/SideNavComponents/SideNav.utils";
import { toggleSideNav } from "../../actions/layoutActions";
import { SideNav } from "../../components/React/SideNavComponents/SideNav";
import {
    INavItem,
    ISideNavProps,
    ISideNavState,
} from "../../components/React/SideNavComponents/SideNav.types";
import { i18nFilter } from "../../filters/ngFilters";
import { navObj } from "./config/appAnalysisNavObj";
import { chosenItems } from "common/services/chosenItems";

export class AppAnalysisSideNav extends PureComponent<ISideNavProps, ISideNavState> {
    public static getDerivedStateFromProps(props, state) {
        if (props.currentPage !== state.activeItemName) {
            return {
                activeItemName: props.currentPage,
            };
        }

        return null;
    }

    private services;
    private stateChangeSuccessHandler;
    private isUnmounting = false;

    constructor(props, context) {
        super(props, context);

        this.services = {
            swNavigator: Injector.get<any>("swNavigator"),
            chosenSites: Injector.get<any>("chosenSites"),
            rootScope: Injector.get<any>("$rootScope"),
        };
        this.state = {
            activeItemName: this.props.currentPage,
            items: this.getSideNavList(
                this.props.currentPage,
                this.services.swNavigator.getParams(),
            ),
        };
    }

    public componentDidMount() {
        this.stateChangeSuccessHandler = this.services.rootScope.$on(
            "navChangeComplete",
            this.onStateChangeSuccess,
        );
    }

    public componentWillUnmount() {
        this.isUnmounting = true;
        this.stateChangeSuccessHandler();
    }

    public render() {
        return (
            <SideNav>
                <SideNavList persistenceKey={"appanalysis"} navItems={this.state.items}>
                    <SideNavListScrollSpace />
                </SideNavList>
            </SideNav>
        );
    }

    @autobind
    private onStateChangeSuccess(evt, toState, toParams) {
        if (this.isUnmounting) {
            return;
        }

        this.setState({
            items: this.getSideNavList(toState.name, toParams),
        });
    }

    @autobind
    private getSideNavList(activeItemName, params) {
        return navObj().navList.map((listItem: INavItem) => {
            if (_.isUndefined(listItem.subItems)) {
                return { ...this.interpretNavItem(listItem, activeItemName, params) };
            } else {
                return {
                    ...listItem,
                    title: i18nFilter()(listItem.title),
                    subItems: listItem.subItems.map((subItem) => {
                        return {
                            ...this.interpretNavItem(subItem, activeItemName, params, listItem),
                        };
                    }),
                };
            }
        });
    }

    @autobind
    private interpretNavItem(navListItem, activeItemName, params, parent?) {
        const result = {
            title: i18nFilter()(navListItem.title),
            name: navListItem.name,
            isDisabled: navListItem.disabled,
            isBeta: navListItem.isBetaByChosenItem
                ? navListItem.isBetaByChosenItem(chosenItems)
                : isBeta(navListItem),
            isNew: isNew(navListItem),
            isLocked: isLocked(navListItem),
            isDashboard: false,
            isActive: activeItemName === navListItem.state,
            url: this.services.swNavigator.navLink(navListItem),
            onClick: () => this.onNavItemClick(navListItem, parent),
        };

        return { ...result, ...(hasAppTooltip(navListItem) ? navItemAppTooltip() : {}) };
    }

    @autobind
    private onNavItemClick(navListItem: INavItem, parent) {
        trackSideNavItemClick(navListItem.title, parent);
        if (window.outerWidth <= 1200) {
            this.props.toggleSideNav();
        }
        this.setState({
            activeItemName: navListItem.state,
        });
    }
}

function mapStateToProps(store) {
    const currentPage = store.routing.currentPage;
    return {
        currentPage,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSideNav: () => {
            dispatch(toggleSideNav());
        },
    };
}

SWReactRootComponent(
    connect(mapStateToProps, mapDispatchToProps)(AppAnalysisSideNav),
    "AppAnalysisSideNav",
);

export default AppAnalysisSideNav;