// Pages
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Upload from "../pages/Upload/Upload"


// Public Routes
const publicRoutes = []
// Private Routes
const privateRoutes = [
    { path: '/home', component: Home},
    { path: '/sign-in', component: SignIn},
    { path: '/sign-up', component: SignUp},
    { path: '/upload', component: Upload},
]


export { publicRoutes, privateRoutes }
