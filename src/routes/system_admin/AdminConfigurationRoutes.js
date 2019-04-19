import TermIterationsConfig from "../../system_modules/system_admin/TermIterationsConfig.jsx";
import ActualTermsRegistration from "../../system_modules/system_admin/ActualTermsRegistration.jsx";
import WeekIterationsConfig from "../../system_modules/system_admin/WeekIterationsConfig.jsx";
import ActualWeeksRegistration from "../../system_modules/system_admin/ActualWeeksRegistration.jsx";

const routes = [
{
    collapse: true,
    name: "Term Configurations",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
	    {
        path: "/term_iterations_config",
        name: "Term Iterations",
        mini: "TI",
        component: TermIterationsConfig,
        layout: "/admin"
      },
	  {
        path: "/actual_term_registration",
        name: "Term Registration",
        mini: "TR",
        component: ActualTermsRegistration,
        layout: "/admin"
      }
	  ,
	  {
        path: "/week_iterations_config",
        name: "Week Iterations",
        mini: "WI",
        component: WeekIterationsConfig,
        layout: "/admin"
      }
	  ,
	  {
        path: "/actual_weeks_registration",
        name: "Actual Weeks Registration",
        mini: "AWR",
        component: ActualWeeksRegistration,
        layout: "/admin"
      }
    ]
  }
];

export default routes;
