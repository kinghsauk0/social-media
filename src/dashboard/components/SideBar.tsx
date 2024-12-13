
import { sideBarItems } from './SidebarItems'
import { Button } from 'primereact/button'


function SideBar() {
  return (
    <div className='row-span-2 col-span-1  p-4 border-r-4 rounded-b-lg  border-blue-400 '>
         <h1 className=" text-4xl  font-bold text-blue-400 mt-16 mb-28">Social Media</h1>
        <div className='m-4  flex flex-col gap-4 '>
            {
                sideBarItems.map((ele,index) => (
                    <Button  key={index} outlined severity="info" icon={ele.icon} text raised  label={ele.sideBarName}/>
                ))
            }
        </div>
    </div>
  )
}

export default SideBar