
import Icons from "@/Components/Icons";
const  NavAnchor = () => {
    const links = [
        {
           name: 'state',
           icon: 'sign_up',
           route: 'admin.state.index',
           title: 'State'
        }
     ]

     return (
        <>
        {links.map(link =>  ( 
            <li key={link?.name}>
                 <a
                 
                     href={route(link.route)}
                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                 >
                     <Icons icon={link.icon} />
                     <span class="ms-3">{link.title}</span>
                 </a>
             </li>)
             )}
             </>
     )
}

export default NavAnchor;