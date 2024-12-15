import userOne from "../assets/user-1.jpg"
import userTow from "../assets/user-2.jpg"
import userThree from "../assets/user-3.jpg"



export type ListItem = {
    user: string;
    image: string;
    follow: "follow" | "unfollow"; // Restricting to specific string values
    cap: string;
    like: boolean;
    comment: string;
  };
  
  export const listData: ListItem[] = [
    {
      user: "Kingshuk Mondal",
      image: userOne,
      follow: "follow",
      cap: "I am a good boy",
      like: true,
      comment: "Something about me",
    },
    {
      user: "Ananya Sharma",
      image: userTow,
      follow: "unfollow",
      cap: "Exploring the world!",
      like: false,
      comment: "Loving the journey",
    },
    {
      user: "Rohan Das",
      image: userThree,
      follow: "follow",
      cap: "Living the dream",
      like: true,
      comment: "Success is the best revenge",
    },
    {
      user: "Priya Sen",
      image: userThree,
      follow: "follow",
      cap: "Coffee addict ☕",
      like: false,
      comment: "Morning vibes are the best",
    },
  ];


  export type ActiveFriends = {
    user: string,
    image: string,
    active: string,
  }

  export const activeFriends: ActiveFriends[] = [
    {
        user: "Kingshuk Mondal",
        image: userOne,
        active: "Active",
    },
    {
        user: "Sophia Johnson",
        image: userTow,
        active: "Active",
    },
    {
        user: "Michael Brown",
        image: userThree,
        active: "Inactive",
    },
    {
        user: "Emily Davis",
        image: userThree,
        active: "Active",
    },
    {
        user: "James Wilson",
        image: userOne,
        active: "Inactive",
    },
];


