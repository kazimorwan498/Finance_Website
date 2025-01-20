import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@heroui/react";

import Logo from "./Logo";

export default function NavbarArea() {
	return (
		<>
			<Navbar
				shouldHideOnScroll
				isBlurred={false}
				className="bg-transparent w-full"
				maxWidth="2xl"
			>
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
				<NavbarContent justify="end">
					<NavbarItem>
						<Button
							as={Link}
							color="primary"
							variant="bordered"
							radius="full"
							className="font-bold text-sm sm:text-base"
						>
							Contact
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	);
}
