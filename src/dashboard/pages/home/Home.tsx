import { Card } from "primereact/card";
import { DataScroller } from "primereact/datascroller";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { OrderList } from "primereact/orderlist";
import { FileUpload } from "primereact/fileupload";
import { RiUserFollowLine } from "react-icons/ri";
import { GrLike, GrDislike } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { supabase } from "../../../config/superBaseClient";
import { v4 as uuidv4 } from "uuid"; 
import {
  activeFriends,
  listData,
  ListItem,
  ActiveFriends,
} from "../../../assets/DummyData"; 
import { InputText } from "primereact/inputtext";

import { Toast } from "primereact/toast";


function Home() {
  const id = uuidv4();
  const [value, setValue] = useState<string>("");
 
  const [selectedFile, setSelectedFile] = useState(null);
   const toast = useRef<Toast>(null);

  // Handle file selection
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
 
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.current?.show({
        severity: "error",
        summary: "No file selected",
        detail: "Please select a file to upload!",
        life: 3000,
      });
      return;
    }
  
    
  
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filePath = `public/${timestamp}`;
  
    try {

      const { data, error } =  await supabase.storage.from('post').upload(id,filePath, selectedFile)
      if (error) {
        console.error("Supabase Upload Error:", error.message);
        toast.current?.show({
          severity: "error",
          summary: "Upload Failed",
          detail: error.message || "Unexpected error occurred during upload.",
          life: 3000,
        });
        return;
      }
  
      toast.current?.show({
        severity: "success",
        summary: "Upload Successful",
        detail: "File has been uploaded successfully!",
        life: 3000,
      });
      console.log("Uploaded file data:", data);
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Unexpected Error",
        detail: "An error occurred while uploading the file.",
        life: 3000,
      });
    }
  };
  
  const itemTemplateList = (data: ListItem) => {
    return (
      <Card className="w-full pl-28">
        <div className="w-full h-full">
          <div>
            <div className="flex flex-row gap-4 items-center">
              <Avatar
                image={data.image}
                size="xlarge"
                shape="circle"
                className="border-4 border-blue-400"
              />
              <div className="text-2xl font-bold">{data.user}</div>
              <Button rounded className="flex flex-row gap-1 items-center">
                <RiUserFollowLine />
                <span>{data.follow}</span>
              </Button>
            </div>
            <div className="mb-6 mt-12 text-lg text-gray-400">{data.cap}</div>
          </div>
          <div className="flex justify-center items-center h-[300px] overflow-hidden">
            <img
              src={data.image}
              alt="Post"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="m-4 flex flex-row gap-20 items-center">
            {!data.like ? (
              <GrDislike className="" size={30} />
            ) : (
              <GrLike className="" size={30} />
            )}
            <div>{data.comment && <FaRegCommentAlt size={30} />}</div>
          </div>
        </div>
      </Card>
    );
  };


  

 

  const itemTemplate = (item: ActiveFriends) => {
    return (
      <div className="flex flex-wrap p-2 align-items-center gap-3 flex-row items-center">
        <Avatar
          image={item.image}
          size="xlarge"
          shape="circle"
          className="border-4 border-blue-400"
        />
        <div className="flex-1 flex flex-column gap-2 xl:mr-8">
          <span className="font-bold">{item.user}</span>
        </div>
        <span className="font-bold text-900">{item.active}</span>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-row">
      {/* Left Section with Scrollable DataScroller */}
      <div className="w-[50%] border-r-4 border-r-blue-400 h-screen">
        <DataScroller
          value={listData}
          itemTemplate={itemTemplateList}
          rows={5}
          inline
          header="Scroll Down to see new posts"
          className="custom-scroller h-full overflow-y-scroll"
        />
      </div>

      {/* Right Section */}
      <div className="h-screen w-[50%] flex flex-col">
        <div className="h-[40%] w-full flex flex-row justify-center items-center">
          <Card className="w-[500px] h-[350px] border-2 border-blue-400 rounded-lg">
            <div className="card border-2 flex-col flex justify-center items-center border-blue-400 rounded-lg h-[150px] flex justify-content-center justify-center mb-4">
           <div >
           <h2 className=" text-lg text-blue-400">Add Image</h2>
           <input type="file" onChange={handleFileChange} />
           </div>
            
            </div>
            <div className="card flex justify-content-center flex-row gap-2 items-center">
              <label className=" text-lg">Deception</label>
              <InputText value={value} onChange={(e)=> setValue(e.target.value)}/>
            </div>
            <div className="mt-4 flex flex-row justify-end items-center">
              <Button onClick={handleUpload} label="Add Post"/>
            </div>
          </Card>
        </div>
        <div className="h-[60%] w-full flex flex-row justify-center items-center border-t-blue-400 border-t-4">
          <Card>
            <OrderList
              dataKey="id"
              value={activeFriends}
              itemTemplate={itemTemplate}
              header="Active Friends"
            />
          </Card>
        </div>
      </div>
      <Toast position="bottom-center" ref={toast} />
    </div>
  );
}

export default Home;
