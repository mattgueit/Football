import React from "react";
import afcBournemouthIcon from "../assets/epl-club-logos/afcBournemouth.png";
import arsenalIcon from "../assets/epl-club-logos/arsenal.png";
import astonVillaIcon from "../assets/epl-club-logos/astonVilla.png";
import brentfordIcon from "../assets/epl-club-logos/brentford.png";
import brightonHoveAlbionIcon from "../assets/epl-club-logos/brightonHoveAlbion.png";
import chelseaIcon from "../assets/epl-club-logos/chelsea.png";
import crystalPalaceIcon from "../assets/epl-club-logos/crystalPalace.png";
import evertonIcon from "../assets/epl-club-logos/everton.png";
import fulhamIcon from "../assets/epl-club-logos/fulham.png";
import leedsUnitedIcon from "../assets/epl-club-logos/leedsUnited.png";
import leicesterCityIcon from "../assets/epl-club-logos/leicesterCity.png";
import liverpoolIcon from "../assets/epl-club-logos/liverpool.png";
import manchesterCityIcon from "../assets/epl-club-logos/manchesterCity.png";
import manchesterUnitedIcon from "../assets/epl-club-logos/manchesterUnited.png";
import newcastleIcon from "../assets/epl-club-logos/newcastleUnited.png";
import nottinghamForestIcon from "../assets/epl-club-logos/nottinghamForest.png";
import southamptonIcon from "../assets/epl-club-logos/southampton.png";
import tottenhamHotspurIcon from "../assets/epl-club-logos/tottenhamHotspur.png";
import westHamUnitedIcon from "../assets/epl-club-logos/westHamUnited.png";
import wolvesIcon from "../assets/epl-club-logos/wolves.png";
import iconNotFoundIcon from "../assets/epl-club-logos/iconNotFound.png";


interface ClubLogoProps {
	clubName: string,
	style: any
}

export function ClubLogo(props: ClubLogoProps) {
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
