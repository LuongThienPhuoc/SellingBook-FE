import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link'
import style from '../styles/Layout.module.css';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { userLogout } from '../redux/actions/userAction';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const pages = [
    {
        name: 'Trang chủ',
        url: '/',
        active: 'home',
    },
    {
        name: 'Sách',
        url: 'store',
        active: 'store'
    }
]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const NavBar = (props) => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state: RootStateOrAny) => state.userReducer.isLogin)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchoElMess, setAnchorElMess] = React.useState<null | HTMLElement>(null);
    const [anchoElCart, setAnchoElCart] = React.useState<null | HTMLElement>(null);
    console.log("Nav" + props.active)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenMessMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElMess(event.currentTarget);
    }
    const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchoElCart(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseMessMenu = () => {
        setAnchorElMess(null);
    };
    const handleCloseCartMenu = () => {
        setAnchoElCart(null);
    }

    const handleClickLogout = () => {
        setAnchorElUser(null);
        dispatch(userLogout())
    }


    const renderStatusLogin = () => {
        if (isLogin) {
            return (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open cart">
                        <IconButton  onClick={handleOpenCartMenu} size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Open message">
                        <IconButton
                            size="large"
                            onClick={handleOpenMessMenu}
                            aria-label="show 17 new notifications"
                            color="inherit"
                            style={{ marginRight: '10px' }}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="https://instagram.fsgn5-8.fna.fbcdn.net/v/t51.2885-15/276143481_2785923471713221_1336536822646766565_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fsgn5-8.fna.fbcdn.net&_nc_cat=1&_nc_ohc=swKNiEdqAhUAX_QoxOe&tn=Oj8jyi_U2Cty6KTJ&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc5NzA4Mzc1NTI0MjQyNTE0NQ%3D%3D.2-ccb7-4&oh=00_AT_vIMFeCxyoyJLpGPjHHiSJoDtpjAiU3dxlWLuvLa7uVw&oe=62499064&_nc_sid=30a2ef" />
                        </IconButton>
                    </Tooltip>
                    {/* Cart */}
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchoElCart}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchoElCart)}
                        onClose={handleCloseCartMenu}
                    >
                        <div className='p-4' style={{ width: '300px' }}  onClick={handleCloseCartMenu}>
                            <div className='flex justify-center w-full' >
                                <span>2 sản phẩm</span>
                                <Link href={'/cart'} passHref>
                                    <a className='no-underline'>Xem tất cả</a>
                                </Link>
                            </div>
                            <ul style={{ maxHeight: '400px' }}>
                                <li style={{ height: '100px' }}>CArt</li>
                                <li style={{ height: '100px' }}>CArt</li>
                                <li style={{ height: '100px' }}>CArt</li>
                                <li style={{ height: '100px' }}>CArt</li>
                                <li style={{ height: '100px' }}>CArt</li>
                            </ul>
                        </div>
                    </Menu>
                    {/* Message */}
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchoElMess}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchoElMess)}
                        onClose={handleCloseMessMenu}
                    >
                        <div  onClick={handleCloseMessMenu}>
                            <ul>
                                <li>Hello</li>
                                <li>Hello</li>
                                <li>Hello</li>
                                <li>Hello</li>
                                <li>Hello</li>
                            </ul>
                        </div>
                    </Menu>
                    {/* Profile */}
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        <Divider light />
                        <MenuItem onClick={handleClickLogout}>
                            <Typography textAlign="center">Đăng xuất</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            )
        } else {
            return (
                <Box sx={{ flexGrow: 1, display: { md: 'flex' }, justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <div style={{ position: 'relative' }}>
                            <Link href='/login' passHref>
                                <Button className={style.navItemLine} style={{ color: 'white', fontWeight: '600', textTransform: 'none' }}>Đăng nhập</Button>
                            </Link>
                        </div>
                        <Divider style={{ color: 'white', width: '3px', height: '20px', backgroundColor: 'white', transform: 'translateY(+40%)' }} orientation="vertical" flexItem />
                        <div style={{ position: 'relative' }}>
                            <Link href='/register' passHref>
                                <Button className={style.navItemLine} style={{ color: 'white', fontWeight: '600', textTransform: 'none' }}>Đăng ký</Button>
                            </Link>
                        </div>
                    </div>
                </Box >
            )
        }
    }

    return (
        <AppBar style={{ backgroundColor: '#2BBCBA' }} position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img
                            alt=""
                            src='/img/logo.png'
                            width="70"
                            height="40"
                            style={{ borderRadius: '50%', marginRight: '5px' }}
                            className="d-inline-block align-top"></img>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href={page.url} passHref>
                                            <Button style={{ color: 'black', fontWeight: '500' }}>{page.name}</Button>
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Search style={{ backgroundColor: 'white', color: '#979797' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Nhập tên sách cần tìm"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <div style={{ position: 'relative' }}>
                                <Link href={page.url} passHref>
                                    <Button className={props.active === page.active ? style.activeItem + ' ' + style.navItemLine : style.navItemLine} style={{ color: 'white', fontWeight: '600' }}>{page.name}</Button>
                                </Link>
                            </div>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Search style={{ backgroundColor: 'white', color: '#979797' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Nhập tên sách cần tìm"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    {renderStatusLogin()}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
