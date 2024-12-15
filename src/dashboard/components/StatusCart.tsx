import { Card } from "primereact/card"
import { ActiveFriends } from "../../assets/DummyData"

interface Props {
    status: ActiveFriends[]
}

function StatusCart({status}:Props) {
  return (
    <div className="w-full h-full flex  flex-row">
    <Card className="w-full  h-full flex flex-row gap-2 overflow-y-auto scrollbar-hide">
        {status.map((ele, index) => (
            <div
                key={index}
                className="flex flex-col items-center min-w-[150px] w-[150px] h-[200px] border rounded-md shadow-md p-2"
            >
                <img
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-400"
                    src={ele.image}
                    alt={ele.user}
                />
                <div className="mt-4 text-center font-semibold">{ele.user}</div>
                <div
                    className={`text-sm mt-2 ${
                        ele.active === "Active" ? "text-green-500" : "text-red-600"
                    }`}
                >
                    {ele.active}
                </div>
            </div>
        ))}
    </Card>
</div>
  )
}

export default StatusCart