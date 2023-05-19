import JoinInnerOutlinedIcon from "@mui/icons-material/JoinInnerOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const PontoIcon = ({ name, ...props }) => {
	const iconsType = {
		portfolio: <JoinInnerOutlinedIcon {...props} />,
		request: <RequestQuoteOutlinedIcon {...props} />,
		gat: <CurrencyExchangeOutlinedIcon {...props} />,
		money: <AttachMoneyOutlinedIcon {...props} />,
		right: <ChevronRightOutlinedIcon {...props} />,
		wallet: <AccountBalanceWalletOutlinedIcon {...props} />,
		capital: <AccountBalanceOutlinedIcon {...props} />,
		notify: <VerifiedOutlinedIcon {...props} />,
		toke: <TokenOutlinedIcon {...props} />,
		settings: <SettingsOutlinedIcon {...props} />,
		bell: <NotificationsOutlinedIcon {...props} />,
		open: <OpenInFullOutlinedIcon {...props} />,
		visibility: <VisibilityOutlinedIcon {...props} />,
		visibilityOff: <VisibilityOffOutlinedIcon {...props} />,
		like: <ThumbUpOutlinedIcon {...props} />,
	};

	const myIcon = iconsType[name] || iconsType.portfolio;

	return <>{myIcon}</>;
};

export default PontoIcon;
