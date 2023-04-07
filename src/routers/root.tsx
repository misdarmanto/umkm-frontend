import { Outlet } from "react-router-dom";
import FooterStyle from "../components/layout/footer";
import NavbarStyle from "../components/layout/navbar";

const Root = () => {
	return (
		<div className="px-5 md:px-16">
			<NavbarStyle />
			<div className="sm:p-8 md:p-16">
				<Outlet />
			</div>
			<FooterStyle />
		</div>
	);
};

export default Root;
