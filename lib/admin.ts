import { auth } from "@clerk/nextjs"

const adminIds = [
    "user_34KCbx5ZKkyiDjC0l28wrB1vkm5",
];

export const isAdmin = () => {
    const { userId } = auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};