import Home from './Home'
import About from './About'
import Welcome from './Welcome'

const routes=[
    {
        path:"/", element:<Home/>
    },
    {
        path:"/about", element:<About/>
    },
    {
        path:"/welcome", element:<Welcome/>
    }
]
export default routes;