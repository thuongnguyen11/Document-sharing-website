// Pages
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Upload from "../pages/Upload/Upload"
import Subjects from "../pages/Subjects/Subjects"
import Documents from "../pages/Documents/Documents"


// Public Routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/home', component: Home},
    { path: '/sign-in', component: SignIn},
    { path: '/sign-up', component: SignUp},
    { path:  `departments/:departmentId` , component: Subjects},

]
// Private Routes
const privateRoutes = [
    { path: '/upload', component: Upload},
    { path:  `departments/:departmentId/subjects/:subjectId` , component: Documents}

    // { path:  `/search` , component: Subjects}
]


export { publicRoutes, privateRoutes }
