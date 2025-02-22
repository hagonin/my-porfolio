import Typewriter from "typewriter-effect";
import Drawer from "react-modern-drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect } from "react";
import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero/avatar-2.png";

const HeaderDrawer = ({ isOpen, toggleDrawer }) => {
  const isMobile = useMediaQuery("(max-width: 1199px)");

  const router = useRouter();

  let pathSegments = "";
  let firstSegment = "";

  if (router?.pathname.includes("[slug]")) {
    pathSegments = router?.pathname.split("/");
    firstSegment = `/${pathSegments[1]}`;
  }

  let filteredMenus = [];

  if (router?.pathname.includes("[slug]")) {
    filteredMenus = siteSettings?.headerMenus?.filter(
      (item) => !item?.notVisibleRoutes?.includes(firstSegment)
    );
  } else {
    filteredMenus = siteSettings?.headerMenus?.filter(
      (item) => !item?.notVisibleRoutes?.includes(router?.pathname)
    );
  }

  const isHomepage =
    router?.asPath === "/" || router?.asPath.startsWith("/#") ? true : false;

  useEffect(() => {
    if (!isMobile && isOpen) {
      toggleDrawer();
    }
  }, [isMobile]);

  return (
		<div>
			<Drawer
				inst
				customIdSuffix
				open={isOpen}
				onClose={toggleDrawer}
				direction="left"
				className="mobile-drawer"
			>
				<div className="mobile-menu">
					<div className="menu-header">
						<div className="hero-img">
							<Image
								src={heroImage?.src}
								className="img-fluid w-100 rounded-5"
								width={75}
								height={75}
								alt="Ha GONIN - Full-stack Développeuse"
							/>
						</div>
						<h3>Je suis Ha</h3>
						<div className="ah-headline clip">
							<div className="ah-words-wrapper">
								<Typewriter
									options={{
										strings: [
											'Full-stack Développeuse',
											'Web Développement et Mobile',
										],
										autoStart: true,
										loop: true,
										delay: 20,
									}}
								/>
							</div>
						</div>
						<div onClick={toggleDrawer} className="close-menu"></div>
					</div>
					<div className="menu nav" data-simplebar>
						<ul className="list-unstyled" id="nav-drawer">
							{filteredMenus?.map((menu) => (
								<li key={menu?.id}>
									<Link
										onClick={toggleDrawer}
										href={isHomepage ? menu?.selector : `${menu?.url}`}
										className="nav-link active"
										data-section={menu.selector}
									>
										{menu?.Icon}
										{menu?.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default HeaderDrawer;
