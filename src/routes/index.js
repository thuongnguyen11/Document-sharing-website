// Pages
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Upload from "../pages/Upload/Upload"
import Subjects from "../pages/Subjects/Subjects"
import Documents from "../pages/Documents/Documents"
import Approval from "../pages/Approval/Approval"
import UserProfile from "../pages/UserProfile/UserProfile"
import Notification from "../pages/Notification/Notification"


// Public Routes
const publicRoutes = [
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
]
// Private Routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/approval', component: Approval },
    { path: '/user-profile', component: UserProfile },
    { path: '/notification', component: Notification },


    { path: '/upload', component: Upload },
    { path: `departments/:departmentId/subjects/:subjectId`, component: Documents },
    { path: `departments/:departmentId`, component: Subjects },

    // { path:  `/search` , component: Subjects}
]


export { publicRoutes, privateRoutes }
