
interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (<div>
        <div className="text-3xl text-white p-6">
            hello world
        </div>
        
    </div> );
}
 
export default Layout;