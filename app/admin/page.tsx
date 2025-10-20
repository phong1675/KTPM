
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false});
import App from "./app";

const AdminPage = () => {
    if(!isAdmin) {
        redirect("/");
    }
}


const AdminPage = () => {
    return (
        <App/>
    );
};

export default AdminPage;