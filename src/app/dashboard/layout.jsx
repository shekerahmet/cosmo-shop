
import DashboardHeader from "@/components/dashboard/header";
import React from "react";
import { Container } from "react-bootstrap";

export const metadata = {
	title: 'Login',
	description: 'You can get luxury electronic devices',
  }

const DashboarLayout = ({ children }) => {
	return (
		<>
			<DashboardHeader/>
            <Container className="flex-grow-1">
			{children}
            </Container>
		</>
	);
};

export default DashboarLayout;