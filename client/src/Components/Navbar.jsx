import React, { useState } from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from "../styles/Navbar.style";
// import LogoImg from "../assets/logo.png";

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> Home</NavbarLink>
                        <NavbarLink to="/search"> Search</NavbarLink>
                        <NavbarLink to="/chart"> Charts</NavbarLink>
                        <NavbarLink to="/about"> About Us</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src="https://imgs.search.brave.com/wefKYWSnounxSWUnxBVf_hwPIVd-6LkXez9roMkK3ak/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM5/OS84MDUvb3JpZ2lu/YWwvbW9kZXJuLWNv/bXBhbnktbG9nby1k/ZXNpZ24tdmVjdG9y/LmpwZw"></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
                    <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default Navbar;