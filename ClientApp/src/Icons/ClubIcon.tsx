import React from "react";
import afcBournemouthIcon from "../assets/epl-club-logos/AFC Bournemouth.png";
import arsenalIcon from "../assets/epl-club-logos/Arsenal.png";
import astonVillaIcon from "../assets/epl-club-logos/Aston Villa.png";
import brentfordIcon from "../assets/epl-club-logos/Brentford.png";
import brightonHoveAlbionIcon from "../assets/epl-club-logos/Brighton & Hove Albion.png";
import chelseaIcon from "../assets/epl-club-logos/Chelsea.png";
import crystalPalaceIcon from "../assets/epl-club-logos/Crystal Palace.png";
import evertonIcon from "../assets/epl-club-logos/Everton.png";
import fulhamIcon from "../assets/epl-club-logos/Fulham.png";
import leedsUnitedIcon from "../assets/epl-club-logos/Leeds United.png";
import leicesterCityIcon from "../assets/epl-club-logos/Leicester City.png";
import liverpoolIcon from "../assets/epl-club-logos/Liverpool.png";
import manchesterCityIcon from "../assets/epl-club-logos/Manchester City.png";
import manchesterUnitedIcon from "../assets/epl-club-logos/Manchester United.png";
import newcastleIcon from "../assets/epl-club-logos/Newcastle United.png";
import nottinghamForestIcon from "../assets/epl-club-logos/Nottingham Forest.png";
import southamptonIcon from "../assets/epl-club-logos/Southampton.png";
import tottenhamHotspurIcon from "../assets/epl-club-logos/Tottenham Hotspur.png";
import westHamUnitedIcon from "../assets/epl-club-logos/West Ham United.png";
import wolvesIcon from "../assets/epl-club-logos/Wolves.png";
import iconNotFoundIcon from "../assets/epl-club-logos/Icon Not Found.png";


interface ClubIconProps {
	clubName: string,
	style: any
}

export function ClubIcon(props: ClubIconProps) {
	return (
		<React.Fragment>
			<img src={resolveClubIcon(props.clubName)} style={props.style} alt="" />
		</React.Fragment>
	)
}

function resolveClubIcon(clubName: string) {
	switch (clubName) {
		case 'AFC Bournemouth':
			return afcBournemouthIcon;
		case 'Arsenal':
			return arsenalIcon;
		case 'Aston Villa':
			return astonVillaIcon;
		case 'Brentford':
			return brentfordIcon;
		case 'Brighton Hove Albion':
			return brightonHoveAlbionIcon;
		case 'Chelsea':
			return chelseaIcon;
		case 'Crystal Palace':
			return crystalPalaceIcon;
		case 'Everton':
			return evertonIcon;
		case 'Fulham':
			return fulhamIcon;
		case 'Leeds United':
			return leedsUnitedIcon;
		case 'Leicester City':
			return leicesterCityIcon;
		case 'Liverpool':
			return liverpoolIcon;
		case 'Manchester City':
			return manchesterCityIcon;
		case 'Manchester United':
			return manchesterUnitedIcon;
		case 'Newcastle United':
			return newcastleIcon;
		case 'Nottingham Forest':
			return nottinghamForestIcon;
		case 'Southampton':
			return southamptonIcon;
		case 'Tottenham Hotspur':
			return tottenhamHotspurIcon;
		case 'West Ham United':
			return westHamUnitedIcon;
		case 'Wolves':
			return wolvesIcon;
		default:
			return iconNotFoundIcon;
    }
}
