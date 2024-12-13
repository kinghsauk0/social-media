import { Card } from "primereact/card";
import { DataScroller } from "primereact/datascroller";

type ListItem = {
  user: string;
  image: string;
  follow: "follow" | "unfollow"; // Restricting to specific string values
  cap: string;
  like: boolean;
  comment: string;
};

const listData: ListItem[] = [
  {
    user: "Kingshuk Mondal",
    image: "pi pi-user",
    follow: "follow",
    cap: "I am a good boy",
    like: true,
    comment: "Something about me",
  },
  {
    user: "Ananya Sharma",
    image: "pi pi-user",
    follow: "unfollow",
    cap: "Exploring the world!",
    like: false,
    comment: "Loving the journey",
  },
  {
    user: "Rohan Das",
    image: "pi pi-user",
    follow: "follow",
    cap: "Living the dream",
    like: true,
    comment: "Success is the best revenge",
  },
  {
    user: "Priya Sen",
    image: "pi pi-user",
    follow: "follow",
    cap: "Coffee addict ☕",
    like: false,
    comment: "Morning vibes are the best",
  },
  {
    user: "Arjun Singh",
    image: "pi pi-user",
    follow: "unfollow",
    cap: "Coding is my therapy",
    like: true,
    comment: "100 days of code!",
  },
  {
    user: "Ishita Roy",
    image: "pi pi-user",
    follow: "follow",
    cap: "Book lover 📚",
    like: false,
    comment: "Currently reading 'Atomic Habits'",
  },
  {
    user: "Rahul Mehta",
    image: "pi pi-user",
    follow: "unfollow",
    cap: "Fitness is life",
    like: true,
    comment: "Back at the gym!",
  },
  {
    user: "Aditi Kapoor",
    image: "pi pi-user",
    follow: "follow",
    cap: "Travel enthusiast ✈️",
    like: false,
    comment: "Wanderlust forever",
  },
  {
    user: "Vikram Patel",
    image: "pi pi-user",
    follow: "unfollow",
    cap: "Nature's child 🌳",
    like: true,
    comment: "Enjoying a serene sunset",
  },
  {
    user: "Sanya Verma",
    image: "pi pi-user",
    follow: "follow",
    cap: "Foodie 🍕",
    like: false,
    comment: "Best pizza in town!",
  },
];

const itemTemplate = (data: ListItem) => {
  return (
    <Card className="w-full h-[500px] ">
      <div>
        <div>
          <div>{data.user}</div>
          <div>{data.comment}</div>
        </div>
      </div>
    </Card>
  );
};

function Home() {
  return (
    <div className="w-full flex flex-row ">
      <div className="w-[50%]  border-r-4 border-r-blue-400 ">
        <DataScroller
          value={listData}
          itemTemplate={itemTemplate}
          rows={5}
          inline
          scrollHeight="100vh"
          header="Scroll Down to see new posts"
          className="custom-scroller"
        />
      </div>
      <div className="h-screen w-[50%]  flex flex-col ">
        <div className="h-[30%] w-full "></div>
        <div className=" h-[70%] w-full border-t-blue-400 border-t-4"></div>
      </div>
    </div>
  );
}

export default Home;
