import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar, Collapse } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/router";

const drawerWidth = 240;

const routes = [
	{
		title: "Home",
		icon: <HomeOutlinedIcon />,
		path: "/",
		children: [],
	},
	{
		title: "Chat",
		icon: <ChatBubbleOutlineOutlinedIcon />,
		path: "/chat",
		children: [
			{
				title: "Join Room",
				icon: <QuestionAnswerOutlinedIcon />,
				path: "/chat/joinroom",
			},
		],
	},
	{
		title: "Country",
		icon: <FlagOutlinedIcon />,
		path: "/country",
		children: [],
	},
	{
		title: "Draw",
		icon: <BrushOutlinedIcon />,
		path: "/draw",
		children: [],
	},
	{
		title: "Map",
		icon: <MapOutlinedIcon />,
		path: "/map",
		children: [],
	},
	{
		title: "Form",
		icon: <MapOutlinedIcon />,
		path: "/form",
		children: [],
	},
];

function DrawerCollapse({ route, setMobileOpen }: any) {
	const [open, setopen] = React.useState(false);
	const router = useRouter();
	const handleNavigate = (href: string) => {
		router.push(href);
        setMobileOpen(false)
	};
	return (
		<>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon onClick={() => handleNavigate(route.path)}>
						{route.icon}
					</ListItemIcon>
					<ListItemText
						onClick={() => handleNavigate(route.path)}
						primary={route.title}
					/>
					{route.children.length > 0 &&
						(open ? (
							<ExpandLess
								onClick={() => {
									setopen(false);
								}}
							/>
						) : (
							<ExpandMore
								onClick={() => {
									setopen(true);
								}}
							/>
						))}
				</ListItemButton>
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{route.children.map((r: any) => {
						return (
							<ListItemButton key={route.title} sx={{ pl: 4 }}>
								<ListItemIcon
									onClick={() => handleNavigate(r.path)}
								>
									{r.icon}
								</ListItemIcon>
								<ListItemText
									onClick={() => handleNavigate(r.path)}
									primary={r.title}
								/>
							</ListItemButton>
						);
					})}
				</List>
			</Collapse>
		</>
	);
}

export default function Layout({ children }: any) {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{routes.map((route: any) => (
					<DrawerCollapse
						key={route.title}
						route={route}
						setMobileOpen={setMobileOpen}
					/>
				))}
			</List>
		</div>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                className="bg-slate-500"
			>
				<Toolbar>
					<div className="flex w-full justify-between">
						<div className="my-auto flex justify-center items-center">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { md: "none" } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" noWrap component="div">
								SETUP LOGO
							</Typography>
						</div>
						<div>
							<Avatar className="bg-orange-400" >N</Avatar>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", md: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { md: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
